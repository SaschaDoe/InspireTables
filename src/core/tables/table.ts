import {RollResult} from "./rollResult";
import {Entry} from "./core/entry/entry";
import {Dice} from "./dice";
import {FunctionEntry} from "./core/entry/functionEntry";
import {EntryList} from "./core/list/entryList";

export class Table {
    title: string = "";
    dice: Dice = new Dice();
    entryList: EntryList = new EntryList();


    get isEvenDistributed() {
        for (let entry of this.entryList.entries) {
            if (entry.setting.probabilityAsWord !== "even" || entry.setting.probabilityInPercent !== 0) {
                console.log(`Table ${this.title} is not even distributed because of entry ${entry.parts[0].input}`);
                return false;
            }
        }
        return true;
    }

    changeGonzo(gonzoFactor: number){
        this.entryList.gonzoFactor = gonzoFactor;
        this.entryList.setProbabilities();
    }

    protected addProbabilityListWithWords(realisticLowTechIllnessAdjectives: [string, string][]) {
        for (let input of realisticLowTechIllnessAdjectives) {
            this.entryList.with(new Entry().withText(input[1]).withProbabilityAsWord(input[0]))
        }
    }

    addEntriesFromList(inputs: string[]): Table {
        this.entryList.withPlainList(inputs);
        return this;
    }

    withDice(dice: Dice) {
        this.dice = dice;
        return this;
    }

    roll(): RollResult {
        if(!this.entryList.isProbabilitySet){
            this.entryList.setProbabilities();
        }

        let result = this.dice.rollIntervalFloat(1, 100);
        let entry = this.entryList.getEntry(result);
        let rollResult = new RollResult(entry).withRolledIndex(result);

        for (let part of entry.parts) {
            let input = part.input;
            if (input instanceof Table) {
                let subResult = input.roll();
                rollResult.results.push(subResult);
                rollResult.addEntities(subResult.entities);
            } else if (input instanceof FunctionEntry) {
                let entities = input.costumeFunction(null); // You might want to pass appropriate input here
                rollResult.addEntities(entities);
            }
        }

        return rollResult;
    }
}