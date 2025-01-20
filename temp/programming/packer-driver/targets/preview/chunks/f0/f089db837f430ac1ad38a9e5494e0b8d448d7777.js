System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, _crd;

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "./ECSConfig", _context.meta, extras);
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
          this.needBackup = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f089db837f430ac1ad38a9e5494e0b8d448d7777.js.map