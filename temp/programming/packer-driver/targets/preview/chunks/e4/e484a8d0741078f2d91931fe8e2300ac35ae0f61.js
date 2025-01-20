System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EComponent, ComponentType, NetworkReceiveComponent, _crd;

  function _reportPossibleCrUseOfGameMessageS2C_Operations(extras) {
    _reporterNs.report("GameMessageS2C_Operations", "../../network/GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEComponent(extras) {
    _reporterNs.report("EComponent", "../framework/Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "../framework/Config", _context.meta, extras);
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

      _cclegacy._RF.push({}, "f718ecamwVGu5U1EOLGjvu0", "NetworkComponent", undefined);

      _export("default", NetworkReceiveComponent = class NetworkReceiveComponent extends (_crd && EComponent === void 0 ? (_reportPossibleCrUseOfEComponent({
        error: Error()
      }), EComponent) : EComponent) {
        constructor() {
          super(...arguments);
          this.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).NetworkReceive;
          this.msgToDeal = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e484a8d0741078f2d91931fe8e2300ac35ae0f61.js.map