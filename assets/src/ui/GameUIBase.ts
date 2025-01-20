import { Component, _decorator } from "cc";
import Entity from "../ecs/framework/Entity";

const { ccclass, property } = _decorator;

@ccclass
export default class GameUIBase extends Component {
    entity: Entity;

    update(deltaTime: number) {
        if (this.entity) {
            // 通过感知数据层，自行消毁
            if (this.entity.destroyed) {
                this.node.removeFromParent();
                this.node.destroy();

                return;
            }
            
            this.onUpdate(deltaTime);
        }
    }

    onUpdate(deltaTime: number) { }
}