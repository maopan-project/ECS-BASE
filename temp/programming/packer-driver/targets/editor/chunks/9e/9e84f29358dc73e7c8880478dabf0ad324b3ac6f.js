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
          let handler = new EventHandler();
          handler.func = func;
          handler.obj = func["Scopes"][0];
          handler.once = false;

          if (this._handlers.has(eventName)) {
            let set = this._handlers.get(eventName);

            set.add(handler);
          } else {
            let set = new Set();
            set.add(handler);

            this._handlers.set(eventName, set);
          }
        }

        emit(eventName, ...args) {
          if (!this._handlers.has(eventName)) {
            return;
          }

          let set = this._handlers.get(eventName);

          for (const val of set.values()) {
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

        handle(...args) {
          this.func.call(this.obj, ...args);
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e84f29358dc73e7c8880478dabf0ad324b3ac6f.js.map