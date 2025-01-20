import { SystemType } from "../framework/ECSConfig";
import System from "../framework/System";
import World from "../framework/World";

export default class InputSystem implements System {
    world: World = null;
    type: SystemType = SystemType.Input;

    onUpdate(): void {

    }

}