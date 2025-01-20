System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EntityType, SystemType, Entity, convertComponentTypeIDToIndex, getComponentsProtoBits, isContainSubBits, World, _crd;

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "./Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityType(extras) {
    _reporterNs.report("EntityType", "./Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "./Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntity(extras) {
    _reporterNs.report("Entity", "./Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystem(extras) {
    _reporterNs.report("System", "./System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertComponentTypeIDToIndex(extras) {
    _reporterNs.report("convertComponentTypeIDToIndex", "./Tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetComponentsProtoBits(extras) {
    _reporterNs.report("getComponentsProtoBits", "./Tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisContainSubBits(extras) {
    _reporterNs.report("isContainSubBits", "./Tool", _context.meta, extras);
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
    }, function (_unresolved_3) {
      Entity = _unresolved_3.Entity;
    }, function (_unresolved_4) {
      convertComponentTypeIDToIndex = _unresolved_4.convertComponentTypeIDToIndex;
      getComponentsProtoBits = _unresolved_4.getComponentsProtoBits;
      isContainSubBits = _unresolved_4.isContainSubBits;
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
          this.newEntitiesInThisCycle = [];
          this.systemInCycle = [];
          this.lastLogicRemainTime = 0;
          this.lastFrameUTC = 0;
          this.fixedUpdateInterval = 0;
          this.frameDt = 0;
          this.logicCycleCount = 0;
          this.cycleCount = 0;
          this.worldInCycle = false;
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
        }

        cycle() {
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

            for (var _i = 0; _i < systems.length; _i++) {
              var system = systems[_i];
              system.onUpdate();
              this.updateEntitiesByForEach();
            }
          }

          for (var _i2 = 0; _i2 < logicUpdateCount; _i2++) {
            for (var j = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).LogicBeforePhysics; j < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).Render; j++) {
              var _systems = this.systemInCycle[j];

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

          for (var _i3 = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Render; _i3 < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).End; _i3++) {
            var _systems2 = this.systemInCycle[_i3];

            if (!_systems2) {
              continue;
            }

            for (var _i4 = 0; _i4 < _systems2.length; _i4++) {
              var _system2 = _systems2[_i4];

              _system2.onUpdate();

              this.updateEntitiesByForEach();
            }
          }

          this.updateNewEntitiesByForEach();
          this.logicCycleCount += logicUpdateCount;
          this.cycleCount++;
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

      });

      World._ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7fd0dff9e924eccaac4c7e3424f80d14964aca7b.js.map