System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, v2, _crd;

  /**
   * 将弧度转换为一个标准化后的向量
   * @param radians 弧度
   * @returns v2向量
   */
  function pForAngle(radians) {
    return v2(Math.cos(radians), Math.sin(radians));
  }

  _export("pForAngle", pForAngle);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v2 = _cc.v2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1542fXQ1IlDa5LbKu4PM3sk", "Tool", undefined);

      __checkObsolete__(['v2']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=72a64ffb800193f26c8e3335bed6394c2f218de7.js.map