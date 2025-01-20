System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Vector3, Component, ComponentType, MoveComponent, _crd;

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "../../GameType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "../framework/Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "../framework/ECSConfig", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Vector3 = _unresolved_2.Vector3;
    }, function (_unresolved_3) {
      Component = _unresolved_3.Component;
    }, function (_unresolved_4) {
      ComponentType = _unresolved_4.ComponentType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a76d56n/WJBg4rxI7i9BB2G", "MoveCompoent", undefined);

      _export("default", MoveComponent = class MoveComponent extends (_crd && Component === void 0 ? (_reportPossibleCrUseOfComponent({
        error: Error()
      }), Component) : Component) {
        constructor() {
          super(...arguments);
          this.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).MoveComponent;
          this.speed = 5;
          this.moveSpeed = new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1eb3cd50cf59ec3fe5995cd24941ff66f6db7b94.js.map