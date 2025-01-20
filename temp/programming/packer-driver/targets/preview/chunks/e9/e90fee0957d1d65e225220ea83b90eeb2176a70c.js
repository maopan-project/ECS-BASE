System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FireComponent, MoveComponent, NetworkReceiveComponent, TransformComponent, EntityType, SystemType, FireSystem, _crd;

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "../../GameType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireComponent(extras) {
    _reporterNs.report("FireComponent", "../components/FireComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveComponent(extras) {
    _reporterNs.report("MoveComponent", "../components/MoveComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkReceiveComponent(extras) {
    _reporterNs.report("NetworkReceiveComponent", "../components/NetworkComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityType(extras) {
    _reporterNs.report("EntityType", "../framework/ECSConfig", _context.meta, extras);
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
      FireComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      MoveComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      NetworkReceiveComponent = _unresolved_4.default;
    }, function (_unresolved_5) {
      TransformComponent = _unresolved_5.default;
    }, function (_unresolved_6) {
      EntityType = _unresolved_6.EntityType;
      SystemType = _unresolved_6.SystemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c62fcn8ZNFAlolmpl4aYDwy", "FireSystem", undefined);

      _export("default", FireSystem = class FireSystem {
        constructor() {
          this.world = void 0;
          this.type = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).LogicBeforePhysics;
        }

        onUpdate() {
          var msgOp = this.world.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent);

          if (msgOp.msgThisLogic) {
            var operations = msgOp.msgThisLogic.operations;

            for (var i = 0; i < operations.length; i++) {
              var op = operations[i];
              var entity = this.world.getEntityByID(op.entityID);

              if (entity) {
                var fireComponent = entity.getComponent(_crd && FireComponent === void 0 ? (_reportPossibleCrUseOfFireComponent({
                  error: Error()
                }), FireComponent) : FireComponent);
                fireComponent.wantFire = op.body.isFire;
              }
            }
          }

          this.world.forEach([_crd && FireComponent === void 0 ? (_reportPossibleCrUseOfFireComponent({
            error: Error()
          }), FireComponent) : FireComponent], (entity, fire) => {
            if (fire.currentCoolDown === 0 && fire.wantFire) {
              fire.isFire = true;
              fire.currentCoolDown = fire.maxCoolDown;
            }

            if (fire.currentCoolDown > 0) {
              fire.currentCoolDown--;
            }

            if (fire.isFire) {
              if (fire.currentFrame < fire.totalFireFrame) {
                fire.currentFrame++;

                if (fire.currentFrame === fire.fireFrame) {
                  this.generateBullet(fire, entity);
                }
              }

              if (fire.currentFrame === fire.totalFireFrame) {
                fire.currentFrame = 0;
                fire.isFire = false;
              }
            }
          });
        }

        generateBullet(fire, fromEntity) {
          var entity = this.world.getNewEntity((_crd && EntityType === void 0 ? (_reportPossibleCrUseOfEntityType({
            error: Error()
          }), EntityType) : EntityType).Bullet);
          var move = entity.addComponent(_crd && MoveComponent === void 0 ? (_reportPossibleCrUseOfMoveComponent({
            error: Error()
          }), MoveComponent) : MoveComponent);
          var trans = entity.addComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent);
          this.parseBulletMove(fromEntity.getComponent(_crd && MoveComponent === void 0 ? (_reportPossibleCrUseOfMoveComponent({
            error: Error()
          }), MoveComponent) : MoveComponent).moveSpeed, move, trans);
          trans.position.set(fromEntity.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent).position);
          this.world.addEntityToWorld(entity);
        }

        parseBulletMove(dir, move, trans) {
          move.moveSpeed.set(dir);
          trans.angle = 90;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e90fee0957d1d65e225220ea83b90eeb2176a70c.js.map