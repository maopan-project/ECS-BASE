System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Direction, GameMessageBase, GameMessageC2S_GameStart, GameMessageS2C_GameStart, GameMessageS2C_UID, GameMessageC2S_Operation, GameMessageOperationBody, GameMessageS2C_Operations, _crd, GameMessageType;

  function _reportPossibleCrUseOfDirection(extras) {
    _reporterNs.report("Direction", "./Config", _context.meta, extras);
  }

  _export({
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
    }, function (_unresolved_2) {
      Direction = _unresolved_2.Direction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f51c47S98tB3YX0OA6+bILq", "GameMessageBase", undefined);

      _export("GameMessageBase", GameMessageBase = class GameMessageBase {
        constructor() {
          this.type = void 0;
        }

      });

      _export("GameMessageType", GameMessageType = /*#__PURE__*/function (GameMessageType) {
        GameMessageType[GameMessageType["C2S_GameStart"] = 0] = "C2S_GameStart";
        GameMessageType[GameMessageType["C2S_Operator"] = 1] = "C2S_Operator";
        GameMessageType[GameMessageType["S2C_UID"] = 2] = "S2C_UID";
        GameMessageType[GameMessageType["S2C_GameStart"] = 3] = "S2C_GameStart";
        GameMessageType[GameMessageType["S2C_Operations"] = 4] = "S2C_Operations";
        return GameMessageType;
      }({}));

      _export("GameMessageC2S_GameStart", GameMessageC2S_GameStart = class GameMessageC2S_GameStart extends GameMessageBase {
        constructor(...args) {
          super(...args);
          this.type = GameMessageType.C2S_GameStart;
        }

      });

      _export("GameMessageS2C_GameStart", GameMessageS2C_GameStart = class GameMessageS2C_GameStart extends GameMessageBase {
        constructor(...args) {
          super(...args);
          this.type = GameMessageType.S2C_GameStart;
          this.uids = [];
        }

      });

      _export("GameMessageS2C_UID", GameMessageS2C_UID = class GameMessageS2C_UID extends GameMessageBase {
        constructor(...args) {
          super(...args);
          this.type = GameMessageType.S2C_UID;
          this.uid = [];
        }

      });

      _export("GameMessageC2S_Operation", GameMessageC2S_Operation = class GameMessageC2S_Operation extends GameMessageBase {
        constructor(...args) {
          super(...args);
          this.type = GameMessageType.S2C_Operations;
          this.uid = -1;
          this.body = null;
        }

      });

      _export("GameMessageOperationBody", GameMessageOperationBody = class GameMessageOperationBody {
        constructor() {
          this.dir = (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
            error: Error()
          }), Direction) : Direction).Up;
        }

      });

      _export("GameMessageS2C_Operations", GameMessageS2C_Operations = class GameMessageS2C_Operations extends GameMessageBase {
        constructor(...args) {
          super(...args);
          this.type = GameMessageType.S2C_Operations;
          this.operations = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a66ad8197dd29fb8c91d414716886bdcfeb6ff8.js.map