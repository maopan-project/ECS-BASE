System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, EventCenter, _dec, _class, _class2, _crd, ccclass, property, WSClient;

  function _reportPossibleCrUseOfGameMessageBase(extras) {
    _reporterNs.report("GameMessageBase", "./GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventCenter(extras) {
    _reporterNs.report("EventCenter", "../event/EventCenter", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d10d3zPprZAobuN7nHMitvB", "WSClient", undefined);

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

        connect() {
          log("client try connect server!");
          var ws = new WebSocket("ws://localhost:8080");

          ws.onopen = ev => {
            console.log('ws connect success'); // EventCenter.instance.emit(EventDefine.EVENT_NETWORK_CONNECT);
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
//# sourceMappingURL=6719c8bd5970709501ea4baf418f6d379c02f42e.js.map