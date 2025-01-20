System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CollisionComponent, TransformComponent, SystemType, CollisionDetectionSystem, _crd;

  function _reportPossibleCrUseOfCollisionComponent(extras) {
    _reporterNs.report("CollisionComponent", "../components/CollisionComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../components/TransformComponent", _context.meta, extras);
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
      CollisionComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      TransformComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      SystemType = _unresolved_4.SystemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1dfdqQEj9DXZIDW8Qb6IaI", "CollisionDetectionSystem", undefined);

      _export("default", CollisionDetectionSystem = class CollisionDetectionSystem {
        constructor() {
          this.world = void 0;
          this.type = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Physics;
        }

        onUpdate() {
          var entitiesSet = this.world.getEntitiesByComponents([_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent, _crd && CollisionComponent === void 0 ? (_reportPossibleCrUseOfCollisionComponent({
            error: Error()
          }), CollisionComponent) : CollisionComponent]);
          var arrEntities = [...entitiesSet];

          for (var i = 0; i < arrEntities.length; i++) arrEntities[i].getComponent(_crd && CollisionComponent === void 0 ? (_reportPossibleCrUseOfCollisionComponent({
            error: Error()
          }), CollisionComponent) : CollisionComponent).otherCollisionEntityIDs.length = 0; // 这里是最暴力的双重for


          for (var _i = 0; _i < arrEntities.length; _i++) {
            var entity = arrEntities[_i];
            var transform = entity.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
              error: Error()
            }), TransformComponent) : TransformComponent);

            if (transform.collisionRadius === -1) {
              continue;
            }

            var collision = entity.getComponent(_crd && CollisionComponent === void 0 ? (_reportPossibleCrUseOfCollisionComponent({
              error: Error()
            }), CollisionComponent) : CollisionComponent);

            for (var j = _i + 1; j < arrEntities.length; j++) {
              var otherEntity = arrEntities[j];
              var otherTransform = otherEntity.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
                error: Error()
              }), TransformComponent) : TransformComponent);

              if (otherTransform.collisionRadius === -1) {
                continue;
              }

              var otherCollision = otherEntity.getComponent(_crd && CollisionComponent === void 0 ? (_reportPossibleCrUseOfCollisionComponent({
                error: Error()
              }), CollisionComponent) : CollisionComponent);
              var distance = transform.position.distanceSquared(otherTransform.position);
              var radiusSum = transform.collisionRadius ** 2 + otherTransform.collisionRadius ** 2;

              if (distance < radiusSum) {
                collision.otherCollisionEntityIDs.push(otherEntity.id);
                otherCollision.otherCollisionEntityIDs.push(entity.id);
                console.log('发生了碰撞');
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcbb0ed2999bcdf464aaf566e339bdd9f6423882.js.map