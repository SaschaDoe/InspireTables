import {BaseCreator} from "../baseCreator";
import type { CreationResult } from "../creationResult";
import type { Entity } from "../entity";

export class AdventureCreator extends BaseCreator {
    create(): CreationResult {
        throw new Error("Method not implemented.");
    }
    persist(entity: Entity): Promise<void> {
        throw new Error("Method not implemented.");
    }

}