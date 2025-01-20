System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TransformComponent, v3, _class, _crd, ccclass, property, GameActor;

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

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameActor", GameActor = ccclass(_class = class GameActor extends Component {
        constructor(...args) {
          super(...args);
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
          let pos = this.transform.position;
          this.node.position = this.tempVec3.set(pos.x, pos.y, pos.z);
        }

      }) || _class);

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ca11a1e0bc87a337a932aa567cc5b2fea32f83b.js.map