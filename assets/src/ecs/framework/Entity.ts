import { Component } from "./Component";
import { EntityType } from "./ECSConfig";
import { convertComponentTypeIDToIndex, deepClone, isContainSubBits } from "./ECSTool";
import World from "./World";

export default class Entity {
    type: EntityType;
    oldBits: number = 0;
    componentsBits: number = 0;
    componentsDirty: boolean = false;
    components: Component[] = [];
    backupComponents: Component[] = [];
    id: number;
    destroyed: boolean = false;

    addComponent<T extends Component>(type: new () => T): T {
        let comp = new type();
        this.components[convertComponentTypeIDToIndex(comp.type)] = comp;
        this.componentsBits |= comp.type;
        return comp;
    }

    getBackupComponent<T extends Component>(type: { prototype: T }): T {
        return this.backupComponents[convertComponentTypeIDToIndex(type.prototype.type)] as T;
    }

    getComponent<T extends Component>(type: { prototype: T }): T {
        return this.components[convertComponentTypeIDToIndex(type.prototype.type)] as T;
    }

    hasComponent<T extends Component>(type: { prototype: T }): boolean {
        return (this.componentsBits & type.prototype.type) != 0;
    }

    removeComponent<T extends Component>(type: { prototype: T }) {
        this.components[convertComponentTypeIDToIndex(type.prototype.type)] = null;
        this.componentsBits &= (~type.prototype.type);
    }

    hasComponentBits(bits: number) {
        return isContainSubBits(bits, this.componentsBits);
    }

    getComponentsByIndexes(indexes: number[]): Component[] {
        let componentArr: Component[] = [];

        indexes.forEach(idx => {
            componentArr.push(this.components[idx]);
        });

        return componentArr;
    }

    markComponentDirty(oldBits: number) {
        if (!this.componentsDirty) {
            this.oldBits = oldBits;
            World.instance.notifyEntityComponentsDirty(this);
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

            this.backupComponents[i] = deepClone(comp, this.backupComponents[i]) as Component;
        }
    }

    markDestroy() {
        if (!this.destroyed) {
            World.instance.notifyEntityDestroyed(this);
            this.destroyed = true;
        }
    }
}