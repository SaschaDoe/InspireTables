import {Entity} from "../entity";
import {AutoDeletableEntity} from "../deletable";

export class Adventure extends AutoDeletableEntity{
    name = "";
    isSelected = false;

    getEntityType(): string {
        return "adventureStore";
    }
}