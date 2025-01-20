import { math } from "cc";
import { Component } from "../framework/Component";

export default class ActorStatusComponent extends Component {
    // 对属性进行封装
    private _healthPoint: number = 100;

    public get healthPoint() {
        return this._healthPoint;
    }
    public set healthPoint(v) {
        this._healthPoint = math.clamp(v, 0, this._maxHealthPoint);
        console.log('玩家HP 变化', this._healthPoint);
    }

    private _maxHealthPoint: number = 100;

    public get maxHealthPoint() {
        return this._maxHealthPoint;
    }
    public set maxHealthPoint(v) {
        this._maxHealthPoint = v;
    }

    private _scoring: number = 0;

    public get scoring() {
        return this._scoring;
    }
    public set scoring(v) {
        this._scoring = Math.max(0, v);
    }


}