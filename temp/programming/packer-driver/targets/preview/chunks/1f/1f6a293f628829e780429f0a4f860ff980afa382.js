System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vector3, MessagePool, GameMessageBase, GameMessageC2S_GameStart, GameMessageS2C_GameStart, GameMessageS2C_UID, GameMessageC2S_Operation, GameMessageOperationBody, GameMessageS2C_Operations, _crd, GameMessageType;

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "../Type", _context.meta, extras);
  }

  _export({
    MessagePool: void 0,
    GameMessageBase: void 0,
    GameMessageC2S_GameStart: void 0,
    GameMessageS2C_GameStart: void 0,
    GameMessageS2C_UID: void 0,
    GameMessageC2S_Operation: void 0,
    GameMessageOperationBody: void 0,
    GameMessageS2C_Operations: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      Vector3 = _unresolved_2.Vector3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ef87Fe0YpO8YR06ukvjcms", "GameMessage", undefined);

      __checkObsolete__(['Scheduler']);

      _export("MessagePool", MessagePool = class MessagePool {
        static get(msg) {
          var type = msg.prototype.type;

          if (!MessagePool.msgs.has(type)) {
            MessagePool.msgs.set(type, []);
          }

          var arr = MessagePool.msgs.get(type);

          if (arr.length > 0) {
            return arr.pop();
          } else {
            return new msg();
          }
        }

        static recycle(msg) {
          if (MessagePool.msgs.has(msg.type)) {
            var arr = MessagePool.msgs.get(msg.type);
            msg.clear();
            arr.push(msg);
          }
        }

        static clearAll() {
          for (var msgs of MessagePool.msgs.values()) {
            msgs.forEach(msg => {
              msg.clear();
            });
          }

          this.msgs.clear();
        }

      });

      MessagePool.msgs = new Map();

      _export("GameMessageBase", GameMessageBase = class GameMessageBase {
        clear() {}

      });

      _export("GameMessageType", GameMessageType = /*#__PURE__*/function (GameMessageType) {
        GameMessageType[GameMessageType["C2S_GAME_START"] = 0] = "C2S_GAME_START";
        GameMessageType[GameMessageType["C2S_OPERATOR"] = 1] = "C2S_OPERATOR";
        GameMessageType[GameMessageType["S2C_UID"] = 2] = "S2C_UID";
        GameMessageType[GameMessageType["S2C_GAME_START"] = 3] = "S2C_GAME_START";
        GameMessageType[GameMessageType["S2C_OPERATIONS"] = 4] = "S2C_OPERATIONS";
        return GameMessageType;
      }({}));

      _export("GameMessageC2S_GameStart", GameMessageC2S_GameStart = class GameMessageC2S_GameStart extends GameMessageBase {
        constructor() {
          super(...arguments);
          this.type = GameMessageType.C2S_GAME_START;
        }

      });

      _export("GameMessageS2C_GameStart", GameMessageS2C_GameStart = class GameMessageS2C_GameStart extends GameMessageBase {
        constructor() {
          super(...arguments);
          this.type = GameMessageType.S2C_GAME_START;
          this.uids = [];
        }

        clear() {
          this.uids.length = 0;
        }

      });

      _export("GameMessageS2C_UID", GameMessageS2C_UID = class GameMessageS2C_UID extends GameMessageBase {
        constructor() {
          super(...arguments);
          this.type = GameMessageType.S2C_UID;
          this.uid = -1;
        }

      });

      _export("GameMessageC2S_Operation", GameMessageC2S_Operation = class GameMessageC2S_Operation extends GameMessageBase {
        constructor() {
          super(...arguments);
          this.type = GameMessageType.C2S_OPERATOR;
          this.uid = -1;
          this.body = new GameMessageOperationBody();
          this.entityID = -1;
        }

      });

      _export("GameMessageOperationBody", GameMessageOperationBody = class GameMessageOperationBody {
        constructor() {
          this.dir = new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)();
        }

      });

      _export("GameMessageS2C_Operations", GameMessageS2C_Operations = class GameMessageS2C_Operations extends GameMessageBase {
        constructor() {
          super(...arguments);
          this.type = GameMessageType.S2C_OPERATIONS;
          this.operations = [];
        }

        clear() {
          this.operations.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f6a293f628829e780429f0a4f860ff980afa382.js.map