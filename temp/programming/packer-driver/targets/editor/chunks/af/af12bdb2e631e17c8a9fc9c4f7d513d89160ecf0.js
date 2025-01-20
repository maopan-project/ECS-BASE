System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, v2, GameTool, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v2 = _cc.v2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d9d8Ogz2pG0at7IP2jBKp5", "GameTool", undefined);

      __checkObsolete__(['SpriteFrame']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['v2']);

      _export("default", GameTool = class GameTool {
        static pForAngle(radians) {
          return v2(Math.cos(radians), Math.sin(radians));
        }

        static prefabAnimFrame(sprite, sf, percent) {
          sprite.spriteFrame = sf[Math.floor(sf.length * percent)];
          return sprite.spriteFrame;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af12bdb2e631e17c8a9fc9c4f7d513d89160ecf0.js.map