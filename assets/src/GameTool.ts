import { Sprite, SpriteFrame, v3 } from "cc";

export default class GameTool {

    static pForAngle(radians: number) {
        return v3(Math.cos(radians), Math.sin(radians), 0);
    }

    static prefabAnimFrame(sprite: Sprite, sf: SpriteFrame[], percent: number) {
        sprite.spriteFrame = sf[Math.floor(sf.length * percent)];
        return sprite.spriteFrame;
    }

    static radomSeed = 2421;

    static radom(min: number, max: number) {
        this.radomSeed = (this.radomSeed * 2403 + 42143) % 233;
        let rnd = this.radomSeed / 223.0;
        return min + rnd * (max - min);
    }
}