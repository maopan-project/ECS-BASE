System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EComponent, ComponentType, TransformComponent, _crd;

  function _reportPossibleCrUseOfEComponent(extras) {
    _reporterNs.report("EComponent", "../framework/Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "../framework/Config", _context.meta, extras);
  }

  _export("TransformComponent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EComponent = _unresolved_2.EComponent;
    }, function (_unresolved_3) {
      ComponentType = _unresolved_3.ComponentType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15f966Q0TdD66WV9EpZ5YJp", "TransformComponent", undefined);

      _export("TransformComponent", TransformComponent = class TransformComponent extends (_crd && EComponent === void 0 ? (_reportPossibleCrUseOfEComponent({
        error: Error()
      }), EComponent) : EComponent) {
        constructor() {
          super(...arguments);
          this.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).TransformComp;
          this.x = 0;
          this.y = 0;
          this.z = 0;
          this.angle = 0;
          this.moveSpeed = 0;
          this.rotateSpeed = 0;
          this.isMove = false;
          this.isRotate = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd2c53af3f45fa0e55d347f739a69e1630503dfc.js.map