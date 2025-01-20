import { v3 } from "cc";
import GameTool from "../GameTool";
import GameActorMachine from "./GameActorMachine";

export class GameActorStateBase {
    type: StateType = StateType.NONE;

    machine: GameActorMachine = null;

    time: number = 0;

    onEnter() {

    }

    onuUpdate(deltaTime: number) {
        this.time += deltaTime;
    }

    onExit() {
        this.machine = null;
    }
}

export enum StateType {
    NONE,
    IDLE,
    WALK,
    FIRE,
    DIE,
}

export class GameActorWalk extends GameActorStateBase {
    type: StateType = StateType.WALK;

    onuUpdate(deltaTime: number): void {
        super.onuUpdate(deltaTime);

        let actor = this.machine.actor;
        let percent = (this.time / actor.animWalkTime) % 1;
        GameTool.prefabAnimFrame(actor.spriteActor, actor.sfWalk, percent);

        this.reverseNode();
    }

    reverseNode() {
        let actor = this.machine.actor;
        let scale = v3(actor.node.scale);

        if (actor.moveComp.moveSpeed.x > 0) {
            scale.x = 1;
        } else if (actor.moveComp.moveSpeed.x < 0) {
            scale.x = -1;
        }

        actor.node.scale = scale;
    }
}

export class GameActorIdle extends GameActorStateBase {
    type: StateType = StateType.IDLE;

    onuUpdate(deltaTime: number): void {
        super.onuUpdate(deltaTime);

        let actor = this.machine.actor;
        let percent = (this.time / actor.animIdleTime) % 1;
        GameTool.prefabAnimFrame(actor.spriteActor, actor.sfIdle, percent);
    }
}

export class GameActorFire extends GameActorStateBase {
    type: StateType = StateType.FIRE;

    onuUpdate(deltaTime: number): void {
        super.onuUpdate(deltaTime);

        let actor = this.machine.actor;
        let percent = (this.machine.actor.fireComp.currentFrame / this.machine.actor.fireComp.totalFireFrame) % 1;
        GameTool.prefabAnimFrame(actor.spriteActor, actor.sfFire, percent);

        this.reverseNode();
    }

    reverseNode() {
        let actor = this.machine.actor;
        let scale = v3(actor.node.scale);

        if (actor.moveComp.moveSpeed.x > 0) {
            scale.x = 1;
        } else if (actor.moveComp.moveSpeed.x < 0) {
            scale.x = -1;
        }

        actor.node.scale = scale;
    }
}