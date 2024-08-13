import {Culture} from "./culture";
import {Dice} from "../../tables/dice";
import {CultureNameTable} from "../../tables/content/culture/cultureNameTable";

export class CultureCreator{
    private dice: Dice = new Dice();
    
    create(){
        const culture = new Culture();
        //TODO add differentiation of custom culture and culture from table
        culture.name = "TODO"
        let firstDerivation = new CultureNameTable().withDice(this.dice).roll().combinedString;
        culture.derivations.push(firstDerivation)
        let hasMultipleDerivations = this.dice.getRandom() > 0.5;
        let secondDerivation = "";
        if(hasMultipleDerivations){
            do{
                secondDerivation = new CultureNameTable().withDice(this.dice).roll().combinedString;
            }while(secondDerivation === firstDerivation)
            culture.derivations.push(secondDerivation);
        }

        return culture;
    }
}