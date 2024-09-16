import type { Entity } from "../entity";
import type { StorageStrategy } from "./storageStrategy";
import {IdGenerator} from "./idGenerator";
import {AutoDeletableEntity, type Deletable} from "../deletable";
import {getStore} from "./stores";

type Subscriber<T> = (entities: T[]) => void;

export class EntityStorageManager<T extends Entity & Deletable> {
    private entityType: string;
    private entities: T[] = [];
    private initialized: boolean = false;
    private storageStrategy: StorageStrategy;
    private subscribers: Set<Subscriber<T>> = new Set();

    constructor(entityType: string, storageStrategy: StorageStrategy) {
        this.entityType = entityType;
        this.storageStrategy = storageStrategy;
    }

    async getEntityCount(): Promise<number> {
        await this.initializeStorage();
        return this.entities.length;
    }

    async clear(): Promise<void> {
        await this.initializeStorage();
        this.entities = [];
        await this.saveEntities();
        this.notifySubscribers();
    }

    private async initializeStorage(): Promise<void> {
        if (this.initialized) return;

        try {
            await this.loadEntities();
            this.initialized = true;
        } catch (error) {
            console.warn('Error initializing storage:', error);
            console.log('Initializing with empty array.');
            this.entities = [];
            await this.saveEntities();
            this.initialized = true;
        }
    }

    private getFilePath(): string {
        return `entities/${this.entityType}s.json`;
    }

    private async loadEntities(): Promise<void> {
        const filePath = this.getFilePath();
        const jsonString = await this.storageStrategy.loadFile(filePath);
        if (jsonString.trim() === '') {
            this.entities = [];
        } else {
            console.log("load: ", jsonString);
            this.entities = JSON.parse(jsonString) as T[];
        }
        this.notifySubscribers();
    }

    private async saveEntities(): Promise<void> {
        const filePath = this.getFilePath();
       // console.log(this.entities)
        const jsonString = JSON.stringify(this.entities, null, 2);
       // console.log(jsonString);
        await this.storageStrategy.saveFile(filePath, jsonString);
        this.notifySubscribers();
    }

    async deleteEntity(id: number): Promise<void> {
        await this.initializeStorage();
        const index = this.entities.findIndex(e => e.id === id);
        console.log("Remove ", index);
        if (index !== -1) {
            this.entities.splice(index, 1);
            console.log(`Deleted entity with id ${id}`);
            await this.saveEntities();
        } else {
            //console.log(`Entity with id ${id} not found`);
        }
    }



    convertToStoreName(word: string): string {
        // Convert the first character to lowercase
        const lowercaseWord = word.charAt(0).toLowerCase() + word.slice(1);
        // Append 'Store' to the word
        return `${lowercaseWord}Store`;
    }

    async cascadeDelete(entity: T, shatMore: (type: string) => Promise<EntityStorageManager<AutoDeletableEntity>>): Promise<void> {
        
        const entitiesToDelete = await entity.prepareForDeletion();

        const entitiesByType: { [key: string]: AutoDeletableEntity[] } = {};
        for (const entityToDelete of entitiesToDelete) {
            const type = entityToDelete.entityType;
            if (!entitiesByType[type]) {
                entitiesByType[type] = [];
            }
            entitiesByType[type].push(entityToDelete);
        }
       
        for (const [type, entities] of Object.entries(entitiesByType)) {
            let storeName = this.convertToStoreName(type);
            const typeStore = await getStore(storeName) as EntityStorageManager<any>;
            if(typeStore){
                for (const entityToDelete of entities) {
                    await typeStore.deleteEntity(entityToDelete.id);
                }
            }else{
                console.error("no typeStore defined for", type);
            }

        }

        // Finally, delete the main entity
        await this.deleteEntity(entity.id);
    }


    async getAllEntities(): Promise<T[]> {
        await this.initializeStorage();
        return this.entities || [];
    }

    async getEntity(id: number){
        await this.initializeStorage();
        let entities =  this.entities || [];
        for (const entity of entities) {
            if(entity.id === id){
                return entity;
            }
        }
        return null;
    }

    async saveSpecificEntities(entities: T[]): Promise<void> {
        for (let entity of entities) {
            await this.saveEntity(entity);
        }
    }

    async saveEntity(entity: T): Promise<void> {
        await this.initializeStorage();
        if (entity.id === -1) {
            entity.id = await IdGenerator.generate();
        }
        const index = this.entities.findIndex(e => e.id === entity.id);
        if (index !== -1) {
            this.entities[index] = entity;
        } else {
            this.entities.push(entity);
            //console.log(`Added new entity with id ${entity.id}`);
        }
        await this.saveEntities();
    }

    subscribe(callback: Subscriber<T>): () => void {
        this.subscribers.add(callback);
        return () => this.subscribers.delete(callback);
    }

    private notifySubscribers(): void {
        this.subscribers.forEach(subscriber => subscriber(this.entities));
    }
}