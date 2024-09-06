export class TechLevelSetting{
    base = 0;
    variation = 0;
    delta = 0;


    withBase(base: number) {
        this.base = base;
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