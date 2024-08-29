import {Table} from "../../table";

export const cureSideEffects = [
    "no noticeable side effects",
    "mild discomfort for a short period",
    "temporary loss of a sense (sight, hearing, etc.)",
    "severe pain during treatment, but no lasting effects",
    "causes a different, less severe illness",
    "permanent change in physical appearance",
    "loss of memories related to the illness",
    "temporary personality changes",
    "weakens the immune system for a period",
    "causes rapid aging for a short time",
    "induces a coma-like state during recovery",
    "creates dependency on the treatment",
    "alters genetic makeup slightly",
    "causes prophetic dreams or visions",
    "temporarily grants enhanced abilities"
];

export const CureSideEffectsTableName = "Cure Side Effects";

export class CureSideEffectsTable extends Table {
    constructor() {
        super();
        this.title = CureSideEffectsTableName;
        this.addEntriesFromList(cureSideEffects);
    }
}