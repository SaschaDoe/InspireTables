import {Dice} from "../tables/dice";
import type {Entity} from "./entity";

export abstract class Creator {
    dice: Dice = new Dice();

    /**
     * Create a new entity without persisting it.
     * This method should be implemented by derived classes.
     */
    abstract create(): Entity[];

    /**
     * Persist the entity.
     * This method should be implemented by derived classes.
     */
    abstract persist(entity: Entity): Promise<void>;
}