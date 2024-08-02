import {techLevels, TechLevelTable} from "../../tables/other/techLevelTable";
import {realisms, RealismTable} from "../../tables/other/realismTable";
import {Dice} from "../../tables/dice";
import {probabilities} from "../../tables/other/probabilityTable";
import {
    RealisticLessProbableLowTechIllnessAdjectiveTable
} from "../../tables/illness/adjective/realisticLessProbableLowTechIllnessAdjectiveTable";
import {
    RealisticLessProbableHighTechIllnessAdjectiveTable
} from "../../tables/illness/adjective/realisticLessProbableHighTechIllnessAdjectiveTable";
import {
    RealisticProbableHighTechIllnessAdjectiveTable
} from "../../tables/illness/adjective/realisticProbableHighTechIllnessAdjectiveTable";
import {
    RealisticProbableLowTechIllnessAdjectiveTable
} from "../../tables/illness/adjective/realisticProbableLowTechIllnessAdjectiveTable";
import {
    UnrealisticLessProbableHighTechIllnessAdjectiveTable
} from "../../tables/illness/adjective/unrealisticLessProbableHighTechIllnessAdjectiveTable";
import {
    UnrealisticLessProbableLowTechIllnessAdjectiveTable
} from "../../tables/illness/adjective/unrealisticLessProbableLowTechIllnessAdjectiveTable";
import {
    UnrealisticProbableHighTechIllnessAdjectiveTable
} from "../../tables/illness/adjective/unrealisticProbableHighTechIllnessAdjectiveTable";
import {
    UnrealisticProbableLowTechIllnessAdjectiveTable
} from "../../tables/illness/adjective/unrealisticProbableLowTechIllnessAdjectiveTable";

export class IllnessAdjectiveGenerator{
    private dice = new Dice();
    generate(){
        let techLevel = new TechLevelTable().withDice(this.dice).roll().combinedString;
        let techLevelIndex = techLevels.indexOf(techLevel);

        let adjectiveProbability = this.dice.getRandom();

        let realism = new RealismTable().withDice(this.dice).roll().combinedString;
        let realismIndex = realisms.indexOf(realism);

        if(realismIndex > 2  &&  adjectiveProbability > 0.9 && techLevelIndex >= 10){
            return new RealisticLessProbableHighTechIllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
        }
        if(realismIndex > 2  &&  adjectiveProbability > 0.9 && techLevelIndex < 10){
            return new RealisticLessProbableLowTechIllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
        }
        if(realismIndex > 2  &&  adjectiveProbability <= 0.9 && techLevelIndex >= 10){
            return new RealisticProbableHighTechIllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
        }
        if(realismIndex > 2  &&  adjectiveProbability <= 0.9 && techLevelIndex < 10){
            return new RealisticProbableLowTechIllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
        }

        if(realismIndex <= 2  &&  adjectiveProbability > 0.9 && techLevelIndex >= 10){
            return new UnrealisticLessProbableHighTechIllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
        }
        if(realismIndex <= 2  &&  adjectiveProbability > 0.9 && techLevelIndex < 10){
            return new UnrealisticLessProbableLowTechIllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
        }
        if(realismIndex <= 2  &&  adjectiveProbability <= 0.9 && techLevelIndex >= 10){
            return new UnrealisticProbableHighTechIllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
        }

        return new UnrealisticProbableLowTechIllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
    }

    withDice(dice: Dice){
        this.dice = dice;
        return this;
    }
}