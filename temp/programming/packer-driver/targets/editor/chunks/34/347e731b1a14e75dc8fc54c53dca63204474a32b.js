System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, FireComponent, _crd;

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "../framework/Component", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Component = _unresolved_2.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5b36zdGVxB2Yjy+FGuJPH6", "FireComponent", undefined);

      _export("default", FireComponent = class FireComponent extends (_crd && Component === void 0 ? (_reportPossibleCrUseOfComponent({
        error: Error()
      }), Component) : Component) {
        constructor(...args) {
          super(...args);
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
//# sourceMappingURL=347e731b1a14e75dc8fc54c53dca63204474a32b.js.map