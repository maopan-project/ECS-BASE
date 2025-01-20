System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameActorMachine, _crd;

  function _reportPossibleCrUseOfGameActor(extras) {
    _reporterNs.report("GameActor", "../ui/GameActor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameActorStateBase(extras) {
    _reporterNs.report("GameActorStateBase", "./GameActorState", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07bc2mfD3FPBIDm48pPaqRe", "GameActorMachine", undefined);

      _export("default", GameActorMachine = class GameActorMachine {
        constructor(actor) {
          this.actor = null;
          this.state = null;
          this.actor = actor;
        }

        changeState(state) {
          if (this.state) {
            this.state.onExit();
          }

          this.state = state;
          this.state.machine = this;
          this.state.onEnter();
        }

        update(deltaTime) {
          if (this.state) {
            this.state.onuUpdate(deltaTime);
          }
        }

        destroy() {
          if (this.state) {
            this.state.onExit();
          }

          this.state = null;
          this.actor = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=359a7685cc950fe4aa42a4d35fd5e21c682bd235.js.map