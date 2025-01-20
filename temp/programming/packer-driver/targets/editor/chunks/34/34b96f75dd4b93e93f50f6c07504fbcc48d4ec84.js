System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, _class, _crd, ccclass, property, GameUIBase;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../ecs/framework/Entity", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e43e4BjVhGXq33MqQm2R5U", "GameUIBase", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GameUIBase = ccclass(_class = class GameUIBase extends Component {
        constructor(...args) {
          super(...args);
          this.entity = void 0;
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=34b96f75dd4b93e93f50f6c07504fbcc48d4ec84.js.map