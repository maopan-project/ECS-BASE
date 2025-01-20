System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TransformComponent, v3, _class, _crd, ccclass, property, GameActor;

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../ecs/framework/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../ecs/components/TransformComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      TransformComponent = _unresolved_2.TransformComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a19eCBB65N5rsQhJeZqRbj", "GameActors", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameActor", GameActor = ccclass(_class = class GameActor extends Component {
        constructor() {
          super(...arguments);
          this.entity = null;
          this.transform = null;
          this.tempVec3 = v3();
        }

        start() {
          this.transform = this.entity.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent);
        }

        update(deltaTime) {
          var pos = this.transform.position;
          this.node.position = this.tempVec3.set(pos.x, pos.y, pos.z);
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=298fd75998941884561ffc9d83cfdafafa73628e.js.map