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
            fixed = 3;
          }

          return out.x.toFixed(fixed) === this.x.toFixed(fixed) && out.y.toFixed(fixed) === this.y.toFixed(fixed) && this.z.toFixed(fixed) === this.z.toFixed(fixed);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e411b7eb746d345773a2e3bfc2376faa857c95a4.js.map