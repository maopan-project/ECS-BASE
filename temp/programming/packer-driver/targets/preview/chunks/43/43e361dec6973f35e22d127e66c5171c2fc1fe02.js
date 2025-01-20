System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AutoDestroyComponent, SystemType, AutoDestroySystem, _crd;

  function _reportPossibleCrUseOfAutoDestroyComponent(extras) {
    _reporterNs.report("AutoDestroyComponent", "../components/AutoDestroyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "../framework/ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../framework/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../framework/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../framework/World", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AutoDestroyComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      SystemType = _unresolved_3.SystemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27122FrGJlMX6SFSUNxUkuf", "AutoDestroySystem", undefined);

      _export("default", AutoDestroySystem = class AutoDestroySystem {
        constructor() {
          this.world = void 0;
          this.type = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).LogicAfterPhysics;
        }

        onUpdate() {
          this.world.forEach([_crd && AutoDestroyComponent === void 0 ? (_reportPossibleCrUseOfAutoDestroyComponent({
            error: Error()
          }), AutoDestroyComponent) : AutoDestroyComponent], (entity, autoDestroy) => {
            autoDestroy.lifeTime++;

            if (autoDestroy.lifeTime > autoDestroy.maxLifeTime) {
              console.log('auto destroy entity');
              entity.markDestroy();
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43e361dec6973f35e22d127e66c5171c2fc1fe02.js.map