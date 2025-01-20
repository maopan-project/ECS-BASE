import { Vec3, _decorator, v3 } from "cc";
import MoveComponent from "../ecs/components/MoveComponent";
import TransformComponent from "../ecs/components/TransformComponent";
import World from "../ecs/framework/World";
import GameUIBase from "./GameUIBase";
const { ccclass, property } = _decorator;

@ccclass
export default class GameBullet extends GameUIBase {

    moveComp: MoveComponent = null;

    transformComp: TransformComponent = null;

    backupTransformComp: TransformComponent = null;

    onLoad() {
        this.transformComp = this.entity.getComponent(TransformComponent);
        this.moveComp = this.entity.getComponent(MoveComponent);
        this.backupTransformComp = this.entity.getBackupComponent(TransformComponent);
        this.updatePos();
    }

    onUpdate() {
        this.updatePos();
    }

    private tempVec3 = v3();

    private tempBackupVec3 = v3();

    private outVec3 = v3();

    updatePos() {
        let pos = this.transformComp.position;
        this.tempVec3.set(pos.x, pos.y, pos.z);
        pos = this.backupTransformComp.position;
        this.tempBackupVec3.set(pos.x, pos.y, pos.z);
        Vec3.lerp(this.outVec3, this.tempBackupVec3, this.tempVec3, World.instance.uiLerpValue);

        this.node.position = this.outVec3;
        this.node.angle = this.transformComp.angle;
    }

}