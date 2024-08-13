import {EntrySetting} from "../../entrySetting";
import {Table} from "../../table";
import {FunctionEntry} from "./functionEntry";

export class EntryPart{
    input: (string | Table | FunctionEntry) = "";

    withText(text: string) {
        this.input = text;
        return this;
    }

    withTable(table: Table) {
        this.input = table;
        return this;
    }

    withFunction(functionEntry: FunctionEntry) {
        this.input = functionEntry;
        return this;
    }
}