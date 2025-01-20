System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, SystemType, ComponentType, EntityType, WorldCycleType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3db7Hce0hOcppP8n5V9/yO", "ECSConfig", undefined);

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
        ComponentType[ComponentType["MoveComponent"] = 8] = "MoveComponent";
        ComponentType[ComponentType["Fire"] = 16] = "Fire";
        ComponentType[ComponentType["Collision"] = 32] = "Collision";
        ComponentType[ComponentType["ActorStatus"] = 64] = "ActorStatus";
        ComponentType[ComponentType["Camp"] = 128] = "Camp";
        ComponentType[ComponentType["Bullet"] = 256] = "Bullet";
        return ComponentType;
      }({}));

      _export("EntityType", EntityType = /*#__PURE__*/function (EntityType) {
        EntityType[EntityType["Singleton"] = 0] = "Singleton";
        EntityType[EntityType["Actor"] = 1] = "Actor";
        EntityType[EntityType["Bullet"] = 2] = "Bullet";
        return EntityType;
      }({}));

      _export("WorldCycleType", WorldCycleType = /*#__PURE__*/function (WorldCycleType) {
        WorldCycleType[WorldCycleType["RealTime"] = 0] = "RealTime";
        WorldCycleType[WorldCycleType["Network"] = 1] = "Network";
        return WorldCycleType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c379684c903a8689bfb49db32ada94dee102091.js.map