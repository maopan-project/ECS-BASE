import { SystemType } from "./ECSConfig";
import World from "./World";

export default interface System {
    world: World;
    type: SystemType;
    onUpdate(): void;
}