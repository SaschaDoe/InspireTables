import {Table} from "../table";

const generalIllnessNames: string[] = [
    "fever",
    "plague",
    "epidemic",
    "pandemic",
    "infection",
    "sickness",
    "disease",
    "malady",
    "affliction",
    "syndrome",
    "disorder",
    "pestilence",
    "contagion",
    "virus",
    "blight",
    "scourge",
    "infestation"
];

export class IllnessTypeTable extends Table{
    constructor() {
        super();
        this.title = "Illness Type";
        this.withEntriesFromList(generalIllnessNames);
    }
}