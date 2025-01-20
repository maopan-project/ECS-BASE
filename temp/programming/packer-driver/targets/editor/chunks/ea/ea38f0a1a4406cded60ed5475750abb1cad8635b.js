System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, Component, ActorStatusComponent, _crd;

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "../framework/Component", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
    }, function (_unresolved_2) {
      Component = _unresolved_2.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7858cxqzdA2Yp/IafryGT8", "ActorStatusComponent", undefined);

      __checkObsolete__(['math']);

      _export("default", ActorStatusComponent = class ActorStatusComponent extends (_crd && Component === void 0 ? (_reportPossibleCrUseOfComponent({
        error: Error()
      }), Component) : Component) {
        constructor(...args) {
          super(...args);
          // 对属性进行封装
          this._healthPoint = 100;
          this._maxHealthPoint = 100;
          this._scoring = 0;
        }

        get healthPoint() {
          return this._healthPoint;
        }

        set healthPoint(v) {
          this._healthPoint = math.clamp(v, 0, this._maxHealthPoint);
          console.log('玩家HP 变化', this._healthPoint);
        }

        get maxHealthPoint() {
          return this._maxHealthPoint;
        }

        set maxHealthPoint(v) {
          this._maxHealthPoint = v;
        }

        get scoring() {
          return this._scoring;
        }

        set scoring(v) {
          this._scoring = Math.max(0, v);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea38f0a1a4406cded60ed5475750abb1cad8635b.js.map