System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, eventTarget, _dec, _class, _class2, _crd, ccclass, property, WSClient;

  function _reportPossibleCrUseOfeventTarget(extras) {
    _reporterNs.report("eventTarget", "./GameStart", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageBase(extras) {
    _reporterNs.report("GameMessageBase", "./GameMessageBase", _context.meta, extras);
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
      eventTarget = _unresolved_2.eventTarget;
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
            (_crd && eventTarget === void 0 ? (_reportPossibleCrUseOfeventTarget({
              error: Error()
            }), eventTarget) : eventTarget).emit("");
          };

          ws.onmessage = ev => {
            log("onmessage", ev.data);
            var obj = JSON.parse(ev.data);
            (_crd && eventTarget === void 0 ? (_reportPossibleCrUseOfeventTarget({
              error: Error()
            }), eventTarget) : eventTarget).emit("", obj);
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
//# sourceMappingURL=b31ce7f3229558220313962d78533a18b9a5ca7b.js.map