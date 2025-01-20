import ActorStatusComponent from "./components/ActorStatusComponent";
import AutoDestroyComponent from "./components/AutoDestroyComponent";
import BulletComponent from "./components/BulletComponent";
import CampComponent from "./components/CampComponent";
import CollisionComponent from "./components/CollisionComponent";
import FireComponent from "./components/FireComponent";
import MoveComponent from "./components/MoveComponent";
import NetworkReceiveComponent from "./components/NetworkComponent";
import TransformComponent from "./components/TransformComponent";
import { ComponentType } from "./framework/ECSConfig";
import World from "./framework/World";
import AutoDestroySystem from "./systems/AutoDestroySystem";
import CollisionDetectionSystem from "./systems/CollisionDetectionSystem";
import FireSystem from "./systems/FireSystem";
import HitSystem from "./systems/HitSystem";
import { MoveSystem } from "./systems/MoveSystem";
import NetworkReceiveSystem from "./systems/NetwrokReciveSystem";

export default class GameService {

    static initWorld(): void {
        TransformComponent.prototype.type = ComponentType.TransformComp;
        NetworkReceiveComponent.prototype.type = ComponentType.NetworkReceive;
        MoveComponent.prototype.type = ComponentType.MoveComponent;
        FireComponent.prototype.type = ComponentType.Fire;
        CollisionComponent.prototype.type = ComponentType.Collision;
        ActorStatusComponent.prototype.type = ComponentType.ActorStatus;
        CampComponent.prototype.type = ComponentType.Camp;
        BulletComponent.prototype.type = ComponentType.Bullet;
        AutoDestroyComponent.prototype.type = ComponentType.AutoDestroy;

        let world = World.instance;
        world.addSystemToCycle(new MoveSystem());
        world.addSystemToCycle(new NetworkReceiveSystem());
        world.addSystemToCycle(new FireSystem());
        world.addSystemToCycle(new CollisionDetectionSystem());
        world.addSystemToCycle(new HitSystem());
        world.addSystemToCycle(new AutoDestroySystem());
    }

    static logicCycleThisCycle() {
        let world = World.instance;

        let nrc = world.getSingletonEntityComponent(NetworkReceiveComponent);
        // 一个网络帧可以执行多少个逻辑帧
        let n2l = world.networkUpdateInterval / world.fixedUpdateInterval;
        // 当前网络帧最大支持的逻辑帧数
        let maxLogicNet = Math.ceil(nrc.msgToDeal.length * n2l);

        // 流失的时间
        let timePass = Date.now() - nrc.startTime;
        // 当前流失时间支持的最大逻辑帧次数
        let maxLogicTime = Math.floor(timePass / world.fixedUpdateInterval) + 1;

        let logicThisCycle = Math.min(maxLogicNet, maxLogicTime) - world.logicCycleCount;

        // console.log('可以执行的逻辑帧是-', logicThisCycle, '最大的时间值-', maxLogicTime, '最大的网络值-', maxLogicNet);
        return logicThisCycle;
    }
}