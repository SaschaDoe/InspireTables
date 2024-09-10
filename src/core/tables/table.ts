import {RollResult} from "./rollResult";
import {Entry} from "./core/entry/entry";
import {Dice} from "./dice";
import {FunctionEntry} from "./core/entry/functionEntry";
import {EntryList} from "./core/list/entryList";
import type {FunctionFactory} from "./core/entry/functionFactory";
import {CreationResult} from "../entities/creationResult";

export class Table {
    title: string = "";
    dice: Dice = new Dice();
    entryList: EntryList = new EntryList();
    subTables: Table[] = [];
    altTables: Table[] = [];

    isSelected = false; //For combobox selection if subtable or the original is selected
    isFavorite = false;

    get isEvenDistributed() {
        for (let entry of this.entryList.entries) {
            if (entry.setting.probabilityAsWord !== "even" || entry.setting.probabilityInPercent !== 0) {
                console.log(`Table ${this.title} is not even distributed because of entry ${entry.parts[0].input}`);
                return false;
            }
        }
        return true;
    }

    withTitle(title: string){
        this.title = title;
        return this;
    }

    changeGonzo(gonzoFactor: number){
        this.entryList.gonzoFactor = gonzoFactor;
        this.entryList.setProbabilities();
    }

    protected addProbabilityListWithWords(probabilityListWithWords: [string, string][]) {
        for (let input of probabilityListWithWords) {
            this.entryList.with(new Entry().withText(input[1]).withProbabilityAsWord(input[0]))
        }
    }

    addProbabilityList(probabilityListWithWords: [string, number][]) {
        for (let input of probabilityListWithWords) {
            this.entryList.with(new Entry().withText(input[0]).withProbability(input[1]))
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

    rollSubTable(): RollResult{
        if(this.isSelected){
            return this.roll();
        }

        for (const subTable of this.subTables) {
            if(subTable.isSelected){
                return subTable.roll();
            }
        }

        return this.roll();
    }

    roll(): RollResult {
        if(!this.entryList.isProbabilitySet){
            this.entryList.setProbabilities();
        }

        let result = this.dice.rollIntervalFloat(1, 100);
        let entry = this.entryList.getEntry(result);
        let rollResult = new RollResult().withEntry(entry).withRolledIndex(result);

        for (let part of entry.parts) {
            let input = part.input;
            if (input instanceof Table) {
                let subResult = input.roll();
                rollResult.results.push(subResult);
                let creationResult = new CreationResult();
                creationResult.addRollResult(subResult);
                rollResult.addCreationResult(creationResult);
            } else if (input instanceof FunctionEntry) {
                let creationResult = input.costumeFunction(null,null); // You might want to pass appropriate input here
                rollResult.addCreationResult(creationResult);
            }
        }

        return rollResult;
    }


static fromJSON(json: any, functionFactory: FunctionFactory): Table {

   const table = new Table();
   table.title = json.title;

   // Create and configure the Dice object
   table.dice = new Dice();
   if (json.dice.numberOfSides) {
       table.dice.withSides(json.dice.numberOfSides);
   }
   if (json.dice.percentage !== undefined) {
       table.dice.withPercentage(json.dice.percentage);
   }

   table.entryList = EntryList.fromJSON(json.entryList, functionFactory);
   table.subTables = json.subTables.map((subTableJson: any) => Table.fromJSON(subTableJson, functionFactory));
   table.isSelected = json.isSelected;
    table.isFavorite = json.isFavorite || false
   console.log("Set Probability again for", table);
   table.entryList.setProbabilities();
   console.log("Probability is set for", table);
   return table;
}

}