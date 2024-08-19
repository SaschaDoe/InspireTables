import {Table} from "../../table";

export const prognosis = [
    "excellent",
    "good",
    "fair",
    "poor",
    "grave",
];

export class PrognosisTable extends Table{
    constructor(){
        super();
        this.title = "Prognosis"
        this.addEntriesFromList(prognosis);

    }
}