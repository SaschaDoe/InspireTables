import {Table} from "../table";

export const cureComplexity = [
    "simple home remedy anyone can administer",
    "over-the-counter treatment with clear instructions",
    "requires prescription and professional monitoring",
    "complex multi-step medical procedure",
    "experimental treatment with unpredictable elements",
    "requires a combination of medical and magical interventions",
    "involves a dangerous ritual or quest",
    "needs a team of specialists working in concert",
    "requires the patient to solve a personal psychological puzzle",
    "involves altering the patient's timeline or alternate realities",
    "necessitates entering the patient's dreamscape",
    "requires synthesizing a unique cure for each patient",
    "involves transforming the patient temporarily into another form",
    "needs precise environmental conditions to be effective"
];

export class CureComplexityTable extends Table {
    constructor() {
        super();
        this.title = "Cure Complexity";
        this.withEntriesFromList(cureComplexity);
    }
}