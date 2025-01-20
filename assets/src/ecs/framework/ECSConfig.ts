export enum SystemType {
    Network,
    Input,
    LogicBeforePhysics,
    Physics,//包含---碰撞 移动 加速
    LogicAfterPhysics,
    AfterLogicCycle,
    Backup,
    Render,
    AfterCycle,
    End
}


export enum ComponentType {
    Singleton = 1 << 0,
    TransformComp = 1 << 1,
    NetworkReceive = 1 << 2,
    MoveComponent = 1 << 3,
    Fire = 1 << 4,
    Collision = 1 << 5,
    ActorStatus = 1 << 6,
    Camp = 1 << 7,
    Bullet = 1 << 8,
    AutoDestroy = 1 << 9,
}


export enum EntityType {
    Singleton,
    Actor,
    Bullet
}

export enum WorldCycleType {
    RealTime,
    Network,
}
