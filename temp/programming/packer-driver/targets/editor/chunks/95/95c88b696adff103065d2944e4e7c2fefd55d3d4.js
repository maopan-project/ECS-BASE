System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, convertComponentTypeIDToIndex, deepClone, isContainSubBits, World, Entity, _crd;

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "./Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityType(extras) {
    _reporterNs.report("EntityType", "./ECSConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertComponentTypeIDToIndex(extras) {
    _reporterNs.report("convertComponentTypeIDToIndex", "./ECSTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeepClone(extras) {
    _reporterNs.report("deepClone", "./ECSTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisContainSubBits(extras) {
    _reporterNs.report("isContainSubBits", "./ECSTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "./World", _context.meta, extras);
  }

  _export("Entity", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      convertComponentTypeIDToIndex = _unresolved_2.convertComponentTypeIDToIndex;
      deepClone = _unresolved_2.deepClone;
      isContainSubBits = _unresolved_2.isContainSubBits;
    }, function (_unresolved_3) {
      World = _unresolved_3.World;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50a9bCHq79Oiq/VICNGxl2A", "Entity", undefined);

      _export("Entity", Entity = class Entity {
        constructor() {
          this.type = void 0;
          this._oldBits = 0;
          this._componentsBits = 0;
          this.componentsDirty = false;
          this.components = [];
          this.backupComponents = [];
          this.id = void 0;
        }

        get oldBits() {
          return this._oldBits;
        }

        get componentsBits() {
          return this._componentsBits;
        }

        addComponent(type) {
          let comp = new type();
          this.components[(_crd && convertComponentTypeIDToIndex === void 0 ? (_reportPossibleCrUseOfconvertComponentTypeIDToIndex({
            error: Error()
          }), convertComponentTypeIDToIndex) : convertComponentTypeIDToIndex)(comp.type)] = comp;
          this._componentsBits |= comp.type;
          return comp;
        }

        getBackupComponent(type) {
          return this.backupComponents[(_crd && convertComponentTypeIDToIndex === void 0 ? (_reportPossibleCrUseOfconvertComponentTypeIDToIndex({
            error: Error()
          }), convertComponentTypeIDToIndex) : convertComponentTypeIDToIndex)(type.prototype.type)];
        }

        getComponent(type) {
          return this.components[(_crd && convertComponentTypeIDToIndex === void 0 ? (_reportPossibleCrUseOfconvertComponentTypeIDToIndex({
            error: Error()
          }), convertComponentTypeIDToIndex) : convertComponentTypeIDToIndex)(type.prototype.type)];
        }

        hasComponent(type) {
          return (this.componentsBits & type.prototype.type) != 0;
        }

        removeComponent(type) {
          this.components[(_crd && convertComponentTypeIDToIndex === void 0 ? (_reportPossibleCrUseOfconvertComponentTypeIDToIndex({
            error: Error()
          }), convertComponentTypeIDToIndex) : convertComponentTypeIDToIndex)(type.prototype.type)] = null;
          this._componentsBits &= ~type.prototype.type;
        }

        hasComponentBits(bits) {
          return (_crd && isContainSubBits === void 0 ? (_reportPossibleCrUseOfisContainSubBits({
            error: Error()
          }), isContainSubBits) : isContainSubBits)(bits, this._componentsBits);
        }

        getComponentsByIndexes(indexes) {
          let componentArr = [];
          indexes.forEach(idx => {
            componentArr.push(this.components[idx]);
          });
          return componentArr;
        }

        markComponentDirty(oldBits) {
          if (!this.componentsDirty) {
            this._oldBits = oldBits;
            (_crd && World === void 0 ? (_reportPossibleCrUseOfWorld({
              error: Error()
            }), World) : World).instance.notifyEntityComponentsDirty(this);
          }
        }

        cancelDirty() {
          this.componentsDirty = false;
        }

        copyComponents() {
          for (let i = 0; i < this.components.length; i++) {
            let comp = this.components[i];

            if (!comp || !comp.needBackup) {
              continue;
            }

            this.backupComponents[i] = (_crd && deepClone === void 0 ? (_reportPossibleCrUseOfdeepClone({
              error: Error()
            }), deepClone) : deepClone)(comp, this.backupComponents[i]);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95c88b696adff103065d2944e4e7c2fefd55d3d4.js.map