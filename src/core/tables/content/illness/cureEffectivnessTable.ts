import {Table} from "../../table";

export const cureEffectiveness = [
    "completely ineffective no matter what you do",
    "marginally effective in rare cases",
    "somewhat effective but with frequent relapses",
    "moderately effective for most patients",
    "highly effective if caught early",
    "only effective if you follow the procedure exactly",
    "effective but requires multiple treatments",
    "unpredictably effective - works great for some, not at all for others",
    "gradually effective over a long period of time",
    "completely cures the illness but leaves lasting side effects",
    "cures the main symptoms but not the underlying cause",
    "more effective when combined with other treatments",
    "effective but the illness often returns after a period of time",
    "nearly always results in a complete cure"
];

export class CureEffectivenessTable extends Table {
    constructor() {
        super();
        this.title = "Cure Effectiveness";
        this.withEntriesFromList(cureEffectiveness);
    }
}