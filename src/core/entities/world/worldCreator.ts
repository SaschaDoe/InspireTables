import {BaseCreator} from "../baseCreator";
import { CreationResult } from "../creationResult";
import type { Entity } from "../entity";
import {World} from "./world";
import {GenreMix} from "../genre/genreMix";

export class WorldCreator extends BaseCreator {
    private genreMix: GenreMix = new GenreMix();
    async create(): Promise<CreationResult> {
        let creationResult = new CreationResult();
        let world = new World();

        creationResult.addCreation(world);
        return creationResult;
    }
    persist(entity: Entity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    withGenreMix(genreMix: GenreMix) {
        this.genreMix = genreMix;
        return this;
    }
}