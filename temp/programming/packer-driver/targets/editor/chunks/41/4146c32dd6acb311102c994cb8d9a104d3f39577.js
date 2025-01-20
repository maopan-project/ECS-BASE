System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, ComponentType, FireComponent, _crd;

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
      Component = _unresolved_2.Component;
    }, function (_unresolved_3) {
      ComponentType = _unresolved_3.ComponentType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5b36zdGVxB2Yjy+FGuJPH6", "FireComponent", undefined);

      _export("default", FireComponent = class FireComponent extends (_crd && Component === void 0 ? (_reportPossibleCrUseOfComponent({
        error: Error()
      }), Component) : Component) {
        constructor(...args) {
          super(...args);
          this.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).Fire;
          this.wantFire = false;
          this.currentCoolDown = 0;
          this.maxCoolDown = 30;
          this.isFire = false;
          this.currentFrame = 0;
          this.fireFrame = 6;
          this.totalFireFrame = 15;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4146c32dd6acb311102c994cb8d9a104d3f39577.js.map