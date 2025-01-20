System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameTool, GameActorStateBase, GameActorIdle, _crd, StateType;

  function _reportPossibleCrUseOfGameTool(extras) {
    _reporterNs.report("GameTool", "../GameTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameActorMachine(extras) {
    _reporterNs.report("GameActorMachine", "./GameActorMachine", _context.meta, extras);
  }

  _export({
    GameActorStateBase: void 0,
    GameActorIdle: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameTool = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20776PSfrZKWoslBBlXVtYv", "GameActorState", undefined);

      _export("GameActorStateBase", GameActorStateBase = class GameActorStateBase {
        constructor() {
          this.type = StateType.NONE;
          this.machine = null;
          this.time = 0;
        }

        onEnter() {}

        onuUpdate(deltaTime) {
          this.time += deltaTime;
        }

        onExit() {
          this.machine = null;
        }

      });

      _export("StateType", StateType = /*#__PURE__*/function (StateType) {
        StateType[StateType["NONE"] = 0] = "NONE";
        StateType[StateType["IDLE"] = 1] = "IDLE";
        StateType[StateType["WALK"] = 2] = "WALK";
        StateType[StateType["ATTACK"] = 3] = "ATTACK";
        StateType[StateType["DIE"] = 4] = "DIE";
        return StateType;
      }({}));

      _export("GameActorIdle", GameActorIdle = class GameActorIdle extends GameActorStateBase {
        onuUpdate(deltaTime) {
          super.onuUpdate(deltaTime);
          var actor = this.machine.actor;
          var percent = (this.time - actor.animTime) % 1;
          (_crd && GameTool === void 0 ? (_reportPossibleCrUseOfGameTool({
            error: Error()
          }), GameTool) : GameTool).prefabAnimFrame(actor.spriteActor, actor.sfIdle, percent);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9de1ea27d47db43a3762abfc660f198159ab9d80.js.map