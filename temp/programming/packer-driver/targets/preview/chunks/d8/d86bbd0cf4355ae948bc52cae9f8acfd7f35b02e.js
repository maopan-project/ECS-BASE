System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, v3, GameTool, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d9d8Ogz2pG0at7IP2jBKp5", "GameTool", undefined);

      __checkObsolete__(['Sprite', 'SpriteFrame', 'v3']);

      _export("default", GameTool = class GameTool {
        static pForAngle(radians) {
          return v3(Math.cos(radians), Math.sin(radians), 0);
        }

        static prefabAnimFrame(sprite, sf, percent) {
          sprite.spriteFrame = sf[Math.floor(sf.length * percent)];
          return sprite.spriteFrame;
        }

        static radom(min, max) {
          this.radomSeed = (this.radomSeed * 2403 + 42143) % 233;
          var rnd = this.radomSeed / 223.0;
          return min + rnd * (max - min);
        }

      });

      GameTool.radomSeed = 2421;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d86bbd0cf4355ae948bc52cae9f8acfd7f35b02e.js.map