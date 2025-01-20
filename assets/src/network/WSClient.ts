import { _decorator, Component, log, Node } from 'cc';
import { GameMessageBase } from './GameMessage';
import { EventCenter } from '../event/EventCenter';
const { ccclass, property } = _decorator;

@ccclass('WSClient')
export class WSClient extends Component {

    public static instance: WSClient = null;
    private ws: WebSocket = null;

    protected onLoad(): void {
        WSClient.instance = this;
    }

    public connect() {
        log("client try connect server!");

        let ws = new WebSocket("ws://localhost:8080");
        ws.onopen = (ev: MessageEvent) => {
            console.log('ws connect success');
            // EventCenter.instance.emit(EventDefine.EVENT_NETWORK_CONNECT);
        }

        ws.onmessage = (ev: MessageEvent) => {
            log("onmessage", ev.data);
            let obj = JSON.parse(ev.data) as GameMessageBase;
            EventCenter.instance.emit(obj.type.toString(), obj);
        }

        this.ws = ws;
    }

    public send(msg: GameMessageBase) {
        let str = JSON.stringify(msg);
        log("send:", str);

        this.ws.send(str);
    }
}


