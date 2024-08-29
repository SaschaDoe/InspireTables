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
import {tauri} from "@tauri-apps/api";

// Function to determine if we're in a Tauri environment
function isInTauriEnvironment(): boolean {
    if (typeof window !== 'undefined' && window !== null) {
        // Check if __TAURI__ object exists on window
        return window.__TAURI__ !== undefined;
    }
    return false;
}

async function isTauriEnvironment(): Promise<boolean> {
    try {
        await tauri.invoke('tauri');
        return true;
    } catch (e) {
        return false;
    }
}

// Function to get the appropriate storage strategy
export async function getStorageStrategy(): Promise<StorageStrategy> {
/*
    if (isInTauriEnvironment() || await isTauriEnvironment()) {
        console.log("is in tauri environment");
        return new TauriStorageStrategy();
    }*/
    console.log("is in browser Environment");
    return new BrowserStorageStrategy();
}

// Create a function to initialize stores
export async function initializeStores() {
    const { EntityStorageManager } = await import("./entityStorageManager");
    const { ValueStorageManager } = await import("./valueStorageManager");
    const { EntityStoreRegistry } = await import("./entityStoreRegistry");

    const characterStore = new EntityStorageManager('character',await getStorageStrategy());
    const genreMixStore = new EntityStorageManager('genreMix',await getStorageStrategy());
    const illnessStore = new EntityStorageManager('illness',await getStorageStrategy());
    const gonzoFactorStore = new ValueStorageManager<number>('gonzoFactor',await getStorageStrategy());
    const lastIdStore = new ValueStorageManager<number>('lastId',await getStorageStrategy());

    const allEntityStores = [
        illnessStore,
        characterStore
    ];

    const registry = EntityStoreRegistry.getInstance();
    registry.registerStore('Character', characterStore);
    registry.registerStore('GenreMix', genreMixStore);
    registry.registerStore('Illness', illnessStore);

    return {
        characterStore,
        illnessStore,
        genreMixStore,
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