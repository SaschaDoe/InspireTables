import { Table } from "./table";
import { FunctionEntry } from "./functionEntry";

export class Entry {
    name: string = "";
    parts: (string | Table | FunctionEntry)[] = [];

    withText(text: string): Entry {
        this.parts.push(text);
        return this;
    }

    withTable(table: Table): Entry {
        this.parts.push(table);
        return this;
    }

    get DescriptionText(): string {
        return this.parts.map(part => {
            if (part instanceof Table) {
                return `{${part.title}}`;
            } else if (part instanceof FunctionEntry) {
                return `{${part.description}}`;
            } else {
                return part;
            }
        }).join('');
    }

    withFunction(functionEntry: FunctionEntry): Entry {
        this.parts.push(functionEntry);
        return this;
    }
}
