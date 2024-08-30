import type {TableManager} from "./persist/tableManager";
import {Dice} from "../tables/dice";
import type {CreationResult} from "./creationResult";
import type {Entity} from "./entity";

export abstract class BaseCreator {
    protected tableManager: TableManager;
    protected dice: Dice = new Dice();

    constructor(tableManager: TableManager) {
        this.tableManager = tableManager;
    }

    abstract create(): CreationResult;
    abstract persist(entity: Entity): Promise<void>;

    withDice(dice: Dice){
        this.dice = dice;
        return this;
    }
}