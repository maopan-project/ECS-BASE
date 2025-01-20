import GameService from "../GameService";
import NetworkReceiveComponent from "../components/NetworkComponent";
import { Component } from "./Component";
import { EntityType, SystemType, WorldCycleType } from "./ECSConfig";
import { convertComponentTypeIDToIndex, getComponentsProtoBits, isContainSubBits } from "./ECSTool";
import Entity from "./Entity";
import System from "./System";

export default class World {
    private constructor() { }
    private static _ins: World = null;
    public static get instance() {
        if (!World._ins) {
            World._ins = new World();
        }

        return World._ins;
    }

    private allEntities: Entity[] = [];
    private entitiesByForEach: Map<number, Set<Entity>> = new Map();
    private entitiesComponentsDirtyInThisCycle: Entity[] = [];
    private useEntityID = 0;
    private singletonEntity: Entity = null;
    private entitiesDestroyForeachInThisCycle: Entity[] = [];
    private entitiesDestroyInThisCycle: Entity[] = [];
    private netWorkLogicFn: () => number;

    cycleType: WorldCycleType = WorldCycleType.Network;
    newEntitiesInThisCycle: Entity[] = [];
    systemInCycle: System[][] = [];
    lastLogicRemainTime: number = 0;
    lastFrameUTC: number = 0;
    networkUpdateInterval: number = 0;
    fixedUpdateInterval: number = 0;
    frameDt: number = 0;
    logicCycleCount: number = 0;
    cycleCount: number = 0;
    worldInCycle: boolean = false;
    uiLerpValue: number = 0;

    forEach(types: { prototype: Component }[], fn: (entity: Entity, ...components: Component[]) => void) {
        let bits = getComponentsProtoBits(types);

        if (!this.entitiesByForEach.has(bits)) {
            this.onRegisterNewForEach(bits);
        }

        let indexes: number[] = [];
        types.forEach(type => {
            indexes.push(convertComponentTypeIDToIndex(type.prototype.type));
        });

        let entities = this.entitiesByForEach.get(bits);
        entities.forEach(e => {
            fn(e, ...e.getComponentsByIndexes(indexes));
        });
    }

    private onRegisterNewForEach(bits: number) {
        let entities = new Set<Entity>();

        for (let i = 0; i < this.allEntities.length; i++) {
            const entity = this.allEntities[i];
            if (entity && entity.hasComponentBits(bits)) {
                entities.add(entity);
            }
        }

        this.entitiesByForEach.set(bits, entities);

        return entities;
    }

    addEntityToWorld(entity: Entity): void {
        this.useEntityID++;
        entity.id = this.useEntityID;
        entity.copyComponents();
        this.allEntities.push(entity);
        this.newEntitiesInThisCycle.push(entity);
    }

    getEntityByID(entityID: number) {
        return this.allEntities[entityID - 1];
    }

    getNewEntity(entityType: EntityType): Entity {
        let entity = new Entity();
        entity.type = entityType;
        return entity;
    }

    getSingletonEntity() {
        if (!this.singletonEntity) {
            this.singletonEntity = this.getNewEntity(EntityType.Singleton);
            this.addEntityToWorld(this.singletonEntity);
        }

        return this, this.singletonEntity;
    }

    getSingletonEntityComponent<T extends Component>(type: { prototype: T, new(): T }): T {
        let entity = this.getSingletonEntity();

        if (!entity.hasComponent<T>(type)) {
            entity.addComponent(type);
        }

        return entity.getComponent<T>(type);
    }

    getEntitiesByComponents(types: { prototype: Component }[]): Set<Entity> {
        let bits = getComponentsProtoBits(types);
        let entities = this.entitiesByForEach.get(bits);
        if (!entities) {
            entities = this.onRegisterNewForEach(bits);
        }

        return entities;
    }

    addSystemToCycle(system: System): void {
        system.world = this;

        if (!this.systemInCycle[system.type]) {
            this.systemInCycle[system.type] = [];
        }

        this.systemInCycle[system.type].push(system);
    }

    startCycle() {
        this.lastFrameUTC = Date.now();
        this.worldInCycle = true;
        this.cycleCount = 0;
        this.logicCycleCount = 0;
        this.networkUpdateInterval = 1000 / 15;
        this.fixedUpdateInterval = 1000 / 30;
        this.cycleType = WorldCycleType.Network;
        this.netWorkLogicFn = GameService.logicCycleThisCycle;
        this.getSingletonEntityComponent(NetworkReceiveComponent).startTime = Date.now();
    }

    cycle(): void {
        if (this.cycleType == WorldCycleType.RealTime) {
            this.cycleWithRealTime();
        } else if (this.cycleType == WorldCycleType.Network) {
            this.cycleWithNetwork();
        }
    }

    cycleWithRealTime(): void {
        let currentUTC = Date.now();
        let frameTotalTime = this.getThisFrameTime(currentUTC);
        let logicUpdateCount = Math.floor(frameTotalTime / this.fixedUpdateInterval);
        this.frameDt = currentUTC - this.lastFrameUTC;
        this.lastFrameUTC = currentUTC;
        this.lastLogicRemainTime = frameTotalTime - (logicUpdateCount * this.fixedUpdateInterval);

        for (let i = SystemType.Network; i < SystemType.LogicBeforePhysics; i++) {
            let systems = this.systemInCycle[i];

            if (!systems) {
                continue;
            }

            for (let j = 0; j < systems.length; j++) {
                let system = systems[j];
                system.onUpdate();
                this.updateEntitiesByForEach();
            }
        }

        for (let i = 0; i < logicUpdateCount; i++) {
            for (let j = SystemType.LogicBeforePhysics; j < SystemType.Render; j++) {
                let systems = this.systemInCycle[j];

                if (!systems) {
                    continue;
                }

                for (let k = 0; k < systems.length; k++) {
                    let system = systems[k];
                    system.onUpdate();
                    this.updateEntitiesByForEach();
                }
            }
        }

        for (let i = SystemType.Render; i < SystemType.End; i++) {
            let systems = this.systemInCycle[i];

            if (!systems) {
                continue;
            }

            for (let j = 0; j < systems.length; j++) {
                let system = systems[j];
                system.onUpdate();
                this.updateEntitiesByForEach();
            }
        }

        this.updateNewEntitiesByForEach();

        this.logicCycleCount += logicUpdateCount;
        this.cycleCount++;
    }

    cycleWithNetwork(): void {
        let currentUTC = Date.now();
        let frameTotalTime = this.getThisFrameTime(currentUTC);
        let logicUpdateCount = this.netWorkLogicFn();
        this.frameDt = currentUTC - this.lastFrameUTC;
        this.lastFrameUTC = currentUTC;
        this.lastLogicRemainTime = frameTotalTime - (logicUpdateCount * this.fixedUpdateInterval);

        for (let i = SystemType.Network; i < SystemType.LogicBeforePhysics; i++) {
            let systems = this.systemInCycle[i];

            if (!systems) {
                continue;
            }

            for (let j = 0; j < systems.length; j++) {
                let system = systems[j];
                system.onUpdate();
                this.updateEntitiesByForEach();
                this.removeDestroyedEntityByForeach();
            }
        }

        for (let i = 0; i < logicUpdateCount; i++) {
            this.logicCycleCount++;
            this.backupEntityComponents();

            for (let j = SystemType.LogicBeforePhysics; j < SystemType.Render; j++) {
                let systems = this.systemInCycle[j];

                if (!systems) {
                    continue;
                }

                for (let k = 0; k < systems.length; k++) {
                    let system = systems[k];
                    system.onUpdate();
                    this.updateEntitiesByForEach();
                    this.removeDestroyedEntityByForeach();
                }
            }
        }

        let lastFrameTime = this.getSingletonEntityComponent(NetworkReceiveComponent).startTime
            + (this.logicCycleCount - 1) * this.fixedUpdateInterval;
        this.updateUILerpValue(lastFrameTime);

        if (this.logicCycleCount >= 1) {
            for (let i = SystemType.Render; i < SystemType.End; i++) {
                let systems = this.systemInCycle[i];

                if (!systems) {
                    continue;
                }

                for (let j = 0; j < systems.length; j++) {
                    let system = systems[j];
                    system.onUpdate();
                    this.updateEntitiesByForEach();
                    this.removeDestroyedEntityByForeach();
                }
            }

            this.updateNewEntitiesByForEach();
        }

        this.removeDestroyedEntities();
        this.cycleCount++;
    }

    updateUILerpValue(lastFrameTime: number) {
        let value = (Date.now() - lastFrameTime) / this.fixedUpdateInterval;
        this.uiLerpValue = Math.min(value, 2);// 最大取到2倍
    }

    getThisFrameTime(currentTime: number): number {
        return this.lastLogicRemainTime + currentTime - this.lastFrameUTC;
    }

    updateEntitiesByForEach(): void {
        for (let i = 0; i < this.entitiesComponentsDirtyInThisCycle.length; i++) {
            let entity = this.entitiesComponentsDirtyInThisCycle[i];
            let oldBits = entity.oldBits;
            let newBits = entity.componentsBits;

            this.entitiesByForEach.forEach((set, bits) => {
                let containOldBits = isContainSubBits(bits, oldBits);
                let containNewBits = isContainSubBits(bits, newBits);

                if (containOldBits && !containNewBits) {
                    set.delete(entity);
                } else if (!containNewBits && containNewBits) {
                    set.add(entity);
                }
            });

            entity.cancelDirty();
        }

        this.entitiesComponentsDirtyInThisCycle = [];
    }

    updateNewEntitiesByForEach() {
        for (let i = 0; i < this.newEntitiesInThisCycle.length; i++) {
            let entity = this.newEntitiesInThisCycle[i];
            let newBits = entity.componentsBits;

            this.entitiesByForEach.forEach((set, bits) => {
                if (isContainSubBits(bits, newBits)) {
                    set.add(entity);
                }
            });
        }

        this.newEntitiesInThisCycle = [];
    }

    notifyEntityComponentsDirty(entity: Entity) {
        this.entitiesComponentsDirtyInThisCycle.push(entity);
    }

    backupEntityComponents() {
        for (let i = 0; i < this.allEntities.length; i++) {
            let entity = this.allEntities[i];
            entity?.copyComponents();
        }
    }

    notifyEntityDestroyed(entity: Entity) {
        this.entitiesDestroyForeachInThisCycle.push(entity);
    }

    removeDestroyedEntityByForeach() {
        for (let i = 0; i < this.entitiesDestroyForeachInThisCycle.length; i++) {
            let entity = this.entitiesDestroyForeachInThisCycle[i];
            let oldBits = entity.oldBits;
            let newBits = entity.componentsBits;

            this.entitiesByForEach.forEach((set, systemBits) => {
                let containOldBits = isContainSubBits(systemBits, oldBits);
                let containNewBits = isContainSubBits(systemBits, newBits);

                if (containOldBits || containNewBits) {
                    set.delete(entity);
                }
            });

            this.entitiesDestroyInThisCycle.push(entity);
        }

        this.entitiesDestroyForeachInThisCycle.length = 0;
    }

    removeDestroyedEntities() {
        for (let i = 0; i < this.entitiesDestroyInThisCycle.length; i++) {
            let entity = this.entitiesDestroyInThisCycle[i];
            this.allEntities[entity.id - 1] = null;// 这里有问题，列表会越来越大（后续需要用环形列表处理）
        }

        this.entitiesDestroyInThisCycle.length = 0;
    }
}