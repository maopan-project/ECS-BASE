System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SingletonComponent, TransformComponent, SystemType, InputSystem, _crd;

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../components/SingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformComponent(extras) {
    _reporterNs.report("TransformComponent", "../components/TransformComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemType(extras) {
    _reporterNs.report("SystemType", "../Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEEntity(extras) {
    _reporterNs.report("EEntity", "../Entity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfESystem(extras) {
    _reporterNs.report("ESystem", "../System", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorld(extras) {
    _reporterNs.report("World", "../World", _context.meta, extras);
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
      SystemType = _unresolved_4.SystemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a616gltyNMtoaOn5gj1Mal", "InputSystem", undefined);

      _export("default", InputSystem = class InputSystem {
        constructor() {
          this.world = void 0;
          this.type = (_crd && SystemType === void 0 ? (_reportPossibleCrUseOfSystemType({
            error: Error()
          }), SystemType) : SystemType).Input;
        }

        onUpdate() {
          let singleton = this.world.getSingletonEntityComponent(_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
            error: Error()
          }), SingletonComponent) : SingletonComponent);

          if (singleton.pressSpace) {
            this.world.forEach([_crd && TransformComponent === void 0 ? (_reportPossibleCrUseOfTransformComponent({
              error: Error()
            }), TransformComponent) : TransformComponent], (entity, transform) => {
              transform.isMove = !transform.isMove;
              transform.isRotate = !transform.isRotate;
            });
            singleton.pressSpace = false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e8d010f0b5d11922ef5396b942585b2ca93aff0.js.map