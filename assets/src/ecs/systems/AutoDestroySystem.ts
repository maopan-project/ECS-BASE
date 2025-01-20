import AutoDestroyComponent from "../components/AutoDestroyComponent";
import { SystemType } from "../framework/ECSConfig";
import Entity from "../framework/Entity";
import System from "../framework/System";
import World from "../framework/World";

export default class AutoDestroySystem implements System {
    world: World;

    type: SystemType = SystemType.LogicAfterPhysics;

    onUpdate(): void {
        this.world.forEach([AutoDestroyComponent], (entity: Entity, autoDestroy: AutoDestroyComponent) => {
            autoDestroy.lifeTime++;

            if (autoDestroy.lifeTime > autoDestroy.maxLifeTime) {
                console.log('auto destroy entity');
                entity.markDestroy();
            }
        });
    }

}