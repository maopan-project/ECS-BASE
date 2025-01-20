import CollisionComponent from "../components/CollisionComponent";
import TransformComponent from "../components/TransformComponent";
import { SystemType } from "../framework/ECSConfig";
import Entity from "../framework/Entity";
import System from "../framework/System";
import World from "../framework/World";

export default class CollisionDetectionSystem implements System {
    world: World;
    type: SystemType = SystemType.Physics;

    onUpdate(): void {
        let entitiesSet = this.world.getEntitiesByComponents([TransformComponent, CollisionComponent]);
        let arrEntities: Entity[] = [...entitiesSet];

        for (let i = 0; i < arrEntities.length; i++)
            arrEntities[i].getComponent(CollisionComponent).otherCollisionEntityIDs.length = 0;

        // 这里是最暴力的双重for
        for (let i = 0; i < arrEntities.length; i++) {
            let entity = arrEntities[i];
            let transform = entity.getComponent(TransformComponent);
            if (transform.collisionRadius === -1) {
                continue;
            }

            let collision = entity.getComponent(CollisionComponent);
            for (let j = i + 1; j < arrEntities.length; j++) {
                let otherEntity = arrEntities[j];
                let otherTransform = otherEntity.getComponent(TransformComponent);
                if (otherTransform.collisionRadius === -1) {
                    continue;
                }

                let otherCollision = otherEntity.getComponent(CollisionComponent);

                let distance = transform.position.distanceSquared(otherTransform.position);
                let radiusSum = transform.collisionRadius ** 2 + otherTransform.collisionRadius ** 2;

                if (distance < radiusSum) {
                    collision.otherCollisionEntityIDs.push(otherEntity.id);
                    otherCollision.otherCollisionEntityIDs.push(entity.id);
                    console.log('发生了碰撞');
                }

            }
        }
    }


}