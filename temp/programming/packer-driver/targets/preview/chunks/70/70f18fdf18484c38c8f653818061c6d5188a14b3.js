System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, v3, Vector3, _crd;

  _export("Vector3", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68020eNFYBGbJtHo6z568YQ", "Type", undefined);

      __checkObsolete__(['v3']);

      __checkObsolete__(['v2']);

      _export("Vector3", Vector3 = class Vector3 {
        constructor() {
          this.x = 0;
          this.y = 0;
          this.z = 0;
        }

        set(x, y, z) {
          if (x !== undefined) {
            this.x = x;
          }

          if (y !== undefined) {
            this.y = y;
          }

          if (z !== undefined) {
            this.z = z;
          }
        }

        add(vec3) {
          this.x += vec3.x;
          this.y += vec3.y;
          this.z += vec3.z;
        }

        multiply(val) {
          this.x *= val;
          this.y *= val;
          this.z *= val;
        }

        resetToZero() {
          this.x = 0;
          this.y = 0;
          this.z = 0;
        }

        to() {
          return v3(this.x, this.y, this.z);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=70f18fdf18484c38c8f653818061c6d5188a14b3.js.map