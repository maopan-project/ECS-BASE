System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Vector3, Component, ComponentType, TransformComponent, _crd;

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector3", "../../GameType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponent(extras) {
    _reporterNs.report("Component", "../framework/Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "../framework/ECSConfig", _context.meta, extras);
  }

  _export("TransformComponent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Vector3 = _unresolved_2.Vector3;
    }, function (_unresolved_3) {
      Component = _unresolved_3.Component;
    }, function (_unresolved_4) {
      ComponentType = _unresolved_4.ComponentType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15f966Q0TdD66WV9EpZ5YJp", "TransformComponent", undefined);

      _export("TransformComponent", TransformComponent = class TransformComponent extends (_crd && Component === void 0 ? (_reportPossibleCrUseOfComponent({
        error: Error()
      }), Component) : Component) {
        constructor() {
          super(...arguments);
          this.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).TransformComp;
          this.position = new (_crd && Vector3 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector3) : Vector3)();
          this.angle = 0;
          this.needBackup = true;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7c02fa9dbf909ade1b01772995431269c141d58.js.map