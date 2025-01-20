import GameTool from "../../GameTool";
import AutoDestroyComponent from "../components/AutoDestroyComponent";
import BulletComponent from "../components/BulletComponent";
import CampComponent from "../components/CampComponent";
import CollisionComponent from "../components/CollisionComponent";
import FireComponent from "../components/FireComponent";
import MoveComponent from "../components/MoveComponent";
import NetworkReceiveComponent from "../components/NetworkComponent";
import TransformComponent from "../components/TransformComponent";
import { EntityType, SystemType } from "../framework/ECSConfig";
import Entity from "../framework/Entity";
import System from "../framework/System";
import World from "../framework/World";

export default class FireSystem implements System {
    world: World;

    type: SystemType = SystemType.LogicBeforePhysics;

    onUpdate(): void {
        let msgOp = this.world.getSingletonEntityComponent(NetworkReceiveComponent);

        if (msgOp.msgThisLogic) {
            let operations = msgOp.msgThisLogic.operations;
            for (let i = 0; i < operations.length; i++) {
                let op = operations[i];
                let entity = this.world.getEntityByID(op.entityID);
                if (entity) {
                    let fireComponent = entity.getComponent(FireComponent);
                    fireComponent.wantFire = op.body.isFire;
                }
            }
        }

        this.world.forEach([FireComponent], (entity: Entity, fire: FireComponent) => {
            if (fire.currentCoolDown === 0 && fire.wantFire) {
                fire.isFire = true;
                fire.currentCoolDown = fire.maxCoolDown;
            }

            if (fire.currentCoolDown > 0) {
                fire.currentCoolDown--;
            }

            if (fire.isFire) {
                if (fire.currentFrame < fire.totalFireFrame) {
                    fire.currentFrame++;
                    if (fire.currentFrame === fire.fireFrame) {
                        this.generateBullet(fire, entity);
                    }
                }

                if (fire.currentFrame === fire.totalFireFrame) {
                    fire.currentFrame = 0;
                    fire.isFire = false;
                }
            }
        });
    }

    generateBullet(fire: FireComponent, fromEntity: Entity) {
        let entity = this.world.getNewEntity(EntityType.Bullet);
        let move = entity.addComponent(MoveComponent);
        let trans = entity.addComponent(TransformComponent);
        let camp = entity.addComponent(CampComponent);
        let bullet = entity.addComponent(BulletComponent);
        let collision = entity.addComponent(CollisionComponent);
        let autoDestroy = entity.addComponent(AutoDestroyComponent);

        this.parseBulletMove(
            fromEntity.getComponent(TransformComponent).angle,
            move,
            trans
        );

        trans.position.set(fromEntity.getComponent(TransformComponent).position);
        trans.collisionRadius = 5;
        camp.camp = fromEntity.getComponent(CampComponent).camp;
        bullet.fromEntityID = fromEntity.id;

        this.world.addEntityToWorld(entity);
    }

    parseBulletMove(angle: number, move: MoveComponent, trans: TransformComponent) {
        move.moveSpeed.set(GameTool.pForAngle(angle / 180 * Math.PI));
        move.moveSpeed.multiply(30);// 提速

        trans.angle = 0;// 默认0
    }
}