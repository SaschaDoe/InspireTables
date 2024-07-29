import { Table } from "../table";

export const symptomObviousness = [
    "unmistakable symptoms",
    "very clear symptoms",
    "noticeable symptoms",
    "subtle symptoms",
    "very subtle symptoms",
    "nearly imperceptible symptoms",
    "symptoms easily confused with common ailments",
    "symptoms only detectable with specific tests",
    "symptoms that appear unrelated to each other",
    "symptoms that seem to contradict each other"
];

export class SymptomObviousnessTable extends Table {
    constructor() {
        super();
        this.title = "Symptom Obviousness";
        this.withEntriesFromList(symptomObviousness);
    }
}