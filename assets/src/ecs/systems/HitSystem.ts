import GameTool from "../../GameTool";
import ActorStatusComponent from "../components/ActorStatusComponent";
import BulletComponent from "../components/BulletComponent";
import CampComponent from "../components/CampComponent";
import CollisionComponent from "../components/CollisionComponent";
import { SystemType } from "../framework/ECSConfig";
import Entity from "../framework/Entity";
import System from "../framework/System";
import World from "../framework/World";

export default class HitSystem implements System {
    world: World;
    type: SystemType = SystemType.LogicAfterPhysics;

    onUpdate(): void {
        this.world.forEach([CollisionComponent, CampComponent, BulletComponent],
            (e: Entity, collision: CollisionComponent, camp: CampComponent, bullet: BulletComponent) => {

                let collisionEntities = collision.otherCollisionEntityIDs;
                for (let i = 0; i < collisionEntities.length; i++) {
                    let otherID = collisionEntities[i];
                    let otherEntity = this.world.getEntityByID(otherID);
                    let otherActorStatus = otherEntity.getComponent(ActorStatusComponent);
                    let otherCamp = otherEntity.getComponent(CampComponent);

                    if (otherActorStatus && otherCamp && otherCamp.camp !== camp.camp) {
                        let criticalHit = GameTool.radom(0, 1);
                        let damage = bullet.damage;
                        if (criticalHit < 0.2) {
                            damage *= 1.5;
                            console.log('暴击了');
                        }

                        otherActorStatus.healthPoint -= damage;
                        this.world.getEntityByID(bullet.fromEntityID).getComponent(ActorStatusComponent).scoring++;
                        console.log('子弹打到人了');
                    }
                }

            }
        );
    }

}