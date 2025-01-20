System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, TransformComponent, SystemType, NetworkReceiveComponent, MoveComponent, MoveSystem, _crd;

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "../framework/ECSConfig", _context.meta, extras);
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
                var moveComp = entity.getComponent(_crd && MoveComponent === void 0 ? (_reportPossibleCrUseOfMoveComponent({
                  error: Error()
                }), MoveComponent) : MoveComponent);
                var transformComp = entity.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
                  error: Error()
                }), TransformComponent) : TransformComponent); // 这里的方向还应该乘上移动速度

                moveComp.moveSpeed.set(op.body.dir.x, op.body.dir.y, op.body.dir.z);
                transformComp.position.add(moveComp.moveSpeed);
              }
            }
          } // this.world.forEach([MoveComponent, TransformComponent], (entity: Entity, move: MoveComponent, transform: TransformComponent) => {
          //     let operations = msgOp.msgThisLogic.operations;
          //     for (let i = 0; i < operations.length; i++) {
          //         let op = operations[i];
          //         if (op.entityID == entity.id) {
          //             // 这里的方向还应该乘上移动速度
          //             move.moveSpeed.set(op.body.dir.x, op.body.dir.y, op.body.dir.z);
          //             transform.position.add(move.moveSpeed);
          //         }
          //     }
          // });

        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75da1a8514ad75c995c2344d91bb748ec80977fe.js.map