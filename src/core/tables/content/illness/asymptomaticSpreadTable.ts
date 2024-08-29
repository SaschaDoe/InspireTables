import {Table} from "../../table";

export const asymptomaticSpread = [
    "no asymptomatic spread",
    "rare asymptomatic spread",
    "occasional asymptomatic spread",
    "common asymptomatic spread",
    "majority of spread is asymptomatic",
    "always spreads asymptomatically",
    "asymptomatic carriers are super-spreaders"
];

export const AsymptomaticSpreadTableName = "Asymptomatic Spread";

export class AsymptomaticSpreadTable extends Table{
    constructor() {
        super();
        this.title = AsymptomaticSpreadTableName;
        this.addEntriesFromList(asymptomaticSpread);
    }
}