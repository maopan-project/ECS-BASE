System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetworkReceiveComponent, TransformComponent, ComponentType, World, MoveSystem, NetworkReceiveSystem, GameService, _crd;

  function _reportPossibleCrUseOfNetworkReceiveComponent(extras) {
    _reporterNs.report("NetworkReceiveComponent", "./components/NetworkComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "./components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "./framework/Config", _context.meta, extras);
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
    }, function (_unresolved_2) {
      NetworkReceiveComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      TransformComponent = _unresolved_3.TransformComponent;
    }, function (_unresolved_4) {
      ComponentType = _unresolved_4.ComponentType;
    }, function (_unresolved_5) {
      World = _unresolved_5.World;
    }, function (_unresolved_6) {
      MoveSystem = _unresolved_6.MoveSystem;
    }, function (_unresolved_7) {
      NetworkReceiveSystem = _unresolved_7.default;
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
          var world = (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance;
          world.fixedUpdateInterval = 1 / 60 * 1000;
          world.addSystemToCycle(new (_crd && MoveSystem === void 0 ? (_reportPossibleCrUseOfMoveSystem({
            error: Error()
          }), MoveSystem) : MoveSystem)());
          world.addSystemToCycle(new (_crd && NetworkReceiveSystem === void 0 ? (_reportPossibleCrUseOfNetworkReceiveSystem({
            error: Error()
          }), NetworkReceiveSystem) : NetworkReceiveSystem)());
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae745cf44e8df0310c7eed4f39ef9189cf28c0c5.js.map