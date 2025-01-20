import { Vector3 } from "../../GameType";
import { Component } from "../framework/Component";
import { ComponentType } from "../framework/ECSConfig";

export default class MoveComponent extends Component {
    moveSpeed: Vector3 = new Vector3();
}