System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SingletonComponent, TransformComponent, ComponentType, GameService, _crd;

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "./components/SingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "./components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentType(extras) {
    _reporterNs.report("ComponentType", "./framework/Config", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      TransformComponent = _unresolved_3.TransformComponent;
    }, function (_unresolved_4) {
      ComponentType = _unresolved_4.ComponentType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "335eaBcTpVNGLH8uzxUn3N/", "GameService", undefined);

      _export("default", GameService = class GameService {
        static initWorld() {
          (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
            error: Error()
          }), SingletonComponent) : SingletonComponent).prototype.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).Singleton;
          (_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
            error: Error()
          }), TransformComponent) : TransformComponent).prototype.type = (_crd && ComponentType === void 0 ? (_reportPossibleCrUseOfComponentType({
            error: Error()
          }), ComponentType) : ComponentType).TransformComp;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b76b4e18fa9e51c1d89d57a7dc9451a35ad03584.js.map