import { _decorator, Sprite, SpriteFrame, v3, Vec3 } from 'cc';
import FireComponent from '../ecs/components/FireComponent';
import MoveComponent from '../ecs/components/MoveComponent';
import TransformComponent from '../ecs/components/TransformComponent';
import World from '../ecs/framework/World';
import GameActorMachine from '../state-machine/GameActorMachine';
import { GameActorFire, GameActorIdle, GameActorWalk, StateType } from '../state-machine/GameActorState';
import GameUIBase from '../ui/GameUIBase';
const { ccclass, property } = _decorator;

@ccclass
export class GameActor extends GameUIBase {

    @property(Sprite)
    spriteActor: Sprite = null;

    @property([SpriteFrame])
    sfIdle: SpriteFrame[] = [];

    @property([SpriteFrame])
    sfWalk: SpriteFrame[] = [];

    @property([SpriteFrame])
    sfFire: SpriteFrame[] = [];

    animIdleTime: number = 1;

    animWalkTime: number = 1;

    moveComp: MoveComponent = null;

    transformComp: TransformComponent = null;

    backupTransformComp: TransformComponent = null;

    fireComp: FireComponent = null;

    machine: GameActorMachine = null;

    start() {
        this.transformComp = this.entity.getComponent(TransformComponent);
        this.moveComp = this.entity.getComponent(MoveComponent);
        this.backupTransformComp = this.entity.getBackupComponent(TransformComponent);
        this.fireComp = this.entity.getComponent(FireComponent);

        this.machine = new GameActorMachine(this);

        this.machine.changeState(new GameActorIdle());
    }


    private tempVec3 = v3();

    private tempBackupVec3 = v3();

    private outVec3 = v3();

    onUpdate(deltaTime: number) {
        let isMove = this.checkIsMove();
        let isFire = this.checkIsFire();
        if (isFire && this.machine.state.type !== StateType.FIRE) {
            this.machine.changeState(new GameActorFire());
        } else if (!isFire && isMove && this.machine.state.type != StateType.WALK) {
            this.machine.changeState(new GameActorWalk());
        } else if (!isFire && !isMove && this.machine.state.type != StateType.IDLE) {
            this.machine.changeState(new GameActorIdle());
        }


        let pos = this.transformComp.position;
        this.tempVec3.set(pos.x, pos.y, pos.z);
        pos = this.backupTransformComp.position;
        this.tempBackupVec3.set(pos.x, pos.y, pos.z);
        Vec3.lerp(this.outVec3, this.tempBackupVec3, this.tempVec3, World.instance.uiLerpValue);

        this.node.position = this.outVec3;

        this.machine.update(deltaTime);
    }

    checkIsMove() {
        return !this.transformComp.position.equal(this.backupTransformComp.position);
    }

    checkIsFire() {
        return this.fireComp.isFire;
    }
}


