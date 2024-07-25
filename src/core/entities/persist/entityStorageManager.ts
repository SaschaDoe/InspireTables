import { invoke } from '@tauri-apps/api/tauri';
import type { Entity } from "../entity";
import type {StorageStrategy} from "./storageStrategy";
import type {PrivateKeyInput} from "node:crypto";
import {idGenerator} from "./stores";

export class EntityStorageManager<T extends Entity> {
    private entityType: string;
    private entities: T[] = [];
    private initialized: boolean = false;
    private storageStrategy: StorageStrategy;

    constructor(entityType: string, storageStrategy: StorageStrategy) {
        this.entityType = entityType;
        this.storageStrategy = storageStrategy;
    }

    async clear(): Promise<void> {
        await this.initializeStorage();
        this.entities = [];
        await this.saveEntities();
        console.log(`Cleared all entities for ${this.entityType}`);
    }

    private async initializeStorage(): Promise<void> {
        if (this.initialized) return;

        try {
            await this.loadEntities();
            console.log(`Storage initialized for ${this.entityType}`);
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
            this.entities = JSON.parse(jsonString) as T[];
        }
        console.log(`Loaded ${this.entities.length} entities from ${filePath}`);
    }

    private async saveEntities(): Promise<void> {
        const filePath = this.getFilePath();
        const jsonString = JSON.stringify(this.entities, null, 2);
        await this.storageStrategy.saveFile(filePath, jsonString);
        console.log(`Saved ${this.entities.length} entities to ${filePath}`);
    }

    async getAllEntities(): Promise<T[]> {
        await this.initializeStorage();
        return this.entities || [];
    }

    async saveSpecificEntities(entities: T[]): Promise<void>{
        for(let entity of entities) {
            await this.saveEntity(entity);
        }
    }

    async saveEntity(entity: T): Promise<void> {
        await this.initializeStorage();
        if (entity.id === -1) {
            entity.id = await idGenerator.generateId();
        }
        const index = this.entities.findIndex(e => e.id === entity.id);
        if (index !== -1) {
            this.entities[index] = entity;
            console.log(`Updated entity with id ${entity.id}`);
        } else {
            this.entities.push(entity);
            console.log(`Added new entity with id ${entity.id}`);
        }
        await this.saveEntities();
    }
}