System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Vector3, _crd;

  _export("Vector3", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "530caF4amNOPqJHJPjLVkpk", "GameType", undefined);

      _export("Vector3", Vector3 = class Vector3 {
        constructor() {
          this.x = 0;
          this.y = 0;
          this.z = 0;
        }

        get length() {
          return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** (1 / 2);
        }

        set(a, b, c) {
          if (a !== undefined) {
            this.x = a;
          }

          if (b !== undefined) {
            this.y = b;
          }

          if (c !== undefined) {
            this.z = c;
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b0f974e4a25b405cf55afe126a2a83f04301cdd.js.map