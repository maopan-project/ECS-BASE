System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EntityType, SystemType, EEntity, convertComponentTypeIDToIndex, getComponentsProtoBits, isContainSubBits, World, _crd;

  function _reportPossibleCrUseOfEComponent(extras) {
    _reporterNs.report("EComponent", "./Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityType(extras) {
    _reporterNs.report("EntityType", "./Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "./Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEEntity(extras) {
    _reporterNs.report("EEntity", "./Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfESystem(extras) {
    _reporterNs.report("ESystem", "./System", _context.meta, extras);
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
      EEntity = _unresolved_3.EEntity;
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
          let bits = (_crd && getComponentsProtoBits === void 0 ? (_reportPossibleCrUseOfgetComponentsProtoBits({
            error: Error()
          }), getComponentsProtoBits) : getComponentsProtoBits)(types);

          if (!this.entitiesByForEach.has(bits)) {
            this.onRegisterNewForEach(bits);
          }

          let indexes = [];
          types.forEach(type => {
            indexes.push((_crd && convertComponentTypeIDToIndex === void 0 ? (_reportPossibleCrUseOfconvertComponentTypeIDToIndex({
              error: Error()
            }), convertComponentTypeIDToIndex) : convertComponentTypeIDToIndex)(type.prototype.type));
          });
          let entities = this.entitiesByForEach.get(bits);
          entities.forEach(e => {
            fn(e, ...e.getComponentsByIndexes(indexes));
          });
        }

        onRegisterNewForEach(bits) {
          let entities = new Set();

          for (let i = 0; i < this.allEntities.length; i++) {
            const entity = this.allEntities[i];

            if (entity.hasComponentBits(bits)) {
              entities.add(entity);
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
          let entity = new (_crd && EEntity === void 0 ? (_reportPossibleCrUseOfEEntity({
            error: Error()
          }), EEntity) : EEntity)();
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
          let entity = this.getSingletonEntity();

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
          let currentUTC = Date.now();
          let frameTotalTime = this.getThisFrameTime(currentUTC);
          let logicUpdateCount = Math.floor(frameTotalTime / this.fixedUpdateInterval);
          this.frameDt = currentUTC - this.lastFrameUTC;
          this.lastFrameUTC = currentUTC;
          this.lastLogicRemainTime = frameTotalTime - logicUpdateCount * this.fixedUpdateInterval;

          for (let i = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Network; i < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).LogicBeforePhysics; i++) {
            let systems = this.systemInCycle[i];

            if (!systems) {
              continue;
            }

            for (let i = 0; i < systems.length; i++) {
              let system = systems[i];
              system.onUpdate();
              this.updateEntitiesByForEach();
            }
          }

          for (let i = 0; i < logicUpdateCount; i++) {
            for (let j = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).LogicBeforePhysics; j < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
              error: Error()
            }), SystemType) : SystemType).Render; j++) {
              let systems = this.systemInCycle[j];

              if (!systems) {
                continue;
              }

              for (let k = 0; k < systems.length; k++) {
                let system = systems[k];
                system.onUpdate();
                this.updateEntitiesByForEach();
              }
            }
          }

          for (let i = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Render; i < (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).End; i++) {
            let systems = this.systemInCycle[i];

            if (!systems) {
              continue;
            }

            for (let i = 0; i < systems.length; i++) {
              let system = systems[i];
              system.onUpdate();
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
          for (let i = 0; i < this.entitiesComponentsDirtyInThisCycle.length; i++) {
            let entity = this.entitiesComponentsDirtyInThisCycle[i];
            let oldBits = entity.oldBits;
            let newBits = entity.componentsBits;
            this.entitiesByForEach.forEach((set, bits) => {
              let containOldBits = (_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(bits, oldBits);
              let containNewBits = (_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(bits, newBits);

              if (containOldBits && !containNewBits) {
                set.delete(entity);
              } else if (!containNewBits && containNewBits) {
                set.add(entity);
              }
            });
            entity.cancelDirty();
          }

          this.entitiesComponentsDirtyInThisCycle = [];
        }

        updateNewEntitiesByForEach() {
          for (let i = 0; i < this.newEntitiesInThisCycle.length; i++) {
            let entity = this.newEntitiesInThisCycle[i];
            let newBits = entity.componentsBits;
            this.entitiesByForEach.forEach((set, bits) => {
              if ((_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
                error: Error()
              }), isContainSubBits) : isContainSubBits)(bits, newBits)) {
                set.add(entity);
              }
            });
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
//# sourceMappingURL=226ce5b76de6131e71158af52662af77b7f97df4.js.map