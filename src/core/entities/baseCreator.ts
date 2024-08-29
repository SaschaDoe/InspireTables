import type {TableManager} from "./persist/tableManager";
import {Dice} from "../tables/dice";
import type {CreationResult} from "./creationResult";

export abstract class BaseCreator<T> {
    protected tableManager: TableManager;
    protected dice: Dice = new Dice();

    constructor(tableManager: TableManager) {
        this.tableManager = tableManager;
    }

    abstract create(): CreationResult;
    abstract persist(entity: T): Promise<void>;

    withDice(dice: Dice){
        this.dice = dice;
        return this;
    }
}