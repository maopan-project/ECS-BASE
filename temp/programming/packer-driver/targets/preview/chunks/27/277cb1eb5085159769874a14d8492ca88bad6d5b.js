System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, instantiate, KeyCode, Label, Prefab, Square, EventCenter, GameMessageC2S_GameStart, GameMessageC2S_Operation, GameMessageType, MessagePool, WSClient, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameStart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSquare(extras) {
    _reporterNs.report("Square", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventCenter(extras) {
    _reporterNs.report("EventCenter", "./EventCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageC2S_GameStart(extras) {
    _reporterNs.report("GameMessageC2S_GameStart", "./GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageC2S_Operation(extras) {
    _reporterNs.report("GameMessageC2S_Operation", "./GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageS2C_GameStart(extras) {
    _reporterNs.report("GameMessageS2C_GameStart", "./GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageS2C_Operations(extras) {
    _reporterNs.report("GameMessageS2C_Operations", "./GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageS2C_UID(extras) {
    _reporterNs.report("GameMessageS2C_UID", "./GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageType(extras) {
    _reporterNs.report("GameMessageType", "./GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessagePool(extras) {
    _reporterNs.report("MessagePool", "./GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWSClient(extras) {
    _reporterNs.report("WSClient", "./WSClient", _context.meta, extras);
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
      Label = _cc.Label;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Square = _unresolved_2.Square;
    }, function (_unresolved_3) {
      EventCenter = _unresolved_3.EventCenter;
    }, function (_unresolved_4) {
      GameMessageC2S_GameStart = _unresolved_4.GameMessageC2S_GameStart;
      GameMessageC2S_Operation = _unresolved_4.GameMessageC2S_Operation;
      GameMessageType = _unresolved_4.GameMessageType;
      MessagePool = _unresolved_4.MessagePool;
    }, function (_unresolved_5) {
      WSClient = _unresolved_5.WSClient;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8a18aAMHtIjbq2MHTEFRAN", "GameStart", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'Input', 'input', 'instantiate', 'KeyCode', 'Label', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameStart", GameStart = (_dec = ccclass('GameStart'), _dec2 = property(Prefab), _dec3 = property(Label), _dec(_class = (_class2 = class GameStart extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "squarePrefab", _descriptor, this);

          _initializerDefineProperty(this, "lbUserID", _descriptor2, this);

          this._keyMap = new Map();
          this._squares = new Map();
          this.uid = 0;
          this.isInGame = false;
        }

        onClickGameStart() {
          (_crd && WSClient === void 0 ? (_reportPossibleCrUseOfWSClient({
            error: Error()
          }), WSClient) : WSClient).instance.send(new (_crd && GameMessageC2S_GameStart === void 0 ? (_reportPossibleCrUseOfGameMessageC2S_GameStart({
            error: Error()
          }), GameMessageC2S_GameStart) : GameMessageC2S_GameStart)());
        }

        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.keyDown, this);
          input.on(Input.EventType.KEY_UP, this.keyUp, this);
          (_crd && EventCenter === void 0 ? (_reportPossibleCrUseOfEventCenter({
            error: Error()
          }), EventCenter) : EventCenter).instance.on((_crd && GameMessageType === void 0 ? (_reportPossibleCrUseOfGameMessageType({
            error: Error()
          }), GameMessageType) : GameMessageType).S2C_GAME_START.toString(), this.onGetGameStart, this);
          (_crd && EventCenter === void 0 ? (_reportPossibleCrUseOfEventCenter({
            error: Error()
          }), EventCenter) : EventCenter).instance.on((_crd && GameMessageType === void 0 ? (_reportPossibleCrUseOfGameMessageType({
            error: Error()
          }), GameMessageType) : GameMessageType).S2C_OPERATIONS.toString(), this.onGetOperations, this);
          (_crd && EventCenter === void 0 ? (_reportPossibleCrUseOfEventCenter({
            error: Error()
          }), EventCenter) : EventCenter).instance.on((_crd && GameMessageType === void 0 ? (_reportPossibleCrUseOfGameMessageType({
            error: Error()
          }), GameMessageType) : GameMessageType).S2C_UID.toString(), this.onGetUID, this);
        }

        start() {
          this._keyMap.set(KeyCode.KEY_A, false);

          this._keyMap.set(KeyCode.KEY_S, false);

          this._keyMap.set(KeyCode.KEY_D, false);

          this._keyMap.set(KeyCode.KEY_W, false);

          (_crd && WSClient === void 0 ? (_reportPossibleCrUseOfWSClient({
            error: Error()
          }), WSClient) : WSClient).instance.connect();
        }

        update(deltaTime) {
          if (!this.isInGame) {
            return;
          }

          this.sendOp();
        }

        sendOp() {
          var x = 0;
          var y = 0;
          if (this._keyMap.get(KeyCode.KEY_A)) x -= 1;
          if (this._keyMap.get(KeyCode.KEY_S)) y -= 1;
          if (this._keyMap.get(KeyCode.KEY_D)) x += 1;
          if (this._keyMap.get(KeyCode.KEY_W)) y += 1;

          if (x === 0 && y === 0) {
            return;
          }

          var msg = (_crd && MessagePool === void 0 ? (_reportPossibleCrUseOfMessagePool({
            error: Error()
          }), MessagePool) : MessagePool).get(_crd && GameMessageC2S_Operation === void 0 ? (_reportPossibleCrUseOfGameMessageC2S_Operation({
            error: Error()
          }), GameMessageC2S_Operation) : GameMessageC2S_Operation);
          msg.uid = this.uid;
          msg.body.dir.set(x, y);
          (_crd && WSClient === void 0 ? (_reportPossibleCrUseOfWSClient({
            error: Error()
          }), WSClient) : WSClient).instance.send(msg);
          (_crd && MessagePool === void 0 ? (_reportPossibleCrUseOfMessagePool({
            error: Error()
          }), MessagePool) : MessagePool).recycle(msg);
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

        onGetGameStart(msg) {
          msg.uids.forEach((uid, index) => {
            this.addPlayer(uid);
          });
          this.isInGame = true;
        }

        onGetOperations(msg) {
          msg.operations.forEach((operation, index) => {
            var square = this._squares.get(operation.uid);

            square.move(operation.body.dir);
          });
        }

        onGetUID(msg) {
          this.uid = msg.uid;
          this.lbUserID.string = this.uid.toString();
        }

        addPlayer(uid) {
          var square = instantiate(this.squarePrefab).getComponent(_crd && Square === void 0 ? (_reportPossibleCrUseOfSquare({
            error: Error()
          }), Square) : Square);
          square.node.parent = this.node;

          this._squares.set(uid, square);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "squarePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbUserID", [_dec3], {
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
//# sourceMappingURL=277cb1eb5085159769874a14d8492ca88bad6d5b.js.map