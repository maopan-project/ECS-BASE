System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ActorStatusComponent, BulletComponent, CampComponent, CollisionComponent, FireComponent, MoveComponent, NetworkReceiveComponent, TransformComponent, ComponentType, World, CollisionDetectionSystem, FireSystem, HitSystem, MoveSystem, NetworkReceiveSystem, GameService, _crd;

  function _reportPossibleCrUseOfActorStatusComponent(extras) {
    _reporterNs.report("ActorStatusComponent", "./components/ActorStatusComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletComponent(extras) {
    _reporterNs.report("BulletComponent", "./components/BulletComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCampComponent(extras) {
    _reporterNs.report("CampComponent", "./components/CampComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionComponent(extras) {
    _reporterNs.report("CollisionComponent", "./components/CollisionComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireComponent(extras) {
    _reporterNs.report("FireComponent", "./components/FireComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveComponent(extras) {
    _reporterNs.report("MoveComponent", "./components/MoveComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkReceiveComponent(extras) {
    _reporterNs.report("NetworkReceiveComponent", "./components/NetworkComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "./components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "./framework/ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "./framework/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionDetectionSystem(extras) {
    _reporterNs.report("CollisionDetectionSystem", "./systems/CollisionDetectionSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireSystem(extras) {
    _reporterNs.report("FireSystem", "./systems/FireSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHitSystem(extras) {
    _reporterNs.report("HitSystem", "./systems/HitSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveSystem(extras) {
    _reporterNs.report("MoveSystem", "./systems/MoveSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkReceiveSystem(extras) {
    _reporterNs.report("NetworkReceiveSystem", "./systems/NetwrokReciveSystem", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ActorStatusComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      BulletComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      CampComponent = _unresolved_4.default;
    }, function (_unresolved_5) {
      CollisionComponent = _unresolved_5.default;
    }, function (_unresolved_6) {
      FireComponent = _unresolved_6.default;
    }, function (_unresolved_7) {
      MoveComponent = _unresolved_7.default;
    }, function (_unresolved_8) {
      NetworkReceiveComponent = _unresolved_8.default;
    }, function (_unresolved_9) {
      TransformComponent = _unresolved_9.default;
    }, function (_unresolved_10) {
      ComponentType = _unresolved_10.ComponentType;
    }, function (_unresolved_11) {
      World = _unresolved_11.default;
    }, function (_unresolved_12) {
      CollisionDetectionSystem = _unresolved_12.default;
    }, function (_unresolved_13) {
      FireSystem = _unresolved_13.default;
    }, function (_unresolved_14) {
      HitSystem = _unresolved_14.default;
    }, function (_unresolved_15) {
      MoveSystem = _unresolved_15.MoveSystem;
    }, function (_unresolved_16) {
      NetworkReceiveSystem = _unresolved_16.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "335eaBcTpVNGLH8uzxUn3N/", "GameService", undefined);

      _export("default", GameService = class GameService {
        static initWorld() {
          (_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent).prototype.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).TransformComp;
          (_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent).prototype.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).NetworkReceive;
          (_crd && MoveComponent === void 0 ? (_reportPossibleCrUseOfMoveComponent({
            error: Error()
          }), MoveComponent) : MoveComponent).prototype.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).MoveComponent;
          (_crd && FireComponent === void 0 ? (_reportPossibleCrUseOfFireComponent({
            error: Error()
          }), FireComponent) : FireComponent).prototype.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).Fire;
          (_crd && CollisionComponent === void 0 ? (_reportPossibleCrUseOfCollisionComponent({
            error: Error()
          }), CollisionComponent) : CollisionComponent).prototype.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).Collision;
          (_crd && ActorStatusComponent === void 0 ? (_reportPossibleCrUseOfActorStatusComponent({
            error: Error()
          }), ActorStatusComponent) : ActorStatusComponent).prototype.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).ActorStatus;
          (_crd && CampComponent === void 0 ? (_reportPossibleCrUseOfCampComponent({
            error: Error()
          }), CampComponent) : CampComponent).prototype.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).Camp;
          (_crd && BulletComponent === void 0 ? (_reportPossibleCrUseOfBulletComponent({
            error: Error()
          }), BulletComponent) : BulletComponent).prototype.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).Bullet;
          var world = (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance;
          world.addSystemToCycle(new (_crd && MoveSystem === void 0 ? (_reportPossibleCrUseOfMoveSystem({
            error: Error()
          }), MoveSystem) : MoveSystem)());
          world.addSystemToCycle(new (_crd && NetworkReceiveSystem === void 0 ? (_reportPossibleCrUseOfNetworkReceiveSystem({
            error: Error()
          }), NetworkReceiveSystem) : NetworkReceiveSystem)());
          world.addSystemToCycle(new (_crd && FireSystem === void 0 ? (_reportPossibleCrUseOfFireSystem({
            error: Error()
          }), FireSystem) : FireSystem)());
          world.addSystemToCycle(new (_crd && CollisionDetectionSystem === void 0 ? (_reportPossibleCrUseOfCollisionDetectionSystem({
            error: Error()
          }), CollisionDetectionSystem) : CollisionDetectionSystem)());
          world.addSystemToCycle(new (_crd && HitSystem === void 0 ? (_reportPossibleCrUseOfHitSystem({
            error: Error()
          }), HitSystem) : HitSystem)());
        }

        static logicCycleThisCycle() {
          var world = (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance;
          var nrc = world.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent); // 一个网络帧可以执行多少个逻辑帧

          var n2l = world.networkUpdateInterval / world.fixedUpdateInterval; // 当前网络帧最大支持的逻辑帧数

          var maxLogicNet = Math.ceil(nrc.msgToDeal.length * n2l); // 流失的时间

          var timePass = Date.now() - nrc.startTime; // 当前流失时间支持的最大逻辑帧次数

          var maxLogicTime = Math.floor(timePass / world.fixedUpdateInterval) + 1;
          var logicThisCycle = Math.min(maxLogicNet, maxLogicTime) - world.logicCycleCount; // console.log('可以执行的逻辑帧是-', logicThisCycle, '最大的时间值-', maxLogicTime, '最大的网络值-', maxLogicNet);

          return logicThisCycle;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0a35c46a249ebaf7f51535f8ae0784d4fd4d89a.js.map