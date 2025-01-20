System.register([], function (_export, _context) {
  "use strict";

  var Vector3, _crd;

  _export("Vector3", void 0);

  return {
    setters: [],
    execute: function () {
      _crd = true;

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

      _crd = false;
    }
  };
});
//# sourceMappingURL=f133c6a1e08ab23cd4a9b2f9c13fb0f12b81a772.js.map