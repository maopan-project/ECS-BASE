System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, v3, _dec, _class, _crd, ccclass, property, Square;

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "./Config", _context.meta, extras);
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
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d53e751g/FAqL0WJ6CcqP+w", "Square", undefined);

      __checkObsolete__(['_decorator', 'Component', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Square", Square = (_dec = ccclass('Square'), _dec(_class = class Square extends Component {
        move(dir) {
          let offset = v3(dir.x, dir.y, dir.z).multiplyScalar(10);
          this.node.position = this.node.position.add(offset);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60fa106cd24535e606d7c6ad047a690b3356cf32.js.map