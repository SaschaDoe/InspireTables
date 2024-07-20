import {Entry} from "./entry";

export class Table {
    title: string = "";
    entries: Entry[] = [];

    withEntriesFromList(inputs: string[]): Table {
        for (let input of inputs) {
            this.entries.push(new Entry().withText(input));
        }
        this.sortEntriesAlphabetically();
        return this;
    }

    sortEntriesAlphabetically(): void {
        this.entries.sort((a, b) => a.name.localeCompare(b.name));
    }

    add(entry: Entry): void{
        this.entries.push(entry);
    }
}