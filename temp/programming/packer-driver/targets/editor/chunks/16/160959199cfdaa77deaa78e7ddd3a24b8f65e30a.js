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
          if (a instanceof Vector3) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
          } else {
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=160959199cfdaa77deaa78e7ddd3a24b8f65e30a.js.map