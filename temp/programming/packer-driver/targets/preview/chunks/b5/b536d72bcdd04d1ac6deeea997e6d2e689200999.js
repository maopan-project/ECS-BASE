System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, instantiate, KeyCode, Prefab, Vector3, Square, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameStart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "./Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSquare(extras) {
    _reporterNs.report("Square", "./Square", _context.meta, extras);
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
      Input = _cc.Input;
      input = _cc.input;
      instantiate = _cc.instantiate;
      KeyCode = _cc.KeyCode;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Vector3 = _unresolved_2.Vector3;
    }, function (_unresolved_3) {
      Square = _unresolved_3.Square;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8a18aAMHtIjbq2MHTEFRAN", "GameStart", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'Input', 'input', 'instantiate', 'KeyCode', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameStart", GameStart = (_dec = ccclass('GameStart'), _dec2 = property(Prefab), _dec(_class = (_class2 = class GameStart extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "squarePrefab", _descriptor, this);

          this._keyMap = new Map();
          this._squares = new Map();
          this.uid = 0;
          this._tempVector3 = new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)();
        }

        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.keyDown, this);
          input.on(Input.EventType.KEY_UP, this.keyUp, this);
        }

        start() {
          this._keyMap.set(KeyCode.KEY_A, false);

          this._keyMap.set(KeyCode.KEY_S, false);

          this._keyMap.set(KeyCode.KEY_D, false);

          this._keyMap.set(KeyCode.KEY_W, false);

          var square = instantiate(this.squarePrefab).getComponent(_crd && Square === void 0 ? (_reportPossibleCrUseOfSquare({
            error: Error()
          }), Square) : Square);
          square.node.parent = this.node;

          this._squares.set(this.uid, square);
        }

        update(deltaTime) {
          if (this._keyMap.get(KeyCode.KEY_A)) this._tempVector3.x -= 1;
          if (this._keyMap.get(KeyCode.KEY_S)) this._tempVector3.y -= 1;
          if (this._keyMap.get(KeyCode.KEY_D)) this._tempVector3.x += 1;
          if (this._keyMap.get(KeyCode.KEY_W)) this._tempVector3.y += 1; // let body = new GameMessageOperationBody();
          // body.dir = v3;
          // let msg = new GameMessageC2S_Operation();
          // msg.uid = this.uid;
          // msg.body = body;
          // WSClient.instance.send(msg);
          // this._squares.get(this.uid).move(v3);

          this._tempVector3.clear();
        }

        keyDown(event) {
          if (this._keyMap.has(event.keyCode)) {
            this._keyMap.set(event.keyCode, true);
          }
        }

        keyUp(event) {
          if (this._keyMap.has(event.keyCode)) {
            this._keyMap.set(event.keyCode, false);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "squarePrefab", [_dec2], {
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
//# sourceMappingURL=b536d72bcdd04d1ac6deeea997e6d2e689200999.js.map