import { Component } from "../framework/Component";
import { ComponentType } from "../framework/ECSConfig";

export default class FireComponent extends Component {
    wantFire: boolean = false;
    currentCoolDown: number = 0;
    maxCoolDown: number = 30;
    isFire: boolean = false;
    currentFrame: number = 0;
    fireFrame: number = 6;
    totalFireFrame: number = 15;
}