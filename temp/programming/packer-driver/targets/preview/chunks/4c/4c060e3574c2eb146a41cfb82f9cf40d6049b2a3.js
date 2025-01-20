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

      _cclegacy._RF.push({}, "8f9b0rpAchMxp5TpviZXpnM", "EventCenter", undefined);

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

          var handler = new EventHandler();
          handler.func = func;
          handler.obj = target;
          handler.once = !!once;

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
            if (val.once) {
              set.delete(val);
            }

            val.handle(...args);
          }
        }

        off(eventName) {
          if (!this._handlers.has(eventName)) {
            return;
          }

          this._handlers.delete(eventName);
        }

        offByTarget(target) {
          for (var val of this._handlers) {
            for (var v of val[1]) {
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

        handle() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

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
//# sourceMappingURL=4c060e3574c2eb146a41cfb82f9cf40d6049b2a3.js.map