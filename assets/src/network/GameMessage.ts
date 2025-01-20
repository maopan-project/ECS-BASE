import { Vector3 } from "../GameType";

export class MessagePool {
    private static msgs: Map<GameMessageType, GameMessageBase[]> = new Map();

    public static get<T extends GameMessageBase>(msg: { prototype: T, new(): T }): T {
        let type = msg.prototype.type;

        if (!MessagePool.msgs.has(type)) {
            MessagePool.msgs.set(type, []);
        }

        let arr = MessagePool.msgs.get(type);

        if (arr.length > 0) {
            return arr.pop() as T;

        } else {
            return new msg();

        }

    }

    public static recycle<T extends GameMessageBase>(msg: T) {
        if (MessagePool.msgs.has(msg.type)) {
            let arr = MessagePool.msgs.get(msg.type);
            msg.clear();
            arr.push(msg);
        }
    }

    public static clearAll() {
        for (const msgs of MessagePool.msgs.values()) {
            msgs.forEach((msg => {
                msg.clear();
            }));
        }

        this.msgs.clear();
    }
}

export class GameMessageBase {
    declare type: GameMessageType;
    clear() { }
}

export enum GameMessageType {
    C2S_GAME_START,
    C2S_OPERATOR,
    S2C_UID,
    S2C_GAME_START,
    S2C_OPERATIONS,
}

export class GameMessageC2S_GameStart extends GameMessageBase {
    type: GameMessageType = GameMessageType.C2S_GAME_START;
}

export class GameMessageS2C_GameStart extends GameMessageBase {
    type: GameMessageType = GameMessageType.S2C_GAME_START;
    uids: number[] = [];

    clear(): void {
        this.uids.length = 0;
    }
}

export class GameMessageS2C_UID extends GameMessageBase {
    type: GameMessageType = GameMessageType.S2C_UID;
    uid: number = -1;
}

export class GameMessageC2S_Operation extends GameMessageBase {
    type: GameMessageType = GameMessageType.C2S_OPERATOR;
    uid: number = -1;
    entityID: number = -1;
    body: GameMessageOperationBody = new GameMessageOperationBody();
}

export class GameMessageOperationBody {
    dir: Vector3 = new Vector3();
    isFire: boolean = false;
}

export class GameMessageS2C_Operations extends GameMessageBase {
    type: GameMessageType = GameMessageType.S2C_OPERATIONS;
    operations: GameMessageC2S_Operation[] = [];

    clear(): void {
        this.operations.length = 0;
    }
}

