System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, SystemType, ComponentType, EntityType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa166nSnLhLxq6DEYOaU79Z", "Config", undefined);

      _export("SystemType", SystemType = /*#__PURE__*/function (SystemType) {
        SystemType[SystemType["Network"] = 0] = "Network";
        SystemType[SystemType["Input"] = 1] = "Input";
        SystemType[SystemType["LogicBeforePhysics"] = 2] = "LogicBeforePhysics";
        SystemType[SystemType["Physics"] = 3] = "Physics";
        SystemType[SystemType["LogicAfterPhysics"] = 4] = "LogicAfterPhysics";
        SystemType[SystemType["AfterLogicCycle"] = 5] = "AfterLogicCycle";
        SystemType[SystemType["Backup"] = 6] = "Backup";
        SystemType[SystemType["Render"] = 7] = "Render";
        SystemType[SystemType["AfterCycle"] = 8] = "AfterCycle";
        SystemType[SystemType["End"] = 9] = "End";
        return SystemType;
      }({}));

      _export("ComponentType", ComponentType = /*#__PURE__*/function (ComponentType) {
        ComponentType[ComponentType["Singleton"] = 1] = "Singleton";
        ComponentType[ComponentType["TransformComp"] = 2] = "TransformComp";
        ComponentType[ComponentType["NetworkReceive"] = 4] = "NetworkReceive";
        return ComponentType;
      }({}));

      _export("EntityType", EntityType = /*#__PURE__*/function (EntityType) {
        EntityType[EntityType["Singleton"] = 0] = "Singleton";
        EntityType[EntityType["Actor"] = 1] = "Actor";
        return EntityType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b192a41d35abf5d38a7c2f8b686c7eedd1ef560.js.map