import type {TechLevels} from "../../tables/content/other/techLevelTable";

export class TechLevelSetting {
    base: string = "";
    variation: number = 0;
    delta: number = 0;
    baseIndex: number = -1;

    with(baseString: string) {
        this.base = baseString;
        return this;
    }

    withBase(baseIndex: number){
        this.baseIndex = baseIndex;
        return this;
    }

    withVariation(variation: number) {
        this.variation = variation;
        return this;
    }

    withPercentDelta(delta: number) {
        this.delta = delta;
        return this;
    }
}