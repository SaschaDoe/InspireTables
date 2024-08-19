import {Table} from "../../table";

export const environmentalResilience = [
    "dies immediately outside host",
    "survives minutes outside host",
    "survives hours outside host",
    "survives days outside host",
    "survives weeks outside host",
    "survives months outside host",
    "survives years outside host",
    "can lay dormant indefinitely",
    "thrives and replicates outside host"
];

export class EnvironmentalResilienceTable extends Table{
    constructor() {
        super();
        this.title = "Environmental Resilience";
        this.addEntriesFromList(environmentalResilience);
    }
}