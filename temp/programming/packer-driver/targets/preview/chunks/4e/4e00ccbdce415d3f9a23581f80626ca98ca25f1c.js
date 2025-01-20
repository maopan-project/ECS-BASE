System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EntityType, SystemType, WorldCycleType, Entity, convertComponentTypeIDToIndex, getComponentsProtoBits, isContainSubBits, GameService, NetworkReceiveComponent, World, _crd;

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "./Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityType(extras) {
    _reporterNs.report("EntityType", "./ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "./ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorldCycleType(extras) {
    _reporterNs.report("WorldCycleType", "./ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "./Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "./System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertComponentTypeIDToIndex(extras) {
    _reporterNs.report("convertComponentTypeIDToIndex", "./ECSTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetComponentsProtoBits(extras) {
    _reporterNs.report("getComponentsProtoBits", "./ECSTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisContainSubBits(extras) {
    _reporterNs.report("isContainSubBits", "./ECSTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameService(extras) {
    _reporterNs.report("GameService", "../GameService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkReceiveComponent(extras) {
    _reporterNs.report("NetworkReceiveComponent", "../components/NetworkComponent", _context.meta, extras);
  }

  _export("World", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EntityType = _unresolved_2.EntityType;
      SystemType = _unresolved_2.SystemType;
      WorldCycleType = _unresolved_2.WorldCycleType;
    }, function (_unresolved_3) {
      Entity = _unresolved_3.Entity;
    }, function (_unresolved_4) {
      convertComponentTypeIDToIndex = _unresolved_4.convertComponentTypeIDToIndex;
      getComponentsProtoBits = _unresolved_4.getComponentsProtoBits;
      isContainSubBits = _unresolved_4.isContainSubBits;
    }, function (_unresolved_5) {
      GameService = _unresolved_5.default;
    }, function (_unresolved_6) {
      NetworkReceiveComponent = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e482fFzU99IFZXOklxZnM5b", "World", undefined);

      _export("World", World = class World {
        constructor() {
          this.allEntities = [];
          this.entitiesByForEach = new Map();
          this.entitiesComponentsDirtyInThisCycle = [];
          this.useEntityID = 0;
          this.singletonEntity = null;
          this.netWorkLogicFn = void 0;
          this.cycleType = (_crd && WorldCycleType === void 0 ? (_reportPossibleCrUseOfWorldCycleType({
            error: Error()
          }), WorldCycleType) : WorldCycleType).Network;
          this.newEntitiesInThisCycle = [];
          this.systemInCycle = [];
          this.lastLogicRemainTime = 0;
          this.lastFrameUTC = 0;
          this.networkUpdateInterval = 0;
          this.fixedUpdateInterval = 0;
          this.frameDt = 0;
          this.logicCycleCount = 0;
          this.cycleCount = 0;
          this.worldInCycle = false;
          this.uiLerpValue = 0;
        }

        static get instance() {
          if (!World._ins) {
            World._ins = new World();
          }

          return World._ins;
        }

        forEach(types, fn) {
          var bits = (_crd && getComponentsProtoBits === void 0 ? (_reportPossibleCrUseOfgetComponentsProtoBits({
            error: Error()
          }), getComponentsProtoBits) : getComponentsProtoBits)(types);

          if (!this.entitiesByForEach.has(bits)) {
            this.onRegisterNewForEach(bits);
          }

          var indexes = [];
          types.forEach(type => {
            indexes.push((_crd && convertComponentTypeIDToIndex === void 0 ? (_reportPossibleCrUseOfconvertComponentTypeIDToIndex({
              error: Error()
            }), convertComponentTypeIDToIndex) : convertComponentTypeIDToIndex)(type.prototype.type));
          });
          var entities = this.entitiesByForEach.get(bits);
          entities.forEach(e => {
            fn(e, ...e.getComponentsByIndexes(indexes));
          });
        }

        onRegisterNewForEach(bits) {
          var entities = new Set();

          for (var i = 0; i < this.allEntities.length; i++) {
            var _entity = this.allEntities[i];

            if (_entity.hasComponentBits(bits)) {
              entities.add(_entity);
            }
          }

          this.entitiesByForEach.set(bits, entities);
        }

        addEntityToWorld(entity) {
          this.useEntityID++;
          entity.id = this.useEntityID;
          this.allEntities.push(entity);
          this.newEntitiesInThisCycle.push(entity);
        }

        getEntityByID(entityID) {
          return this.allEntities[entityID - 1];
        }

        getNewEntity(entityType) {
          var entity = new (_crd && Entity === void 0 ? (_reportPossibleCrUseOfEntity({
            error: Error()
          }), Entity) : Entity)();
          entity.type = entityType;
          return entity;
        }

        getSingletonEntity() {
          if (!this.singletonEntity) {
            this.singletonEntity = this.getNewEntity((_crd && EntityType === void 0 ? (_reportPossibleCrUseOfEntityType({
              error: Error()
            }), EntityType) : EntityType).Singleton);
            this.addEntityToWorld(this.singletonEntity);
          }

          return this, this.singletonEntity;
        }

        getSingletonEntityComponent(type) {
          var entity = this.getSingletonEntity();

          if (!entity.hasComponent(type)) {
            entity.addComponent(type);
          }

          return entity.getComponent(type);
        }

        addSystemToCycle(system) {
          system.world = this;

          if (!this.systemInCycle[system.type]) {
            this.systemInCycle[system.type] = [];
          }

          this.systemInCycle[system.type].push(system);
        }

        startCycle() {
          this.lastFrameUTC = Date.now();
          this.worldInCycle = true;
          this.cycleCount = 0;
          this.logicCycleCount = 0;
          this.networkUpdateInterval = 1000 / 15;
          this.fixedUpdateInterval = 1000 / 30;
          this.cycleType = (_crd && WorldCycleType === void 0 ? (_reportPossibleCrUseOfWorldCycleType({
            error: Error()
          }), WorldCycleType) : WorldCycleType).Network;
          this.netWorkLogicFn = (_crd && GameService === void 0 ? (_reportPossibleCrUseOfGameService({
            error: Error()
          }), GameService) : GameService).logicCycleThisCycle;
          this.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent).startTime = Date.now();
        }

        cycle() {
          if (this.cycleType == (_crd && WorldCycleType === void 0 ? (_reportPossibleCrUseOfWorldCycleType({
            error: Error()
          }), WorldCycleType) : WorldCycleType).RealTime) {
            this.cycleWithRealTime();
          } else if (this.cycleType == (_crd && WorldCycleType === void 0 ? (_reportPossibleCrUseOfWorldCycleType({
            error: Error()
          }), WorldCycleType) : WorldCycleType).Network) {
            this.cycleWithNetwork();
          }
        }

        cycleWithRealTime() {
          var currentUTC = Date.now();
          var frameTotalTime = this.getThisFrameTime(currentUTC);
          var logicUpdateCount = Math.floor(frameTotalTime / this.fixedUpdateInterval);
          this.frameDt = currentUTC - this.lastFrameUTC;
          this.lastFrameUTC = currentUTC;
          this.lastLogicRemainTime = frameTotalTime - logicUpdateCount * this.fixedUpdateInterval;

          for (var i = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Network; i < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).LogicBeforePhysics; i++) {
            var systems = this.systemInCycle[i];

            if (!systems) {
              continue;
            }

            for (var j = 0; j < systems.length; j++) {
              var system = systems[j];
              system.onUpdate();
              this.updateEntitiesByForEach();
            }
          }

          for (var _i = 0; _i < logicUpdateCount; _i++) {
            for (var _j = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).LogicBeforePhysics; _j < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).Render; _j++) {
              var _systems = this.systemInCycle[_j];

              if (!_systems) {
                continue;
              }

              for (var k = 0; k < _systems.length; k++) {
                var _system = _systems[k];

                _system.onUpdate();

                this.updateEntitiesByForEach();
              }
            }
          }

          for (var _i2 = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Render; _i2 < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).End; _i2++) {
            var _systems2 = this.systemInCycle[_i2];

            if (!_systems2) {
              continue;
            }

            for (var _j2 = 0; _j2 < _systems2.length; _j2++) {
              var _system2 = _systems2[_j2];

              _system2.onUpdate();

              this.updateEntitiesByForEach();
            }
          }

          this.updateNewEntitiesByForEach();
          this.logicCycleCount += logicUpdateCount;
          this.cycleCount++;
        }

        cycleWithNetwork() {
          var currentUTC = Date.now();
          var frameTotalTime = this.getThisFrameTime(currentUTC);
          var logicUpdateCount = this.netWorkLogicFn();
          this.frameDt = currentUTC - this.lastFrameUTC;
          this.lastFrameUTC = currentUTC;
          this.lastLogicRemainTime = frameTotalTime - logicUpdateCount * this.fixedUpdateInterval;

          for (var i = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Network; i < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).LogicBeforePhysics; i++) {
            var systems = this.systemInCycle[i];

            if (!systems) {
              continue;
            }

            for (var j = 0; j < systems.length; j++) {
              var system = systems[j];
              system.onUpdate();
              this.updateEntitiesByForEach();
            }
          }

          for (var _i3 = 0; _i3 < logicUpdateCount; _i3++) {
            this.logicCycleCount++;
            this.backupEntityComponents();

            for (var _j3 = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).LogicBeforePhysics; _j3 < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).Render; _j3++) {
              var _systems3 = this.systemInCycle[_j3];

              if (!_systems3) {
                continue;
              }

              for (var k = 0; k < _systems3.length; k++) {
                var _system3 = _systems3[k];

                _system3.onUpdate();

                this.updateEntitiesByForEach();
              }
            }
          }

          var lastFrameTime = this.getSingletonEntityComponent(_crd && NetworkReceiveComponent === void 0 ? (_reportPossibleCrUseOfNetworkReceiveComponent({
            error: Error()
          }), NetworkReceiveComponent) : NetworkReceiveComponent).startTime + (this.logicCycleCount - 1) * this.fixedUpdateInterval;
          this.updateUILerpValue(lastFrameTime);

          if (this.logicCycleCount >= 1) {
            for (var _i4 = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).Render; _i4 < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).End; _i4++) {
              var _systems4 = this.systemInCycle[_i4];

              if (!_systems4) {
                continue;
              }

              for (var _j4 = 0; _j4 < _systems4.length; _j4++) {
                var _system4 = _systems4[_j4];

                _system4.onUpdate();

                this.updateEntitiesByForEach();
              }
            }
          }

          this.updateNewEntitiesByForEach();
          this.cycleCount++;
        }

        updateUILerpValue(lastFrameTime) {
          var value = (Date.now() - lastFrameTime) / this.fixedUpdateInterval;
          this.uiLerpValue = Math.min(value, 2); // 最大取到2倍
        }

        getThisFrameTime(currentTime) {
          return this.lastLogicRemainTime + currentTime - this.lastFrameUTC;
        }

        updateEntitiesByForEach() {
          var _this = this;

          var _loop = function _loop() {
            var entity = _this.entitiesComponentsDirtyInThisCycle[i];
            var oldBits = entity.oldBits;
            var newBits = entity.componentsBits;

            _this.entitiesByForEach.forEach((set, bits) => {
              var containOldBits = (_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(bits, oldBits);
              var containNewBits = (_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(bits, newBits);

              if (containOldBits && !containNewBits) {
                set.delete(entity);
              } else if (!containNewBits && containNewBits) {
                set.add(entity);
              }
            });

            entity.cancelDirty();
          };

          for (var i = 0; i < this.entitiesComponentsDirtyInThisCycle.length; i++) {
            _loop();
          }

          this.entitiesComponentsDirtyInThisCycle = [];
        }

        updateNewEntitiesByForEach() {
          var _this2 = this;

          var _loop2 = function _loop2() {
            var entity = _this2.newEntitiesInThisCycle[i];
            var newBits = entity.componentsBits;

            _this2.entitiesByForEach.forEach((set, bits) => {
              if ((_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(bits, newBits)) {
                set.add(entity);
              }
            });
          };

          for (var i = 0; i < this.newEntitiesInThisCycle.length; i++) {
            _loop2();
          }

          this.newEntitiesInThisCycle = [];
        }

        notfiyEntityComponentsDirty(entity) {
          this.entitiesComponentsDirtyInThisCycle.push(entity);
        }

        backupEntityComponents() {
          for (var i = 0; i < this.allEntities.length; i++) {
            var _entity2 = this.allEntities[i];

            _entity2.copyComponents();
          }
        }

      });

      World._ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e00ccbdce415d3f9a23581f80626ca98ca25f1c.js.map