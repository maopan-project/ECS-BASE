System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, _crd;

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "./Config", _context.meta, extras);
  }

  _export("Component", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc76167UZlEbb8JpN1TU5lS", "Component", undefined);

      _export("Component", Component = class Component {
        constructor() {
          this.type = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6f95f03826d07d2e1498447a2ea2bc36ef2e45db.js.map