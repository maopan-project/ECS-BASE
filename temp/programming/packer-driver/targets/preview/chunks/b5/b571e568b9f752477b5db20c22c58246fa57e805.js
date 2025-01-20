System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Prefab, _decorator, instantiate, World, EntityType, SystemType, Arrow, TransformComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RenderSystem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfESystem(extras) {
    _reporterNs.report("ESystem", "../System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityType(extras) {
    _reporterNs.report("EntityType", "../Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "../Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArrow(extras) {
    _reporterNs.report("Arrow", "../prefab/Arrow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../components/TransformComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      World = _unresolved_2.World;
    }, function (_unresolved_3) {
      EntityType = _unresolved_3.EntityType;
      SystemType = _unresolved_3.SystemType;
    }, function (_unresolved_4) {
      Arrow = _unresolved_4.Arrow;
    }, function (_unresolved_5) {
      TransformComponent = _unresolved_5.TransformComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01b9aQEhqFGzb4iwO6tyh7B", "RenderSystem", undefined);

      __checkObsolete__(['Component', 'Prefab', '_decorator', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", RenderSystem = (_dec = ccclass('RenderSystem'), _dec2 = property(Prefab), _dec(_class = (_class2 = class RenderSystem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "PrefabArrow", _descriptor, this);

          this.world = void 0;
          this.type = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Render;
        }

        onLoad() {
          (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance.addSystemToCycle(this);
        }

        onUpdate() {
          var entities = this.world.newEntitiesInThisCycle;

          for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];

            if (entity.type === (_crd && EntityType === void 0 ? (_reportPossibleCrUseOfEntityType({
              error: Error()
            }), EntityType) : EntityType).Arrow) {
              var arrow = instantiate(this.PrefabArrow).getComponent(_crd && Arrow === void 0 ? (_reportPossibleCrUseOfArrow({
                error: Error()
              }), Arrow) : Arrow);
              arrow.entity = entity;
              arrow.transform = entity.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
                error: Error()
              }), TransformComponent) : TransformComponent);
              arrow.node.parent = this.node;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PrefabArrow", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b571e568b9f752477b5db20c22c58246fa57e805.js.map