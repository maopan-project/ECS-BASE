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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9f39a09ad75fe7dd40a603af70ff40c7d122116d.js.map