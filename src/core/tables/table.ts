import {RollResult} from "./rollResult";
import {Entry} from "./entry";
import {Dice} from "./dice";

export class Table {
    title: string = "";
    entries: Entry[] = [];
    private dice: Dice = new Dice();

    withEntriesFromList(inputs: string[]): Table {
        for (let input of inputs) {
            this.entries.push(new Entry().withText(input));
        }
        this.sortEntriesAlphabetically();
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
        let rollResult = new RollResult(entry);

        for (let part of entry.parts) {
            if (part instanceof Table) {
                rollResult.results.push(part.roll());
            }
        }

        return rollResult;
    }
}