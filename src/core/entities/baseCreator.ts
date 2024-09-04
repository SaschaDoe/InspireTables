import type {TableManager} from "./persist/tableManager";
import {Dice} from "../tables/dice";
import {CreationResult} from "./creationResult";
import type {Entity} from "./entity";
import {getStore} from "./persist/stores";
import {get} from "svelte/store";
import {IdGenerator} from "./persist/idGenerator";

export abstract class BaseCreator {
    protected tableManager: TableManager;
    protected dice: Dice = new Dice();

    constructor(tableManager: TableManager) {
        this.tableManager = tableManager;
    }

    protected async setId(entity: Entity){
        entity.id = await IdGenerator.generate();
        console.log("Id after saving: ",  entity.id );
    }

    abstract create(): Promise<CreationResult>;
    abstract persist(entity: Entity): Promise<void>;

    withDice(dice: Dice){
        this.dice = dice;
        return this;
    }

    protected initializeCreation<T extends Entity>(entity: T): CreationResult {
        const creationResult = new CreationResult();
        creationResult.addCreation(entity);
        return creationResult;
    }
}