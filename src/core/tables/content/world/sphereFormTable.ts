import {Table} from "../../table";
import {EntryElement} from "../../core/entryElement";

export const sphereForms = [
    new EntryElement("crystalline Lattice Universe")
        .withDescription("realms are interconnected like atoms in a crystal structure. Each \"node\" is a different world, connected by energy pathways that adventurers can traverse."),


]

export const SphereFormTableName = "Sphere form"

export class SphereFormTable extends Table{
    constructor() {
        super();
        this.title = SphereFormTableName;
        this.addFromElements(sphereForms);
    }


}