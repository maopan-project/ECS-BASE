System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EComponent, ComponentType, SingletonComponent, _crd;

  function _reportPossibleCrUseOfEComponent(extras) {
    _reporterNs.report("EComponent", "../framework/Component", _context.meta, extras);
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
      EComponent = _unresolved_2.EComponent;
    }, function (_unresolved_3) {
      ComponentType = _unresolved_3.ComponentType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "972b8ylEVZOELol7IOskVNY", "SingletonComponent", undefined);

      _export("default", SingletonComponent = class SingletonComponent extends (_crd && EComponent === void 0 ? (_reportPossibleCrUseOfEComponent({
        error: Error()
      }), EComponent) : EComponent) {
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
//# sourceMappingURL=35aa03b8f67b7fa81e2753e90db159900ceef62f.js.map