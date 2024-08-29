import {Table} from "../../table";

export const crossSpeciesTransmissionLevels = [
    "single species only",
    "two closely related species",
    "multiple species within same family",
    "species across different families",
    "cross-order transmission",
    "cross-class transmission (e.g., mammals to birds)",
    "cross-phylum transmission"
];

export const CrossSpeciesTransmissionTableName = "Cross-Species Transmission";

export class CrossSpeciesTransmissionTable extends Table {
    constructor() {
        super();
        this.title = CrossSpeciesTransmissionTableName;
        this.addEntriesFromList(crossSpeciesTransmissionLevels);
    }
}