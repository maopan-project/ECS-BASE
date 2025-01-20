System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, NetworkReceiveComponent, _crd;

  function _reportPossibleCrUseOfGameMessageS2C_Operations(extras) {
    _reporterNs.report("GameMessageS2C_Operations", "../../network/GameMessage", _context.meta, extras);
  }

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

      _cclegacy._RF.push({}, "f718ecamwVGu5U1EOLGjvu0", "NetworkComponent", undefined);

      _export("default", NetworkReceiveComponent = class NetworkReceiveComponent extends (_crd && Component === void 0 ? (_reportPossibleCrUseOfComponent({
        error: Error()
      }), Component) : Component) {
        constructor(...args) {
          super(...args);
          this.msgToDeal = [];
          this.dealIndex = 0;
          this.msgThisLogic = null;
          this.startTime = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcb57522154a54600788d3df4cc56980f5a92d64.js.map