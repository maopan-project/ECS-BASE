import { GameActor } from "../ui/GameActor";
import { GameActorStateBase } from "./GameActorState";

export default class GameActorMachine {
    actor: GameActor = null;

    state: GameActorStateBase = null;

    constructor(actor: GameActor) {
        this.actor = actor;
    }

    changeState(state: GameActorStateBase) {
        if (this.state) {
            this.state.onExit();
        }

        this.state = state;
        this.state.machine = this;
        this.state.onEnter();
    }

    update(deltaTime: number) {
        if (this.state) {
            this.state.onuUpdate(deltaTime);
        }
    }

    destroy() {
        if (this.state) {
            this.state.onExit();
        }

        this.state = null;
        this.actor = null;
    }
}