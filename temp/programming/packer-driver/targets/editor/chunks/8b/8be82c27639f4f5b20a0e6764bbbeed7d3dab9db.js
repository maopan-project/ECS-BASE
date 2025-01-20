System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, misc, TransformComponent, pForAngle, SystemType, MoveSystem, _crd;

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpForAngle(extras) {
    _reporterNs.report("pForAngle", "../../Tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "../framework/Config", _context.meta, extras);
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

  _export("MoveSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      misc = _cc.misc;
    }, function (_unresolved_2) {
      TransformComponent = _unresolved_2.TransformComponent;
    }, function (_unresolved_3) {
      pForAngle = _unresolved_3.pForAngle;
    }, function (_unresolved_4) {
      SystemType = _unresolved_4.SystemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f2f4AJVJNOL7Rh8Cb/yvsj", "MoveSystem", undefined);

      __checkObsolete__(['misc']);

      _export("MoveSystem", MoveSystem = class MoveSystem {
        constructor() {
          this.world = void 0;
          this.type = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Physics;
        }

        onUpdate() {
          this.world.forEach([_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent], (entity, transform) => {
            if (transform.isMove) {
              let dir = (_crd && pForAngle === void 0 ? (_reportPossibleCrUseOfpForAngle({
                error: Error()
              }), pForAngle) : pForAngle)(misc.degreesToRadians(transform.angle));
              transform.x += transform.moveSpeed * dir.x;
              transform.y += transform.moveSpeed * dir.y;
            }

            if (transform.isRotate) {
              transform.angle++;
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8be82c27639f4f5b20a0e6764bbbeed7d3dab9db.js.map