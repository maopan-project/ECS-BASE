System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, _decorator, v3, MoveComponent, TransformComponent, World, GameUIBase, _class, _crd, ccclass, property, GameBullet;

  function _reportPossibleCrUseOfMoveComponent(extras) {
    _reporterNs.report("MoveComponent", "../ecs/components/MoveComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../ecs/components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../ecs/framework/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUIBase(extras) {
    _reporterNs.report("GameUIBase", "./GameUIBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      MoveComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      TransformComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      World = _unresolved_4.default;
    }, function (_unresolved_5) {
      GameUIBase = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f50064tO9pLuadlg40oxPNJ", "GameBullet", undefined);

      __checkObsolete__(['Vec3', '_decorator', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GameBullet = ccclass(_class = class GameBullet extends (_crd && GameUIBase === void 0 ? (_reportPossibleCrUseOfGameUIBase({
        error: Error()
      }), GameUIBase) : GameUIBase) {
        constructor() {
          super(...arguments);
          this.moveComp = null;
          this.transformComp = null;
          this.backupTransformComp = null;
          this.tempVec3 = v3();
          this.tempBackupVec3 = v3();
          this.outVec3 = v3();
        }

        onLoad() {
          this.transformComp = this.entity.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent);
          this.moveComp = this.entity.getComponent(_crd && MoveComponent === void 0 ? (_reportPossibleCrUseOfMoveComponent({
            error: Error()
          }), MoveComponent) : MoveComponent);
          this.backupTransformComp = this.entity.getBackupComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent);
          this.updatePos();
        }

        onUpdate() {
          this.updatePos();
        }

        updatePos() {
          var pos = this.transformComp.position;
          this.tempVec3.set(pos.x, pos.y, pos.z);
          pos = this.backupTransformComp.position;
          this.tempBackupVec3.set(pos.x, pos.y, pos.z);
          Vec3.lerp(this.outVec3, this.tempBackupVec3, this.tempVec3, (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance.uiLerpValue);
          this.node.position = this.outVec3;
          this.node.angle = this.transformComp.angle;
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0af4cfd26b574929fb69b9f2955d8a8d6c2d3826.js.map