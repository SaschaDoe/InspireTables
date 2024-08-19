import {Table} from "../../table";

export const vectorInvolvementLevels = [
    "direct transmission only, no vectors",
    "primarily direct, occasional vector transmission",
    "equal direct and vector-borne transmission",
    "primarily vector-borne with rare direct transmission",
    "obligate vector transmission",
    "multiple types of vectors involved",
    "complex life cycle involving intermediate hosts and vectors"
];

export class VectorInvolvementTable extends Table {
    constructor() {
        super();
        this.title = "Vector Involvement";
        this.addEntriesFromList(vectorInvolvementLevels);
    }
}