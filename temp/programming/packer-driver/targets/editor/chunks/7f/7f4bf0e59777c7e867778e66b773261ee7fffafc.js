System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventTarget, EventCenter, _dec, _class, _crd, ccclass, property, eventTarget, GameStart;

  function _reportPossibleCrUseOfEventCenter(extras) {
    _reporterNs.report("EventCenter", "./EventCenter", _context.meta, extras);
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
      EventTarget = _cc.EventTarget;
    }, function (_unresolved_2) {
      EventCenter = _unresolved_2.EventCenter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8a18aAMHtIjbq2MHTEFRAN", "GameStart", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Event', 'EventTarget', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("eventTarget", eventTarget = new EventTarget());

      _export("GameStart", GameStart = (_dec = ccclass('GameStart'), _dec(_class = class GameStart extends Component {
        onLoad() {
          // eventTarget.targetOff("", () => { });
          (_crd && EventCenter === void 0 ? (_reportPossibleCrUseOfEventCenter({
            error: Error()
          }), EventCenter) : EventCenter).instance.on("aaa", () => {});
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f4bf0e59777c7e867778e66b773261ee7fffafc.js.map