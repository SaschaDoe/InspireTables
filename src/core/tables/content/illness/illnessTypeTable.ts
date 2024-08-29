import {Table} from "../../table";

export const generalIllnessNames: string[] = [
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

export const IllnessTableName = "Illness Type";

export class IllnessTypeTable extends Table{
    constructor() {
        super();
        this.title = IllnessTableName;
        this.addEntriesFromList(generalIllnessNames);
    }
}