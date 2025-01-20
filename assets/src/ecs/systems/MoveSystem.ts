import MoveComponent from "../components/MoveComponent";
import NetworkReceiveComponent from "../components/NetworkComponent";
import TransformComponent from "../components/TransformComponent";
import { SystemType } from "../framework/ECSConfig";
import Entity from "../framework/Entity";
import System from "../framework/System";
import World from "../framework/World";


export class MoveSystem implements System {
    world: World = null;

    type: SystemType = SystemType.Physics;

    onUpdate(): void {
        let msgOp = this.world.getSingletonEntityComponent(NetworkReceiveComponent);

        if (msgOp.msgThisLogic) {
            let operations = msgOp.msgThisLogic.operations;
            for (let i = 0; i < operations.length; i++) {
                let op = operations[i];
                let entity = this.world.getEntityByID(op.entityID);
                if (entity) {
                    entity.getComponent(MoveComponent).moveSpeed.set(
                        op.body.dir.x * 5,
                        op.body.dir.y * 5,
                        op.body.dir.z * 5);
                }
            }
        }

        this.world.forEach([MoveComponent, TransformComponent], (entity: Entity, move: MoveComponent, transform: TransformComponent) => {
            transform.position.add(move.moveSpeed);
            transform.angle = move.moveSpeed.x > 0 ? 0 : (move.moveSpeed.x < 0 ? 180 : transform.angle);
        });
    }
} 