import { Component, Prefab, _decorator, instantiate } from "cc";
import { GameActor } from "../../ui/GameActor";
import GameBullet from "../../ui/GameBullet";
import GameUIBase from "../../ui/GameUIBase";
import { EntityType, SystemType } from "../framework/ECSConfig";
import System from "../framework/System";
import World from "../framework/World";
const { ccclass, property } = _decorator;

@ccclass
export default class RenderSystem extends Component implements System {
    @property(Prefab)
    PrefabActor: Prefab = null;

    @property(Prefab)
    PrefabBullet: Prefab = null;

    world: World = null;

    type: SystemType = SystemType.Render;

    protected onLoad(): void {
        World.instance.addSystemToCycle(this);
    }

    onUpdate(): void {
        let entities = this.world.newEntitiesInThisCycle;

        for (let i = 0; i < entities.length; i++) {
            let entity = entities[i];
            let uiBase: GameUIBase = null;

            if (entity.type === EntityType.Actor) {
                uiBase = instantiate(this.PrefabActor).getComponent(GameActor);
            } else if (entity.type === EntityType.Bullet) {
                uiBase = instantiate(this.PrefabBullet).getComponent(GameBullet);
            }

            if (uiBase) {
                uiBase.entity = entity;
                uiBase.node.parent = this.node;
            }

        }
    }

}