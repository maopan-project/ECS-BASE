System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Prefab, _decorator, instantiate, TransformComponent, SystemType, EntityType, World, Actor, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RenderSystem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "../framework/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityType(extras) {
    _reporterNs.report("EntityType", "../framework/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../framework/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../framework/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActor(extras) {
    _reporterNs.report("Actor", "../../prefabs/Actor", _context.meta, extras);
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
      TransformComponent = _unresolved_2.TransformComponent;
    }, function (_unresolved_3) {
      SystemType = _unresolved_3.SystemType;
      EntityType = _unresolved_3.EntityType;
    }, function (_unresolved_4) {
      World = _unresolved_4.World;
    }, function (_unresolved_5) {
      Actor = _unresolved_5.Actor;
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
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "PrefabArrow", _descriptor, this);

          this.world = null;
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
          let entities = this.world.newEntitiesInThisCycle;

          for (let i = 0; i < entities.length; i++) {
            let entity = entities[i];

            if (entity.type === (_crd && EntityType === void 0 ? (_reportPossibleCrUseOfEntityType({
              error: Error()
            }), EntityType) : EntityType).Actor) {
              let actor = instantiate(this.PrefabArrow).getComponent(_crd && Actor === void 0 ? (_reportPossibleCrUseOfActor({
                error: Error()
              }), Actor) : Actor);
              actor.entity = entity;
              actor.transform = entity.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
                error: Error()
              }), TransformComponent) : TransformComponent);
              actor.node.parent = this.node;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PrefabArrow", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=217762b95303061e5fa134fb725b001bdb8e8100.js.map