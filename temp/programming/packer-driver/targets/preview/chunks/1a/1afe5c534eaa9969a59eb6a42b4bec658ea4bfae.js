System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, TransformComponent, SystemType, NetworkReceiveComponent, MoveComponent, MoveSystem, _crd;

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "../framework/ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../framework/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../framework/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../framework/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkReceiveComponent(extras) {
    _reporterNs.report("NetworkReceiveComponent", "../components/NetworkComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveComponent(extras) {
    _reporterNs.report("MoveComponent", "../components/MoveCompoent", _context.meta, extras);
  }

  _export("MoveSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      TransformComponent = _unresolved_2.TransformComponent;
    }, function (_unresolved_3) {
      SystemType = _unresolved_3.SystemType;
    }, function (_unresolved_4) {
      NetworkReceiveComponent = _unresolved_4.default;
    }, function (_unresolved_5) {
      MoveComponent = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f2f4AJVJNOL7Rh8Cb/yvsj", "MoveSystem", undefined);

      __checkObsolete__(['log']);

      _export("MoveSystem", MoveSystem = class MoveSystem {
        constructor() {
          this.world = null;
          this.type = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Physics;
        }

        onUpdate() {
          var msgOp = this.world.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent);

          if (msgOp.msgThisLogic) {
            var operations = msgOp.msgThisLogic.operations;

            for (var i = 0; i < operations.length; i++) {
              var op = operations[i];
              var entity = this.world.getEntityByID(op.entityID);

              if (entity) {
                entity.getComponent(_crd && MoveComponent === void 0 ? (_reportPossibleCrUseOfMoveComponent({
                  error: Error()
                }), MoveComponent) : MoveComponent).moveSpeed.set(op.body.dir.x * 5, op.body.dir.y * 5, op.body.dir.z * 5);
              }
            }
          }

          this.world.forEach([_crd && MoveComponent === void 0 ? (_reportPossibleCrUseOfMoveComponent({
            error: Error()
          }), MoveComponent) : MoveComponent, _crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent], (entity, move, transform) => {
            transform.position.add(move.moveSpeed);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1afe5c534eaa9969a59eb6a42b4bec658ea4bfae.js.map