import { Table } from "../../table";

export const symptomConsistency = [
    "always presents the same symptoms",
    "highly consistent symptoms",
    "mostly consistent symptoms",
    "somewhat variable symptoms",
    "highly variable symptoms",
    "different symptoms in different populations",
    "symptoms that change over time",
    "symptoms that appear and disappear randomly",
    "symptoms that vary based on environmental factors",
    "no consistent pattern of symptoms"
];

export const SymptomConsistencyTableName = "Symptom Consistency";

export class SymptomConsistencyTable extends Table {
    constructor() {
        super();
        this.title = SymptomConsistencyTableName;
        this.addEntriesFromList(symptomConsistency);
    }
}