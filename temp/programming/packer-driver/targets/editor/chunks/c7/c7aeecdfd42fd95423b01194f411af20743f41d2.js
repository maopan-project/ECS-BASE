System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, BulletComponent, _crd;

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

      _cclegacy._RF.push({}, "ebd34s1N21G5IlcgGovGWj0", "BulletComponent", undefined);

      _export("default", BulletComponent = class BulletComponent extends (_crd && Component === void 0 ? (_reportPossibleCrUseOfComponent({
        error: Error()
      }), Component) : Component) {
        constructor(...args) {
          super(...args);
          this.fromEntityID = -1;
          this.damage = 10;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c7aeecdfd42fd95423b01194f411af20743f41d2.js.map