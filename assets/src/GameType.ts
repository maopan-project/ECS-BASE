import { Vec3 } from "cc";

export class Vector3 {
    x: number = 0;
    y: number = 0;
    z: number = 0;

    get length() {
        return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** (1 / 2);
    }

    set(v3: Vector3 | Vec3): void;

    set(a?: number, b?: number, c?: number): void;

    set() {
        if (arguments[0] instanceof Vector3 || arguments[0] instanceof Vec3) {
            this.x = arguments[0].x;
            this.y = arguments[0].y;
            this.z = arguments[0].z;

        } else {

            if (arguments[0] !== undefined) {
                this.x = arguments[0];
            }

            if (arguments[1] !== undefined) {
                this.y = arguments[1];
            }

            if (arguments[2] !== undefined) {
                this.z = arguments[2];
            }

        }
    }

    add(vec3: Vector3) {
        this.x += vec3.x;
        this.y += vec3.y;
        this.z += vec3.z;

    }

    multiply(val: number) {
        this.x *= val;
        this.y *= val;
        this.z *= val;
    }

    resetToZero() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    equal(out: Vector3, fixed: number = 1e-3) {
        let offsetX = Math.abs(out.x - this.x) - fixed;
        let offsetY = Math.abs(out.y - this.y) - fixed;
        let offsetZ = Math.abs(out.z - this.z) - fixed;

        return offsetX < 0 && offsetY < 0 && offsetZ < 0;
    }

    distanceSquared(other: Vector3) {
        return (this.x - other.x) ** 2
            + (this.y - other.y) ** 2
            + (this.z - this.z) ** 2;
    }
}
