System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, ComponentType, SingletonComponent, _crd;

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "../framework/Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "../Config", _context.meta, extras);
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

      _cclegacy._RF.push({}, "972b8ylEVZOELol7IOskVNY", "SingletonComponent", undefined);

      _export("default", SingletonComponent = class SingletonComponent extends (_crd && Component === void 0 ? (_reportPossibleCrUseOfComponent({
        error: Error()
      }), Component) : Component) {
        constructor() {
          super(...arguments);
          this.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).Singleton;
          this.pressSpace = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f0955e763096ed05795cbb378d16093a4a0f840.js.map