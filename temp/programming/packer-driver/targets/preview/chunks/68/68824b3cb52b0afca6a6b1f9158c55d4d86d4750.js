System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, Vector3, _crd;

  _export("Vector3", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "530caF4amNOPqJHJPjLVkpk", "GameType", undefined);

      __checkObsolete__(['Vec3']);

      _export("Vector3", Vector3 = class Vector3 {
        constructor() {
          this.x = 0;
          this.y = 0;
          this.z = 0;
        }

        get length() {
          return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** (1 / 2);
        }

        set() {
          if (arguments[0] instanceof Vector3 || arguments[0] instanceof Vec3) {
            this.x = arguments[0].x;
            this.y = arguments[0].y;
            this.z = arguments[0].z;
          } else {
            if (arguments[0] !== undefined) {
              this.x = arguments[0];
            }

            if (arguments[1] !== undefined) {
              this.y = arguments[1];
            }

            if (arguments[2] !== undefined) {
              this.z = arguments[2];
            }
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

        equal(out, fixed) {
          if (fixed === void 0) {
            fixed = 1e-3;
          }

          var offsetX = Math.abs(out.x - this.x) - fixed;
          var offsetY = Math.abs(out.y - this.y) - fixed;
          var offsetZ = Math.abs(out.z - this.z) - fixed;
          return offsetX < 0 && offsetY < 0 && offsetZ < 0;
        }

        distanceSquared(other) {
          return (this.x - other.x) ** 2 + (this.y - other.y) ** 2 + (this.z - this.z) ** 2;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68824b3cb52b0afca6a6b1f9158c55d4d86d4750.js.map