System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TransformComponent, _dec, _class, _crd, ccclass, property, Actor;

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
    }, function (_unresolved_2) {
      TransformComponent = _unresolved_2.TransformComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebd84A2ayVCqKWBL45Y9/e6", "Actor", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Actor", Actor = (_dec = ccclass('Actor'), _dec(_class = class Actor extends Component {
        constructor(...args) {
          super(...args);
          this.entity = null;
          this.transform = null;
        }

        start() {
          this.transform = this.entity.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent);
        }

        update(deltaTime) {
          this.node.position = this.transform.position.to();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6926234b98f80d2bdfa2b98c4434aca88593619.js.map