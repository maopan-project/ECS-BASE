import { Vector3 } from "../../GameType";
import { Component } from "../framework/Component";
import { ComponentType } from "../framework/ECSConfig";

export default class TransformComponent extends Component {
    position: Vector3 = new Vector3();
    angle: number = 0;
    needBackup: boolean = true;
    collisionRadius: number = -1;
}



