System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameService, NetworkReceiveComponent, EntityType, SystemType, WorldCycleType, convertComponentTypeIDToIndex, getComponentsProtoBits, isContainSubBits, Entity, World, _crd;

  function _reportPossibleCrUseOfGameService(extras) {
    _reporterNs.report("GameService", "../GameService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkReceiveComponent(extras) {
    _reporterNs.report("NetworkReceiveComponent", "../components/NetworkComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "./Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityType(extras) {
    _reporterNs.report("EntityType", "./ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "./ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorldCycleType(extras) {
    _reporterNs.report("WorldCycleType", "./ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertComponentTypeIDToIndex(extras) {
    _reporterNs.report("convertComponentTypeIDToIndex", "./ECSTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetComponentsProtoBits(extras) {
    _reporterNs.report("getComponentsProtoBits", "./ECSTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisContainSubBits(extras) {
    _reporterNs.report("isContainSubBits", "./ECSTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "./Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "./System", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameService = _unresolved_2.default;
    }, function (_unresolved_3) {
      NetworkReceiveComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      EntityType = _unresolved_4.EntityType;
      SystemType = _unresolved_4.SystemType;
      WorldCycleType = _unresolved_4.WorldCycleType;
    }, function (_unresolved_5) {
      convertComponentTypeIDToIndex = _unresolved_5.convertComponentTypeIDToIndex;
      getComponentsProtoBits = _unresolved_5.getComponentsProtoBits;
      isContainSubBits = _unresolved_5.isContainSubBits;
    }, function (_unresolved_6) {
      Entity = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e482fFzU99IFZXOklxZnM5b", "World", undefined);

      _export("default", World = class World {
        constructor() {
          this.allEntities = [];
          this.entitiesByForEach = new Map();
          this.entitiesComponentsDirtyInThisCycle = [];
          this.useEntityID = 0;
          this.singletonEntity = null;
          this.entitiesDestroyForeachInThisCycle = [];
          this.entitiesDestroyInThisCycle = [];
          this.netWorkLogicFn = void 0;
          this.cycleType = (_crd && WorldCycleType === void 0 ? (_reportPossibleCrUseOfWorldCycleType({
            error: Error()
          }), WorldCycleType) : WorldCycleType).Network;
          this.newEntitiesInThisCycle = [];
          this.systemInCycle = [];
          this.lastLogicRemainTime = 0;
          this.lastFrameUTC = 0;
          this.networkUpdateInterval = 0;
          this.fixedUpdateInterval = 0;
          this.frameDt = 0;
          this.logicCycleCount = 0;
          this.cycleCount = 0;
          this.worldInCycle = false;
          this.uiLerpValue = 0;
        }

        static get instance() {
          if (!World._ins) {
            World._ins = new World();
          }

          return World._ins;
        }

        forEach(types, fn) {
          let bits = (_crd && getComponentsProtoBits === void 0 ? (_reportPossibleCrUseOfgetComponentsProtoBits({
            error: Error()
          }), getComponentsProtoBits) : getComponentsProtoBits)(types);

          if (!this.entitiesByForEach.has(bits)) {
            this.onRegisterNewForEach(bits);
          }

          let indexes = [];
          types.forEach(type => {
            indexes.push((_crd && convertComponentTypeIDToIndex === void 0 ? (_reportPossibleCrUseOfconvertComponentTypeIDToIndex({
              error: Error()
            }), convertComponentTypeIDToIndex) : convertComponentTypeIDToIndex)(type.prototype.type));
          });
          let entities = this.entitiesByForEach.get(bits);
          entities.forEach(e => {
            fn(e, ...e.getComponentsByIndexes(indexes));
          });
        }

        onRegisterNewForEach(bits) {
          let entities = new Set();

          for (let i = 0; i < this.allEntities.length; i++) {
            const entity = this.allEntities[i];

            if (entity && entity.hasComponentBits(bits)) {
              entities.add(entity);
            }
          }

          this.entitiesByForEach.set(bits, entities);
          return entities;
        }

        addEntityToWorld(entity) {
          this.useEntityID++;
          entity.id = this.useEntityID;
          entity.copyComponents();
          this.allEntities.push(entity);
          this.newEntitiesInThisCycle.push(entity);
        }

        getEntityByID(entityID) {
          return this.allEntities[entityID - 1];
        }

        getNewEntity(entityType) {
          let entity = new (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
            error: Error()
          }), Entity) : Entity)();
          entity.type = entityType;
          return entity;
        }

        getSingletonEntity() {
          if (!this.singletonEntity) {
            this.singletonEntity = this.getNewEntity((_crd && EntityType === void 0 ? (_reportPossibleCrUseOfEntityType({
              error: Error()
            }), EntityType) : EntityType).Singleton);
            this.addEntityToWorld(this.singletonEntity);
          }

          return this, this.singletonEntity;
        }

        getSingletonEntityComponent(type) {
          let entity = this.getSingletonEntity();

          if (!entity.hasComponent(type)) {
            entity.addComponent(type);
          }

          return entity.getComponent(type);
        }

        getEntitiesByComponents(types) {
          let bits = (_crd && getComponentsProtoBits === void 0 ? (_reportPossibleCrUseOfgetComponentsProtoBits({
            error: Error()
          }), getComponentsProtoBits) : getComponentsProtoBits)(types);
          let entities = this.entitiesByForEach.get(bits);

          if (!entities) {
            entities = this.onRegisterNewForEach(bits);
          }

          return entities;
        }

        addSystemToCycle(system) {
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
          this.cycleType = (_crd && WorldCycleType === void 0 ? (_reportPossibleCrUseOfWorldCycleType({
            error: Error()
          }), WorldCycleType) : WorldCycleType).Network;
          this.netWorkLogicFn = (_crd && GameService === void 0 ? (_reportPossibleCrUseOfGameService({
            error: Error()
          }), GameService) : GameService).logicCycleThisCycle;
          this.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent).startTime = Date.now();
        }

        cycle() {
          if (this.cycleType == (_crd && WorldCycleType === void 0 ? (_reportPossibleCrUseOfWorldCycleType({
            error: Error()
          }), WorldCycleType) : WorldCycleType).RealTime) {
            this.cycleWithRealTime();
          } else if (this.cycleType == (_crd && WorldCycleType === void 0 ? (_reportPossibleCrUseOfWorldCycleType({
            error: Error()
          }), WorldCycleType) : WorldCycleType).Network) {
            this.cycleWithNetwork();
          }
        }

        cycleWithRealTime() {
          let currentUTC = Date.now();
          let frameTotalTime = this.getThisFrameTime(currentUTC);
          let logicUpdateCount = Math.floor(frameTotalTime / this.fixedUpdateInterval);
          this.frameDt = currentUTC - this.lastFrameUTC;
          this.lastFrameUTC = currentUTC;
          this.lastLogicRemainTime = frameTotalTime - logicUpdateCount * this.fixedUpdateInterval;

          for (let i = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Network; i < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).LogicBeforePhysics; i++) {
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
            for (let j = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).LogicBeforePhysics; j < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).Render; j++) {
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

          for (let i = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Render; i < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).End; i++) {
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

        cycleWithNetwork() {
          let currentUTC = Date.now();
          let frameTotalTime = this.getThisFrameTime(currentUTC);
          let logicUpdateCount = this.netWorkLogicFn();
          this.frameDt = currentUTC - this.lastFrameUTC;
          this.lastFrameUTC = currentUTC;
          this.lastLogicRemainTime = frameTotalTime - logicUpdateCount * this.fixedUpdateInterval;

          for (let i = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Network; i < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).LogicBeforePhysics; i++) {
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

            for (let j = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).LogicBeforePhysics; j < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).Render; j++) {
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

          let lastFrameTime = this.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent).startTime + (this.logicCycleCount - 1) * this.fixedUpdateInterval;
          this.updateUILerpValue(lastFrameTime);

          if (this.logicCycleCount >= 1) {
            for (let i = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).Render; i < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).End; i++) {
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

        updateUILerpValue(lastFrameTime) {
          let value = (Date.now() - lastFrameTime) / this.fixedUpdateInterval;
          this.uiLerpValue = Math.min(value, 2); // 最大取到2倍
        }

        getThisFrameTime(currentTime) {
          return this.lastLogicRemainTime + currentTime - this.lastFrameUTC;
        }

        updateEntitiesByForEach() {
          for (let i = 0; i < this.entitiesComponentsDirtyInThisCycle.length; i++) {
            let entity = this.entitiesComponentsDirtyInThisCycle[i];
            let oldBits = entity.oldBits;
            let newBits = entity.componentsBits;
            this.entitiesByForEach.forEach((set, bits) => {
              let containOldBits = (_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(bits, oldBits);
              let containNewBits = (_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(bits, newBits);

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
              if ((_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(bits, newBits)) {
                set.add(entity);
              }
            });
          }

          this.newEntitiesInThisCycle = [];
        }

        notifyEntityComponentsDirty(entity) {
          this.entitiesComponentsDirtyInThisCycle.push(entity);
        }

        backupEntityComponents() {
          for (let i = 0; i < this.allEntities.length; i++) {
            let entity = this.allEntities[i];
            entity == null ? void 0 : entity.copyComponents();
          }
        }

        notifyEntityDestroyed(entity) {
          this.entitiesDestroyForeachInThisCycle.push(entity);
        }

        removeDestroyedEntityByForeach() {
          for (let i = 0; i < this.entitiesDestroyForeachInThisCycle.length; i++) {
            let entity = this.entitiesDestroyForeachInThisCycle[i];
            let oldBits = entity.oldBits;
            let newBits = entity.componentsBits;
            this.entitiesByForEach.forEach((set, systemBits) => {
              let containOldBits = (_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(systemBits, oldBits);
              let containNewBits = (_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(systemBits, newBits);

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
            this.allEntities[entity.id - 1] = null;
          }

          this.entitiesDestroyInThisCycle.length = 0;
        }

      });

      World._ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0858ae20a3b1ab9a38e433ccdcd23e8b189ff31f.js.map