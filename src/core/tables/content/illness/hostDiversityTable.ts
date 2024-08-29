import {Table} from "../../table";

export const hostDiversityLevels = [
    "single host species",
    "limited to a specific genus",
    "affects multiple genera within a family",
    "spreads across multiple families in an order",
    "infects hosts from different orders",
    "crosses between major animal groups (e.g., mammals, birds, reptiles)",
    "affects both plants and animals"
];

export const HostDiversityTableName = "Host Diversity";

export class HostDiversityTable extends Table {
    constructor() {
        super();
        this.title = HostDiversityTableName;
        this.addEntriesFromList(hostDiversityLevels);
    }
}