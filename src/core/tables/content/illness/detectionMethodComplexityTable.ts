import { Table } from "../../table";

export const detectionMethodComplexity = [
    "visible to the naked eye",
    "detectable with basic physical examination",
    "requires standard blood tests",
    "needs specific antibody tests",
    "requires advanced imaging (MRI, CT scan)",
    "only detectable with genetic testing",
    "requires a combination of multiple tests",
    "needs specialized equipment only found in advanced facilities",
    "detectable only during specific phases or conditions",
    "requires experimental or cutting-edge detection methods"
];

export class DetectionMethodComplexityTable extends Table {
    constructor() {
        super();
        this.title = "Detection Method Complexity";
        this.addEntriesFromList(detectionMethodComplexity);
    }
}