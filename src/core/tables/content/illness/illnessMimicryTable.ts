import { Table } from "../../table";

export const illnessMimicry = [
    "unique symptoms, doesn't mimic other illnesses",
    "slightly resembles common illnesses",
    "often mistaken for a common cold or flu",
    "mimics several common illnesses",
    "presents like a more serious known disease",
    "symptoms match multiple unrelated conditions",
    "mimics a completely different system disorder",
    "presents as a set of seemingly unrelated conditions",
    "mirrors symptoms of a well-known but rare disease",
    "chameleon-like, adapts symptoms to mimic concurrent conditions"
];

export class IllnessMimicryTable extends Table {
    constructor() {
        super();
        this.title = "Illness Mimicry";
        this.addEntriesFromList(illnessMimicry);
    }
}