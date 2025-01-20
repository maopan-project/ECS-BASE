System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Prefab, _decorator, instantiate, GameActor, GameBullet, EntityType, SystemType, World, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RenderSystem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameActor(extras) {
    _reporterNs.report("GameActor", "../../prefabs/GameActor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameBullet(extras) {
    _reporterNs.report("GameBullet", "../../ui/GameBullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUIBase(extras) {
    _reporterNs.report("GameUIBase", "../../ui/GameUIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityType(extras) {
    _reporterNs.report("EntityType", "../framework/ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "../framework/ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "../framework/System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../framework/World", _context.meta, extras);
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
      GameActor = _unresolved_2.GameActor;
    }, function (_unresolved_3) {
      GameBullet = _unresolved_3.default;
    }, function (_unresolved_4) {
      EntityType = _unresolved_4.EntityType;
      SystemType = _unresolved_4.SystemType;
    }, function (_unresolved_5) {
      World = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01b9aQEhqFGzb4iwO6tyh7B", "RenderSystem", undefined);

      __checkObsolete__(['Component', 'Prefab', '_decorator', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", RenderSystem = (_dec = property(Prefab), _dec2 = property(Prefab), ccclass(_class = (_class2 = class RenderSystem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "PrefabActor", _descriptor, this);

          _initializerDefineProperty(this, "PrefabBullet", _descriptor2, this);

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
            let uiBase = null;

            if (entity.type === (_crd && EntityType === void 0 ? (_reportPossibleCrUseOfEntityType({
              error: Error()
            }), EntityType) : EntityType).Actor) {
              uiBase = instantiate(this.PrefabActor).getComponent(_crd && GameActor === void 0 ? (_reportPossibleCrUseOfGameActor({
                error: Error()
              }), GameActor) : GameActor);
            } else if (entity.type === (_crd && EntityType === void 0 ? (_reportPossibleCrUseOfEntityType({
              error: Error()
            }), EntityType) : EntityType).Bullet) {
              uiBase = instantiate(this.PrefabBullet).getComponent(_crd && GameBullet === void 0 ? (_reportPossibleCrUseOfGameBullet({
                error: Error()
              }), GameBullet) : GameBullet);
            }

            if (uiBase) {
              uiBase.entity = entity;
              uiBase.node.parent = this.node;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PrefabActor", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "PrefabBullet", [_dec2], {
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
//# sourceMappingURL=180ddf4e02fd9097d94f40230ee1597fe87ceb4d.js.map