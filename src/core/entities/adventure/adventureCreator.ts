import {BaseCreator} from "../baseCreator";
import { CreationResult } from "../creationResult";
import type { Entity } from "../entity";
import {Adventure} from "./adventure";

export class AdventureCreator extends BaseCreator {
    create(): CreationResult {
        let adventure = new Adventure();
        return this.initializeCreation(adventure);
    }
    persist(entity: Entity): Promise<void> {
        throw new Error("Method not implemented.");
    }

}