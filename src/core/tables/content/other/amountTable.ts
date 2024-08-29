import {Table} from "../../table";

export const amounts = [
    "all",
    "huge",
    "large",
    "medium",
    "small",
    "tiny",
    "nothing"
]

export const AmountTableName = "Amount";

export class AmountTable extends Table {
    constructor() {
        super();
        this.title = AmountTableName;
        this.addEntriesFromList(amounts);
    }
}