System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetworkReceiveSystem, _crd;

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "../framework/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../framework/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../framework/World", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1ab9iImj1LMahP1IZDlLjl", "NetwrokReciveSystem", undefined);

      _export("default", NetworkReceiveSystem = class NetworkReceiveSystem {
        constructor() {
          this.world = void 0;
          this.type = void 0;
        }

        onUpdate() {
          throw new Error("Method not implemented.");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15d25797eaa64f47341c206e2279c73fea0694b1.js.map