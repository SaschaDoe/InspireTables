import { Dice } from "../tables/dice";
import type { Entity } from "./entity";

export interface CreatedEntities {
    [key: string]: Entity[];
}

export abstract class Creator {
    dice: Dice = new Dice();

    /**
     * Create new entities without persisting them.
     * This method should be implemented by derived classes.
     */
    abstract create(): CreatedEntities;

    /**
     * Persist the entities.
     * This method should be implemented by derived classes.
     */
    abstract persist(entities: CreatedEntities): Promise<void>;

    /**
     * Get the entity type this creator is responsible for.
     * This method should be implemented by derived classes.
     */
    abstract getEntityType(): string;
}