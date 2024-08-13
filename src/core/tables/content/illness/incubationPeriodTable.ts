import { Table } from "../../table";

export const incubationPeriod = [
    "no incubation period",
    "very short (hours)",
    "short (1-3 days)",
    "medium (4-7 days)",
    "long (1-2 weeks)",
    "very long (2-4 weeks)",
    "extremely long (1-6 months)",
    "variable incubation period",
    "multiple incubation phases",
    "lifelong dormancy with sudden onset"
];

export class IncubationPeriodTable extends Table {
    constructor() {
        super();
        this.title = "Incubation Period";
        this.withEntriesFromList(incubationPeriod);
    }
}