import NetworkReceiveComponent from "../components/NetworkComponent";
import { SystemType } from "../framework/ECSConfig";
import System from "../framework/System";
import World from "../framework/World";

export default class NetworkReceiveSystem implements System {
    world: World = null;

    type: SystemType = SystemType.LogicBeforePhysics;

    onUpdate(): void {
        let nrc = this.world.getSingletonEntityComponent(NetworkReceiveComponent);

        nrc.msgThisLogic = null;

        let rate = this.world.fixedUpdateInterval / this.world.networkUpdateInterval;
        let frameToDealThisMsg = Math.floor((this.world.logicCycleCount - 1) * rate) + 1;

        if (frameToDealThisMsg > nrc.dealIndex) {// 有新的网络包就更新一些
            nrc.msgThisLogic = nrc.msgToDeal[nrc.dealIndex++];
        }

    }

}