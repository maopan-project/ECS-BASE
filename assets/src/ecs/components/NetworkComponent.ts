import { GameMessageS2C_Operations } from "../../network/GameMessage";
import { Component } from "../framework/Component";
import { ComponentType } from "../framework/ECSConfig";

export default class NetworkReceiveComponent extends Component {
    msgToDeal: GameMessageS2C_Operations[] = [];
    dealIndex: number = 0;
    msgThisLogic: GameMessageS2C_Operations = null;
    startTime: number = 0;
}