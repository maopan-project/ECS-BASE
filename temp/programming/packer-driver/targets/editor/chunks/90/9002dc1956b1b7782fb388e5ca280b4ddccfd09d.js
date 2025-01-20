System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MoveComponent, NetworkReceiveComponent, TransformComponent, ComponentType, World, MoveSystem, NetworkReceiveSystem, GameService, _crd;

  function _reportPossibleCrUseOfMoveComponent(extras) {
    _reporterNs.report("MoveComponent", "./components/MoveCompoent", _context.meta, extras);
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
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      MoveComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      NetworkReceiveComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      TransformComponent = _unresolved_4.TransformComponent;
    }, function (_unresolved_5) {
      ComponentType = _unresolved_5.ComponentType;
    }, function (_unresolved_6) {
      World = _unresolved_6.World;
    }, function (_unresolved_7) {
      MoveSystem = _unresolved_7.MoveSystem;
    }, function (_unresolved_8) {
      NetworkReceiveSystem = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "335eaBcTpVNGLH8uzxUn3N/", "GameService", undefined);

      __checkObsolete__(['log']);

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
          let world = (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance;
          world.addSystemToCycle(new (_crd && MoveSystem === void 0 ? (_reportPossibleCrUseOfMoveSystem({
            error: Error()
          }), MoveSystem) : MoveSystem)());
          world.addSystemToCycle(new (_crd && NetworkReceiveSystem === void 0 ? (_reportPossibleCrUseOfNetworkReceiveSystem({
            error: Error()
          }), NetworkReceiveSystem) : NetworkReceiveSystem)());
        }

        static logicCycleThisCycle() {
          let world = (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance;
          let nrc = world.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent); // 一个网络帧可以执行多少个逻辑帧

          let n2l = world.networkUpdateInterval / world.fixedUpdateInterval; // 当前网络帧最大支持的逻辑帧数

          let maxLogicNet = Math.ceil(nrc.msgToDeal.length * n2l); // 流失的时间

          let timePass = Date.now() - nrc.startTime; // 当前流失时间支持的最大逻辑帧次数

          let maxLogicTime = Math.floor(timePass / world.fixedUpdateInterval) + 1;
          let logicThisCycle = Math.min(maxLogicNet, maxLogicTime) - world.logicCycleCount;
          console.log('可以执行的逻辑帧是-', logicThisCycle, '最大的时间值-', maxLogicTime, '最大的网络值-', maxLogicNet);
          return logicThisCycle;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9002dc1956b1b7782fb388e5ca280b4ddccfd09d.js.map