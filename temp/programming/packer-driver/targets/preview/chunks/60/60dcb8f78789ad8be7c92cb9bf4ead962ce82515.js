System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, NetworkReceiveComponent, SystemType, NetworkReceiveSystem, _crd;

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
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      NetworkReceiveComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      SystemType = _unresolved_3.SystemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1ab9iImj1LMahP1IZDlLjl", "NetwrokReciveSystem", undefined);

      __checkObsolete__(['log']);

      _export("default", NetworkReceiveSystem = class NetworkReceiveSystem {
        constructor() {
          this.world = null;
          this.type = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Network;
        }

        onUpdate() {
          var nrc = this.world.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent);
          nrc.msgThisLogic = null;
          var rate = this.world.fixedUpdateInterval / this.world.networkUpdateInterval;
          var frameToDealThisMsg = Math.floor((this.world.logicCycleCount - 1) * rate) + 1;

          if (frameToDealThisMsg > nrc.dealIndex) {
            // 有新的网络包就更新一下
            nrc.msgThisLogic = nrc.msgToDeal[nrc.dealIndex++];
            log(JSON.stringify(nrc.msgThisLogic));
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60dcb8f78789ad8be7c92cb9bf4ead962ce82515.js.map