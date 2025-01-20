System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventCenter, EventHandler, _crd;

  _export("EventCenter", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71d20eX9LJBr5FSHQjNBrJg", "EventCenter", undefined);

      _export("EventCenter", EventCenter = class EventCenter {
        constructor() {
          this._handlers = new Map();
        }

        static get instance() {
          if (!EventCenter._ins) {
            EventCenter._ins = new EventCenter();
          }

          return EventCenter._ins;
        }

        on(eventName, func, target, once) {
          var handler = new EventHandler();
          handler.func = func;
          handler.obj = func["Scopes"][0];
          handler.once = false;

          if (this._handlers.has(eventName)) {
            var set = this._handlers.get(eventName);

            set.add(handler);
          } else {
            var _set = new Set();

            _set.add(handler);

            this._handlers.set(eventName, _set);
          }
        }

        emit(eventName) {
          if (!this._handlers.has(eventName)) {
            return;
          }

          var set = this._handlers.get(eventName);

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          for (var val of set.values()) {
            val.handle(...args);

            if (val.once) {
              set.delete(val);
            }
          }
        }

        off(eventName) {
          if (!this._handlers.has(eventName)) {
            return;
          }

          this._handlers.delete(eventName);
        }

        offByTarget(target) {// for (const val of this.) {
          // }
        }

      });

      EventCenter._ins = null;
      EventHandler = class EventHandler {
        constructor() {
          this.func = void 0;
          this.obj = void 0;
          this.once = void 0;
        }

        handle() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          this.func.call(this.obj, ...args);
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=81eba45bb30e8fd737a33029d6bbe1f95a1d10b9.js.map