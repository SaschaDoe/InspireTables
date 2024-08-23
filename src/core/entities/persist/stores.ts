// stores.ts
import {writable} from "svelte/store";

export const tableUpdateStore = writable(0);

// Function to trigger an update
export function triggerTableUpdate() {
    tableUpdateStore.update(n => n + 1);
}

import type { StorageStrategy } from "./storageStrategy";
import { BrowserStorageStrategy } from "./browserStorageStrategy";
import { TauriStorageStrategy } from "./tauriStorageStrategy";

// Function to determine if we're in a Tauri environment
function isInTauriEnvironment(): boolean {
    if (typeof window !== 'undefined') {
        return 'window.__TAURI__' in window;
    }
    return false; // Default to false in non-browser environments
}

// Function to get the appropriate storage strategy
export function getStorageStrategy(): StorageStrategy {
    if (isInTauriEnvironment()) {
        return new TauriStorageStrategy();
    }
    return new BrowserStorageStrategy();
}

// Create a function to initialize stores
export async function initializeStores() {
    const { EntityStorageManager } = await import("./entityStorageManager");
    const { ValueStorageManager } = await import("./valueStorageManager");
    const { EntityStoreRegistry } = await import("./entityStoreRegistry");

    const characterStore = new EntityStorageManager('character', getStorageStrategy());
    const illnessStore = new EntityStorageManager('illness', getStorageStrategy());
    const gonzoFactorStore = new ValueStorageManager<number>('gonzoFactor', getStorageStrategy());
    const lastIdStore = new ValueStorageManager<number>('lastId', getStorageStrategy());

    const allEntityStores = [
        illnessStore,
        characterStore
    ];

    const registry = EntityStoreRegistry.getInstance();
    registry.registerStore('Character', characterStore);
    registry.registerStore('Illness', illnessStore);

    return {
        characterStore,
        illnessStore,
        gonzoFactorStore,
        lastIdStore,
        allEntityStores,
        registry
    };
}

// Define the type for our stores
type Stores = Awaited<ReturnType<typeof initializeStores>>;

// Export a function to get the stores
let storesPromise: Promise<Stores> | null = null;

export function getStores(): Promise<Stores> {
    if (!storesPromise) {
        storesPromise = initializeStores();
    }
    return storesPromise;
}

export async function getStore<K extends keyof Stores>(storeName: K): Promise<Stores[K]> {
    const stores = await getStores();
    return stores[storeName];
}