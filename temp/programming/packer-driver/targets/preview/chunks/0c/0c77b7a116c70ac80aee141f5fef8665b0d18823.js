System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, World, MoveSystem, NetworkReceiveSystem, GameService, _crd;

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
      World = _unresolved_2.World;
    }, function (_unresolved_3) {
      MoveSystem = _unresolved_3.MoveSystem;
    }, function (_unresolved_4) {
      NetworkReceiveSystem = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "335eaBcTpVNGLH8uzxUn3N/", "GameService", undefined);

      _export("default", GameService = class GameService {
        static initWorld() {
          // TransformComponent.prototype.type = ComponentType.TransformComp;
          // NetworkReceiveComponent.prototype.type = ComponentType.NetworkReceive;
          // MoveComponent.prototype.type = ComponentType.MoveComponent;
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
//# sourceMappingURL=0c77b7a116c70ac80aee141f5fef8665b0d18823.js.map