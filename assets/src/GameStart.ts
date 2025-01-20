import { _decorator, Component, EventKeyboard, Input, input, KeyCode, Label } from 'cc';
import ActorStatusComponent from './ecs/components/ActorStatusComponent';
import CampComponent from './ecs/components/CampComponent';
import CollisionComponent from './ecs/components/CollisionComponent';
import FireComponent from './ecs/components/FireComponent';
import MoveComponent from './ecs/components/MoveComponent';
import NetworkReceiveComponent from './ecs/components/NetworkComponent';
import TransformComponent from './ecs/components/TransformComponent';
import { EntityType } from './ecs/framework/ECSConfig';
import World from './ecs/framework/World';
import GameService from './ecs/GameService';
import { EventCenter } from './event/EventCenter';
import { Vector3 } from './GameType';
import { GameMessageC2S_GameStart, GameMessageC2S_Operation, GameMessageS2C_GameStart, GameMessageS2C_Operations, GameMessageS2C_UID, GameMessageType, MessagePool } from './network/GameMessage';
import { WSClient } from './network/WSClient';
const { ccclass, property } = _decorator;

@ccclass
export class GameStart extends Component {
    @property(Label)
    lbUserID: Label = null;

    private _keyMap: Map<KeyCode, boolean> = new Map();

    uid: number = 0;
    selfEntityID: number = 0;
    isInGame: boolean = false;
    lastDir: Vector3 = new Vector3();
    lastIsFire: boolean = false;

    onClickGameStart() {
        WSClient.instance.send(new GameMessageC2S_GameStart);
    }

    protected onLoad(): void {
        input.on(Input.EventType.KEY_DOWN, this.keyDown, this);
        input.on(Input.EventType.KEY_UP, this.keyUp, this);

        EventCenter.instance.on(GameMessageType.S2C_GAME_START.toString(), this.onGetGameStart, this);
        EventCenter.instance.on(GameMessageType.S2C_OPERATIONS.toString(), this.onGetOperations, this);
        EventCenter.instance.on(GameMessageType.S2C_UID.toString(), this.onGetUID, this);
    }

    protected start() {
        this._keyMap.set(KeyCode.KEY_A, false);
        this._keyMap.set(KeyCode.KEY_S, false);
        this._keyMap.set(KeyCode.KEY_D, false);
        this._keyMap.set(KeyCode.KEY_W, false);
        this._keyMap.set(KeyCode.SPACE, false);

        WSClient.instance.connect();
    }

    protected update(deltaTime: number) {
        if (this.isInGame) {
            World.instance.cycle();
            this.sendOp();
        }
    }

    private sendOp() {
        let x = 0;
        let y = 0;

        if (this._keyMap.get(KeyCode.KEY_A))
            x -= 1;

        if (this._keyMap.get(KeyCode.KEY_S))
            y -= 1;

        if (this._keyMap.get(KeyCode.KEY_D))
            x += 1;

        if (this._keyMap.get(KeyCode.KEY_W))
            y += 1;

        let isFire = this._keyMap.get(KeyCode.SPACE);


        if ((this.lastDir.x != x || this.lastDir.y != y) || isFire != this.lastIsFire) {
            this.lastDir.set(x, y);
            this.lastIsFire = isFire;

            let msg = MessagePool.get(GameMessageC2S_Operation);
            msg.uid = this.uid;
            msg.entityID = this.selfEntityID;
            msg.body.dir.set(x, y);
            msg.body.isFire = isFire;

            WSClient.instance.send(msg);

            MessagePool.recycle(msg);
        }

    }

    private keyDown(event: EventKeyboard): void {
        if (this._keyMap.has(event.keyCode)) {
            this._keyMap.set(event.keyCode, true);
        }
    }

    private keyUp(event: EventKeyboard): void {
        if (this._keyMap.has(event.keyCode)) {
            this._keyMap.set(event.keyCode, false);
        }
    }

    private onGetGameStart(msg: GameMessageS2C_GameStart) {

        GameService.initWorld();

        msg.uids.forEach((uid, index) => {
            this.addPlayer(uid, index);
        });

        this.lastDir.set(1, 1);
        this.isInGame = true;
        World.instance.startCycle();
    }

    private onGetOperations(msg: GameMessageS2C_Operations) {
        let nrc = World.instance.getSingletonEntityComponent(NetworkReceiveComponent);
        nrc.msgToDeal.push(msg);
    }

    private onGetUID(msg: GameMessageS2C_UID) {
        this.uid = msg.uid;
        this.lbUserID.string = 'user:' + this.uid.toString();
    }

    private addPlayer(uid: number, campID: number) {
        console.log('add player', uid);
        let player = World.instance.getNewEntity(EntityType.Actor);

        let trans = player.addComponent(TransformComponent);
        let move = player.addComponent(MoveComponent);
        let fire = player.addComponent(FireComponent);
        let collision = player.addComponent(CollisionComponent);
        let actorStatus = player.addComponent(ActorStatusComponent);
        let camp = player.addComponent(CampComponent);

        trans.collisionRadius = 20;
        camp.camp = campID;

        World.instance.addEntityToWorld(player);

        if (uid === this.uid) {
            this.selfEntityID = player.id;
        }

    }
}


