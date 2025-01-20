System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameTool, ActorStatusComponent, BulletComponent, CampComponent, CollisionComponent, SystemType, HitSystem, _crd;

  function _reportPossibleCrUseOfGameTool(extras) {
    _reporterNs.report("GameTool", "../../GameTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActorStatusComponent(extras) {
    _reporterNs.report("ActorStatusComponent", "../components/ActorStatusComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletComponent(extras) {
    _reporterNs.report("BulletComponent", "../components/BulletComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCampComponent(extras) {
    _reporterNs.report("CampComponent", "../components/CampComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionComponent(extras) {
    _reporterNs.report("CollisionComponent", "../components/CollisionComponent", _context.meta, extras);
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
      GameTool = _unresolved_2.default;
    }, function (_unresolved_3) {
      ActorStatusComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      BulletComponent = _unresolved_4.default;
    }, function (_unresolved_5) {
      CampComponent = _unresolved_5.default;
    }, function (_unresolved_6) {
      CollisionComponent = _unresolved_6.default;
    }, function (_unresolved_7) {
      SystemType = _unresolved_7.SystemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "714ebZegvJAfKI6vn+Id52f", "HitSystem", undefined);

      _export("default", HitSystem = class HitSystem {
        constructor() {
          this.world = void 0;
          this.type = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).LogicAfterPhysics;
        }

        onUpdate() {
          this.world.forEach([_crd && CollisionComponent === void 0 ? (_reportPossibleCrUseOfCollisionComponent({
            error: Error()
          }), CollisionComponent) : CollisionComponent, _crd && CampComponent === void 0 ? (_reportPossibleCrUseOfCampComponent({
            error: Error()
          }), CampComponent) : CampComponent, _crd && BulletComponent === void 0 ? (_reportPossibleCrUseOfBulletComponent({
            error: Error()
          }), BulletComponent) : BulletComponent], (e, collision, camp, bullet) => {
            var collisionEntities = collision.otherCollisionEntityIDs;

            for (var i = 0; i < collisionEntities.length; i++) {
              var otherID = collisionEntities[i];
              var otherEntity = this.world.getEntityByID(otherID);
              var otherActorStatus = otherEntity.getComponent(_crd && ActorStatusComponent === void 0 ? (_reportPossibleCrUseOfActorStatusComponent({
                error: Error()
              }), ActorStatusComponent) : ActorStatusComponent);
              var otherCamp = otherEntity.getComponent(_crd && CampComponent === void 0 ? (_reportPossibleCrUseOfCampComponent({
                error: Error()
              }), CampComponent) : CampComponent);

              if (otherActorStatus && otherCamp && otherCamp.camp !== camp.camp) {
                var criticalHit = (_crd && GameTool === void 0 ? (_reportPossibleCrUseOfGameTool({
                  error: Error()
                }), GameTool) : GameTool).radom(0, 1);
                var damage = bullet.damage;

                if (criticalHit > 0.2) {
                  damage *= 1.5;
                  console.log('暴击了');
                }

                otherActorStatus.healthPoint -= damage;
                this.world.getEntityByID(bullet.fromEntityID).getComponent(_crd && ActorStatusComponent === void 0 ? (_reportPossibleCrUseOfActorStatusComponent({
                  error: Error()
                }), ActorStatusComponent) : ActorStatusComponent).scoring++;
                console.log('子弹打到人了');
              }
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8164802ebb9f054577b6d25a24d0b31d64dfbc81.js.map