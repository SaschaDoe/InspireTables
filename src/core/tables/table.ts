import {RollResult} from "./rollResult";
import {Entry} from "./entry";
import {Dice} from "./dice";
import {FunctionEntry} from "./functionEntry";

export class Table {
    values: string[] = [];
    title: string = "";
    entries: Entry[] = [];
    private dice: Dice = new Dice();

    withEntriesFromList(inputs: string[]): Table {
        this.values = inputs;
        for (let input of inputs) {
            this.entries.push(new Entry().withText(input));
        }
        this.sortEntriesAlphabetically();
        return this;
    }

    withValues(values: string[]){
        this.values = values;
        return this;
    }

    withDice(dice: Dice) {
        this.dice = dice;
        return this;
    }

    sortEntriesAlphabetically(): void {
        this.entries.sort((a, b) => a.name.localeCompare(b.name));
    }

    add(entry: Entry): void {
        this.entries.push(entry);
    }

    roll(): RollResult {
        let result = this.dice.roll(0, this.entries.length - 1);
        let entry = this.entries[result];
        let rollResult = new RollResult(entry).withRolledIndex(result);

        for (let part of entry.parts) {
            if (part instanceof Table) {
                let subResult = part.roll();
                rollResult.results.push(subResult);
                rollResult.addEntities(subResult.entities);

            } else if (part instanceof FunctionEntry) {
                let entities = part.costumeFunction(null); // You might want to pass appropriate input here
                rollResult.addEntities(entities);
            }
        }

        return rollResult;
    }
}