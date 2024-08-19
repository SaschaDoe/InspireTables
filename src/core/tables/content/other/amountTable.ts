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

export class AmountTable extends Table {
    constructor() {
        super();
        this.title = "Amount";
        this.addEntriesFromList(amounts);
    }
}