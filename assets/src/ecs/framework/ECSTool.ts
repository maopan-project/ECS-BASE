import { Component } from "./Component";

export function isContainSubBits(subBits: number, allBits: number): boolean {
    return subBits == (subBits & allBits);
}

export function getComponentsProtoBits(types: { prototype: Component }[]): number {
    let bits = 0;
    types.forEach(type => {
        bits |= type.prototype.type;
    });

    return bits;
}

export function convertComponentTypeIDToIndex(typeID: number): number {
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

export function deepClone(obj: object, result?: object) {
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