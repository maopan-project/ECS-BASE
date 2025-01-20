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
          if (!target || !func || !eventName) {
            return;
          }

          let handler = new EventHandler();
          handler.func = func;
          handler.obj = target;
          handler.once = !!once;

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

        offByTarget(target) {
          for (const val of this._handlers) {
            for (const v of val[1]) {
              if (v.obj === target) {
                v.off();
                val[1].delete(v);
              }
            }

            if (val[1].size === 0) {
              this._handlers.delete(val[0]);
            }
          }
        }

      });

      EventCenter._ins = null;
      EventHandler = class EventHandler {
        constructor() {
          this.func = () => {};

          this.obj = null;
          this.once = false;
        }

        handle(...args) {
          this.func.call(this.obj, ...args);
        }

        off() {
          this.func = null;
          this.obj = null;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec261268845ce9bd0ab204d98288bb4ebae0df74.js.map