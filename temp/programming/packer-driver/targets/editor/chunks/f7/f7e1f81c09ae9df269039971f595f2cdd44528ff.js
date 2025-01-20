System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TransformComponent, v3, Sprite, SpriteFrame, GameActorMachine, GameActorIdle, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameActor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "../ecs/framework/Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../ecs/components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameActorMachine(extras) {
    _reporterNs.report("GameActorMachine", "../state-machine/GameActorMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameActorIdle(extras) {
    _reporterNs.report("GameActorIdle", "../state-machine/GameActorState", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      TransformComponent = _unresolved_2.TransformComponent;
    }, function (_unresolved_3) {
      GameActorMachine = _unresolved_3.default;
    }, function (_unresolved_4) {
      GameActorIdle = _unresolved_4.GameActorIdle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a19eCBB65N5rsQhJeZqRbj", "GameActor", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameActor", GameActor = (_dec = property(Sprite), _dec2 = property([SpriteFrame]), ccclass(_class = (_class2 = class GameActor extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spriteActor", _descriptor, this);

          _initializerDefineProperty(this, "sfIdle", _descriptor2, this);

          this.animTime = 1;
          this.entity = null;
          this.transform = null;
          this.machine = null;
          this.tempVec3 = v3();
        }

        start() {
          this.transform = this.entity.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent);
          this.machine = new (_crd && GameActorMachine === void 0 ? (_reportPossibleCrUseOfGameActorMachine({
            error: Error()
          }), GameActorMachine) : GameActorMachine)(this);
          this.machine.changeState(new (_crd && GameActorIdle === void 0 ? (_reportPossibleCrUseOfGameActorIdle({
            error: Error()
          }), GameActorIdle) : GameActorIdle)());
        }

        update(deltaTime) {
          let pos = this.transform.position;
          this.node.position = this.tempVec3.set(pos.x, pos.y, pos.z); // this.machine.update(deltaTime);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteActor", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfIdle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7e1f81c09ae9df269039971f595f2cdd44528ff.js.map