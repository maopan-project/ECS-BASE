System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetworkReceiveComponent, SystemType, NetworkReceiveSystem, _crd;

  function _reportPossibleCrUseOfNetworkReceiveComponent(extras) {
    _reporterNs.report("NetworkReceiveComponent", "../components/NetworkComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "../framework/ECSConfig", _context.meta, extras);
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
    }, function (_unresolved_2) {
      NetworkReceiveComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      SystemType = _unresolved_3.SystemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1ab9iImj1LMahP1IZDlLjl", "NetwrokReciveSystem", undefined);

      _export("default", NetworkReceiveSystem = class NetworkReceiveSystem {
        constructor() {
          this.world = null;
          this.type = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Network;
        }

        onUpdate() {
          let nrc = this.world.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent);
          nrc.msgThisLogic = null;
          let rate = this.world.fixedUpdateInterval / this.world.networkUpdateInterval;
          let frameToDealThisMsg = Math.floor((this.world.logicCycleCount - 1) * rate) + 1;

          if (frameToDealThisMsg > nrc.dealIndex) {
            // 有新的网络包就更新一下
            nrc.msgThisLogic = nrc.msgToDeal[nrc.dealIndex++];
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e74a48d181de2a79b01fee126c18a190b5fb913.js.map