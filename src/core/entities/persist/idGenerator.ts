import type {ValueStorageManager} from "./valueStorageManager";
import {getStore} from "./stores";


export class IdGenerator {
    private static lastIdStore: ValueStorageManager<number> | null = null;

    private static async getLastIdStore() {
        if (!this.lastIdStore) {
            this.lastIdStore = await getStore('lastIdStore');
        }
        return this.lastIdStore;
    }

    static async generate(): Promise<number> {
        const lastIdStore = await this.getLastIdStore();
        let lastId = await lastIdStore.getValue() ?? 0;
        lastId++;
        await lastIdStore.setValue(lastId);
        return lastId;
    }
}