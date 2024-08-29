import {Table} from "../../table";

export const prognosis = [
    "excellent",
    "good",
    "fair",
    "poor",
    "grave",
];

export const PrognosisTableName = "Prognosis";

export class PrognosisTable extends Table{
    constructor(){
        super();
        this.title = PrognosisTableName;
        this.addEntriesFromList(prognosis);

    }
}