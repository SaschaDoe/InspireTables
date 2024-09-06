import type {TechLevelSetting} from "./techLevelSetting";
import {techLevelsWithProbabilities} from "../../tables/content/other/techLevelTable";

export class TechLevelList{
    techLevelsWithProbabilities: [string, number][] = [];
    techLevelSettings: TechLevelSetting[] = [];

    getTechLevelsWithProbabilities() {
        let rest = 100
        let counter = 0;
        let probabilitiesWithoutSetting = this.techLevelsWithProbabilities.length-this.techLevelSettings.length;
        for (let i = 0; i < this.techLevelsWithProbabilities.length; i++){
            const techLevelsWithProbability = this.techLevelsWithProbabilities[i];
            for(let n = 0; n < this.techLevelSettings.length; n++){
                if(i == this.techLevelSettings[n].base){
                    rest -= techLevelsWithProbability[1] + this.techLevelSettings[n].delta;
                }
            }


        }

        for (let i = 0; i < this.techLevelsWithProbabilities.length; i++){
            const techLevelsWithProbability = this.techLevelsWithProbabilities[i];
            let hasSetting = false;
            for(let n = 0; n < this.techLevelSettings.length; n++){
                if(i === this.techLevelSettings[n].base){
                    if(probabilitiesWithoutSetting !== 0){
                        rest = rest/probabilitiesWithoutSetting;
                    }
                    techLevelsWithProbability[1] = techLevelsWithProbability[1] + this.techLevelSettings[n].delta;
                    hasSetting = true;
                    break;
                }
            }
            if(!hasSetting){
                techLevelsWithProbability[1] = rest;
            }

        }
        return this.techLevelsWithProbabilities;
    }

    withTechLevels(techLevelsWithProbabilities: [string, number][]) {
        // Create a deep copy of the tech levels array
        this.techLevelsWithProbabilities = techLevelsWithProbabilities.map(([name, probability]) => [name, probability]);
        return this;
    }

    withSetting(techLevelSetting: TechLevelSetting){
        this.techLevelSettings.push(techLevelSetting);
        return this;
    }

}