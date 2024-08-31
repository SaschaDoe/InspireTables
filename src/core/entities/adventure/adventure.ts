import {Entity} from "../entity";
import {AutoDeletableEntity} from "../deletable";

export class Adventure extends AutoDeletableEntity{
    name = "";

    getEntityType(): string {
        return "Adventure";
    }
}