System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EComponent, _crd;

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "./Config", _context.meta, extras);
  }

  _export("EComponent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc76167UZlEbb8JpN1TU5lS", "Component", undefined);

      _export("EComponent", EComponent = class EComponent {
        constructor() {
          this.type = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=83977970e6370210f9d7f287923107dfbd790cb6.js.map