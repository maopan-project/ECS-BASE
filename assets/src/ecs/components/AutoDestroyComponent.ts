import { Component } from "../framework/Component";

export default class AutoDestroyComponent extends Component {
    lifeTime: number = 0;
    maxLifeTime: number = 100;
}