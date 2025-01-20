System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function isContainSubBits(subBits, allBits) {
    return subBits == (subBits & allBits);
  }

  function getComponentsProtoBits(types) {
    let bits = 0;
    types.forEach(type => {
      bits |= type.prototype.type;
    });
    return bits;
  }

  function convertComponentTypeIDToIndex(typeID) {
    let index = 0;

    if ((typeID & 0xFFFF) == 0) {
      typeID >>= 16;
      index += 16;
    }

    if ((typeID & 0xFF) == 0) {
      typeID >>= 8;
      index += 8;
    }

    if ((typeID & 0xF) == 0) {
      typeID >>= 4;
      index += 4;
    }

    if ((typeID & 0x3) == 0) {
      typeID >>= 2;
      index += 2;
    }

    if ((typeID & 0x1) == 0) {
      index += 1;
    }

    return index;
  }

  function deepClone(obj, result) {
    if (!result) {
      result = Object.create(null);
    }

    if (obj && typeof obj === 'object') {
      for (const key in obj) {
        let val = obj[key];

        if (val && typeof val === 'object') {
          result[key] = deepClone(val);
        } else {
          result[key] = val;
        }
      }

      return result;
    }

    return obj;
  }

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "./Component", _context.meta, extras);
  }

  _export({
    isContainSubBits: isContainSubBits,
    getComponentsProtoBits: getComponentsProtoBits,
    convertComponentTypeIDToIndex: convertComponentTypeIDToIndex,
    deepClone: deepClone
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86778xUm6hOIYavFTa+OJRk", "ECSTool", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e16a9903d8e522982f67e746cf82dab2732277d4.js.map