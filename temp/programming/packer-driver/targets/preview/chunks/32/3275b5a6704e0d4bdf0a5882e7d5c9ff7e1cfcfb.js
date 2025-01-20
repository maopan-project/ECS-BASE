System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, AutoDestroyComponent, _crd;

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

      _cclegacy._RF.push({}, "ee069mtPd5PP6QQkvhKNAk7", "AutoDestroyComponent", undefined);

      _export("default", AutoDestroyComponent = class AutoDestroyComponent extends (_crd && Component === void 0 ? (_reportPossibleCrUseOfComponent({
        error: Error()
      }), Component) : Component) {
        constructor() {
          super(...arguments);
          this.lifeTime = 0;
          this.maxLifeTime = 100;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3275b5a6704e0d4bdf0a5882e7d5c9ff7e1cfcfb.js.map