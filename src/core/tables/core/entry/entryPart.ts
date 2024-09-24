import { Table } from "../../table";
import { FunctionEntry } from "./functionEntry";
import type { FunctionFactory } from "./functionFactory";
import {EntryElement} from "../entryElement";

export class EntryPart {
    public input: string | Table | EntryElement| FunctionEntry = "";
    public type: 'Text' | 'Table' | 'EntryElement' | 'FunctionEntry' = 'Text';

    withText(text: string) {
        this.input = text;
        this.type = 'Text';
        return this;
    }

    withTable(table: Table) {
        this.input = table;
        this.type = 'Table';
        return this;
    }

    withFunction(functionEntry: FunctionEntry) {
        this.input = functionEntry;
        this.type = 'FunctionEntry';
        return this;
    }

    static fromJSON(partJson: any, functionFactory: FunctionFactory): EntryPart {
        const part = new EntryPart();

        if (partJson.type === 'Table') {
            part.withTable(Table.fromJSON(partJson.input, functionFactory));
        } else if (partJson.type === 'FunctionEntry') {
            part.withFunction(FunctionEntry.fromJSON(partJson.input, functionFactory));
        } else {
            part.withText(partJson.input);
        }

        return part;
    }

    withElement(element: EntryElement) {
        this.input = element;
        this.type = 'EntryElement';
        return this;
    }
}