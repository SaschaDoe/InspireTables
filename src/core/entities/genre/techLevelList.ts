
import { TechLevelSetting } from "./techLevelSetting";

export class TechLevelList {
    techLevelsWithProbabilities: [string, number][] = [];
    techLevelSettings: TechLevelSetting[] = [];

    constructor() {
        // You can initialize techLevelsWithProbabilities here or via a method like `withTechLevels`
    }

    getTechLevelsWithProbabilities(): [string,number][] {
        let rest = 100;
        let touchedIds: number[] = [];
        let untouchedTotalProbability = 0;

        // Step 1: Set new probabilities with deltas
        for (let i = 0; i < this.techLevelsWithProbabilities.length; i++) {
            const techLevelsWithProbability = this.techLevelsWithProbabilities[i];
            let hasSetting = false;

            for (let n = 0; n < this.techLevelSettings.length; n++) {
                const setting = this.techLevelSettings[n];

                if(setting.baseIndex > -1){
                    if (i === setting.baseIndex) {
                        const delta = setting.delta;
                        techLevelsWithProbability[1] += delta;
                        rest -= techLevelsWithProbability[1]; // Subtract the adjusted probability from rest
                        hasSetting = true;
                        touchedIds.push(i);
                        break;
                    }
                }else{
                    if (techLevelsWithProbability[0] === setting.base) {
                        // Apply delta to the probability of the matching tech level
                        const delta = setting.delta;
                        techLevelsWithProbability[1] = techLevelsWithProbability[1] + delta;
                        rest -= techLevelsWithProbability[1]; // Subtract the adjusted probability from rest
                        hasSetting = true;
                        touchedIds.push(i);
                        break;
                    }
                }


            }

            if (!hasSetting) {
                // Sum the untouched probabilities
                untouchedTotalProbability += techLevelsWithProbability[1];
            }
        }

        // Step 2: Distribute the remaining "rest" proportionally to untouched probabilities
        for (let i = 0; i < this.techLevelsWithProbabilities.length; i++) {
            if (!touchedIds.includes(i)) {
                const techLevelsWithProbability = this.techLevelsWithProbabilities[i];
                // Calculate the proportional share of the rest for this untouched tech level
                const proportionalRest = (techLevelsWithProbability[1] / untouchedTotalProbability) * rest;
                if (proportionalRest < 0) {
                    throw new Error("Proportional rest is under 0");
                }
                techLevelsWithProbability[1] = proportionalRest; // Assign the proportional rest to the untouched probability
            }
        }

        return this.techLevelsWithProbabilities;
    }

    withTechLevels(techLevelsWithProbabilities: [string, number][]) {
        this.techLevelsWithProbabilities = techLevelsWithProbabilities.map(([name, probability]) => [name, probability]);
        return this;
    }

    withSetting(techLevelSetting: TechLevelSetting) {
        this.techLevelSettings.push(techLevelSetting);
        return this;
    }
}
