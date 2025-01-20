System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventTarget, _dec, _class, _crd, ccclass, property, eventTarget, GameStart;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EventTarget = _cc.EventTarget;
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
          eventTarget.targetOff("", () => {});
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4d93873a5091ac9871259c7238f51bd5ea59d3fe.js.map