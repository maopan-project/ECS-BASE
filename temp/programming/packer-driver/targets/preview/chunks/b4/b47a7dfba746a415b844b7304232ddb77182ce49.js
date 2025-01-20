System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MessagePool, GameMessageBase, GameMessageC2S_GameStart, GameMessageS2C_GameStart, GameMessageS2C_UID, GameMessageC2S_Operation, GameMessageOperationBody, GameMessageS2C_Operations, _crd, GameMessageType;

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "./Config", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f51c47S98tB3YX0OA6+bILq", "GameMessageBase", undefined);

      _export("MessagePool", MessagePool = class MessagePool {
        static get() {}

      });

      MessagePool.msgs = new Map();

      _export("GameMessageBase", GameMessageBase = class GameMessageBase {
        constructor() {
          this.time = 0;
        }

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

      });

      _export("GameMessageS2C_UID", GameMessageS2C_UID = class GameMessageS2C_UID extends GameMessageBase {
        constructor() {
          super(...arguments);
          this.type = GameMessageType.S2C_UID;
          this.uid = [];
        }

      });

      _export("GameMessageC2S_Operation", GameMessageC2S_Operation = class GameMessageC2S_Operation extends GameMessageBase {
        constructor() {
          super(...arguments);
          this.type = GameMessageType.C2S_OPERATOR;
          this.uid = -1;
          this.body = null;
        }

      });

      _export("GameMessageOperationBody", GameMessageOperationBody = class GameMessageOperationBody {
        constructor() {
          this.dir = null;
        }

      });

      _export("GameMessageS2C_Operations", GameMessageS2C_Operations = class GameMessageS2C_Operations extends GameMessageBase {
        constructor() {
          super(...arguments);
          this.type = GameMessageType.S2C_OPERATIONS;
          this.operations = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b47a7dfba746a415b844b7304232ddb77182ce49.js.map