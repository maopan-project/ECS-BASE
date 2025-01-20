System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, KeyCode, Label, CollisionComponent, FireComponent, MoveComponent, NetworkReceiveComponent, TransformComponent, EntityType, World, GameService, EventCenter, Vector3, GameMessageC2S_GameStart, GameMessageC2S_Operation, GameMessageType, MessagePool, WSClient, _dec, _class, _class2, _descriptor, _crd, ccclass, property, GameStart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCollisionComponent(extras) {
    _reporterNs.report("CollisionComponent", "./ecs/components/CollisionComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireComponent(extras) {
    _reporterNs.report("FireComponent", "./ecs/components/FireComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveComponent(extras) {
    _reporterNs.report("MoveComponent", "./ecs/components/MoveComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkReceiveComponent(extras) {
    _reporterNs.report("NetworkReceiveComponent", "./ecs/components/NetworkComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "./ecs/components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityType(extras) {
    _reporterNs.report("EntityType", "./ecs/framework/ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "./ecs/framework/World", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameService(extras) {
    _reporterNs.report("GameService", "./ecs/GameService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventCenter(extras) {
    _reporterNs.report("EventCenter", "./event/EventCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "./GameType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageC2S_GameStart(extras) {
    _reporterNs.report("GameMessageC2S_GameStart", "./network/GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageC2S_Operation(extras) {
    _reporterNs.report("GameMessageC2S_Operation", "./network/GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageS2C_GameStart(extras) {
    _reporterNs.report("GameMessageS2C_GameStart", "./network/GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageS2C_Operations(extras) {
    _reporterNs.report("GameMessageS2C_Operations", "./network/GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageS2C_UID(extras) {
    _reporterNs.report("GameMessageS2C_UID", "./network/GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMessageType(extras) {
    _reporterNs.report("GameMessageType", "./network/GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessagePool(extras) {
    _reporterNs.report("MessagePool", "./network/GameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWSClient(extras) {
    _reporterNs.report("WSClient", "./network/WSClient", _context.meta, extras);
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
      KeyCode = _cc.KeyCode;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      CollisionComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      FireComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      MoveComponent = _unresolved_4.default;
    }, function (_unresolved_5) {
      NetworkReceiveComponent = _unresolved_5.default;
    }, function (_unresolved_6) {
      TransformComponent = _unresolved_6.default;
    }, function (_unresolved_7) {
      EntityType = _unresolved_7.EntityType;
    }, function (_unresolved_8) {
      World = _unresolved_8.default;
    }, function (_unresolved_9) {
      GameService = _unresolved_9.default;
    }, function (_unresolved_10) {
      EventCenter = _unresolved_10.EventCenter;
    }, function (_unresolved_11) {
      Vector3 = _unresolved_11.Vector3;
    }, function (_unresolved_12) {
      GameMessageC2S_GameStart = _unresolved_12.GameMessageC2S_GameStart;
      GameMessageC2S_Operation = _unresolved_12.GameMessageC2S_Operation;
      GameMessageType = _unresolved_12.GameMessageType;
      MessagePool = _unresolved_12.MessagePool;
    }, function (_unresolved_13) {
      WSClient = _unresolved_13.WSClient;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1901wf94FEypmynJHYI58e", "GameStart", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'Input', 'input', 'KeyCode', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameStart", GameStart = (_dec = property(Label), ccclass(_class = (_class2 = class GameStart extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbUserID", _descriptor, this);

          this._keyMap = new Map();
          this.uid = 0;
          this.selfEntityID = 0;
          this.isInGame = false;
          this.lastDir = new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)();
          this.lastIsFire = false;
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

          this._keyMap.set(KeyCode.SPACE, false);

          (_crd && WSClient === void 0 ? (_reportPossibleCrUseOfWSClient({
            error: Error()
          }), WSClient) : WSClient).instance.connect();
        }

        update(deltaTime) {
          if (this.isInGame) {
            (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
              error: Error()
            }), World) : World).instance.cycle();
            this.sendOp();
          }
        }

        sendOp() {
          var x = 0;
          var y = 0;
          if (this._keyMap.get(KeyCode.KEY_A)) x -= 1;
          if (this._keyMap.get(KeyCode.KEY_S)) y -= 1;
          if (this._keyMap.get(KeyCode.KEY_D)) x += 1;
          if (this._keyMap.get(KeyCode.KEY_W)) y += 1;

          var isFire = this._keyMap.get(KeyCode.SPACE);

          if (this.lastDir.x != x || this.lastDir.y != y || isFire != this.lastIsFire) {
            this.lastDir.set(x, y);
            this.lastIsFire = isFire;
            var msg = (_crd && MessagePool === void 0 ? (_reportPossibleCrUseOfMessagePool({
              error: Error()
            }), MessagePool) : MessagePool).get(_crd && GameMessageC2S_Operation === void 0 ? (_reportPossibleCrUseOfGameMessageC2S_Operation({
              error: Error()
            }), GameMessageC2S_Operation) : GameMessageC2S_Operation);
            msg.uid = this.uid;
            msg.entityID = this.selfEntityID;
            msg.body.dir.set(x, y);
            msg.body.isFire = isFire;
            (_crd && WSClient === void 0 ? (_reportPossibleCrUseOfWSClient({
              error: Error()
            }), WSClient) : WSClient).instance.send(msg);
            (_crd && MessagePool === void 0 ? (_reportPossibleCrUseOfMessagePool({
              error: Error()
            }), MessagePool) : MessagePool).recycle(msg);
          }
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
          (_crd && GameService === void 0 ? (_reportPossibleCrUseOfGameService({
            error: Error()
          }), GameService) : GameService).initWorld();
          msg.uids.forEach((uid, index) => {
            this.addPlayer(uid);
          });
          this.lastDir.set(1, 1);
          this.isInGame = true;
          (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance.startCycle();
        }

        onGetOperations(msg) {
          var nrc = (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent);
          nrc.msgToDeal.push(msg);
        }

        onGetUID(msg) {
          this.uid = msg.uid;
          this.lbUserID.string = 'user:' + this.uid.toString();
        }

        addPlayer(uid) {
          console.log('add player', uid);
          var player = (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance.getNewEntity((_crd && EntityType === void 0 ? (_reportPossibleCrUseOfEntityType({
            error: Error()
          }), EntityType) : EntityType).Actor);
          var trans = player.getComponent(_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent);
          var move = player.addComponent(_crd && MoveComponent === void 0 ? (_reportPossibleCrUseOfMoveComponent({
            error: Error()
          }), MoveComponent) : MoveComponent);
          var fire = player.addComponent(_crd && FireComponent === void 0 ? (_reportPossibleCrUseOfFireComponent({
            error: Error()
          }), FireComponent) : FireComponent);
          var collision = player.addComponent(_crd && CollisionComponent === void 0 ? (_reportPossibleCrUseOfCollisionComponent({
            error: Error()
          }), CollisionComponent) : CollisionComponent);
          trans.collisionRadius = 20;
          (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
            error: Error()
          }), World) : World).instance.addEntityToWorld(player);

          if (uid === this.uid) {
            this.selfEntityID = player.id;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbUserID", [_dec], {
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
//# sourceMappingURL=9290bbeaf382eda30312618cd58e55ce50a81df7.js.map