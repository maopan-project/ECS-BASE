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

      _cclegacy._RF.push({}, "10a47kz0nFO/ITPOlIM4c8Y", "Config", undefined);

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

        clear() {
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
//# sourceMappingURL=995f814c567ae1bfe25d65b23e286c11b1c841ce.js.map