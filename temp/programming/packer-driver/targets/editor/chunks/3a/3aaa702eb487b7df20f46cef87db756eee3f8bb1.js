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

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "./Component", _context.meta, extras);
  }

  _export({
    isContainSubBits: isContainSubBits,
    getComponentsProtoBits: getComponentsProtoBits,
    convertComponentTypeIDToIndex: convertComponentTypeIDToIndex
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a405uSM7BDxbz8C8baRynU", "Tool", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3aaa702eb487b7df20f46cef87db756eee3f8bb1.js.map