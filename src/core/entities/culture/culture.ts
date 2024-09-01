import {AutoDeletableEntity} from "../deletable";

export class Culture extends AutoDeletableEntity{
    name = "";
    derivations: string[] = [];
}