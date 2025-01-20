System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, EventCenter, EventDefine, _dec, _class, _class2, _crd, ccclass, property, WSClient;

  function _reportPossibleCrUseOfGameMessageBase(extras) {
    _reporterNs.report("GameMessageBase", "./GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventCenter(extras) {
    _reporterNs.report("EventCenter", "./EventCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventDefine(extras) {
    _reporterNs.report("EventDefine", "./EventDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
    }, function (_unresolved_2) {
      EventCenter = _unresolved_2.EventCenter;
    }, function (_unresolved_3) {
      EventDefine = _unresolved_3.EventDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e0eck5x59KIJm92ROMjKGw", "WSClient", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WSClient", WSClient = (_dec = ccclass('WSClient'), _dec(_class = (_class2 = class WSClient extends Component {
        constructor() {
          super(...arguments);
          this.ws = null;
        }

        onLoad() {
          WSClient.instance = this;
        }

        onEnable() {
          log("onEnable wsClient", this.ws);
        }

        onDisable() {
          log("onDisable wsClient", this.ws);
        }

        connect() {
          log("client try connect server!");
          var ws = new WebSocket("ws://localhost:8080");

          ws.onopen = ev => {
            (_crd && EventCenter === void 0 ? (_reportPossibleCrUseOfEventCenter({
              error: Error()
            }), EventCenter) : EventCenter).instance.emit((_crd && EventDefine === void 0 ? (_reportPossibleCrUseOfEventDefine({
              error: Error()
            }), EventDefine) : EventDefine).EVENT_NETWORK_CONNECT);
          };

          ws.onmessage = ev => {
            log("onmessage", ev.data);
            var obj = JSON.parse(ev.data);
            (_crd && EventCenter === void 0 ? (_reportPossibleCrUseOfEventCenter({
              error: Error()
            }), EventCenter) : EventCenter).instance.emit(obj.type.toString(), obj);
          };

          this.ws = ws;
        }

        send(msg) {
          var str = JSON.stringify(msg);
          log("send:", str);
          this.ws.send(str);
        }

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a4854caa3b49277e49bc255ff7f44d772301ee9.js.map