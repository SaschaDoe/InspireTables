// stores.ts
import {writable} from "svelte/store";


import type { StorageStrategy } from "./storageStrategy";
import { BrowserStorageStrategy } from "./browserStorageStrategy";
import { TauriStorageStrategy } from "./tauriStorageStrategy";
import {tauri} from "@tauri-apps/api";
import type {Campaign} from "../campaign/campaign";
import type {Adventure} from "../adventure/adventure";

export const tableUpdateStore = writable(0);

// Function to trigger an update
export function triggerTableUpdate() {
    tableUpdateStore.update(n => n + 1);
}

export const tabSet = writable(0);
export const selectedCampaign = writable<Campaign | null>(null);
export const selectedAdventure = writable<Adventure | null>(null);


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

    const campaignStore = new EntityStorageManager('campaign',await getStorageStrategy());
    const adventureStore = new EntityStorageManager('adventure',await getStorageStrategy());
    const characterStore = new EntityStorageManager('character',await getStorageStrategy());
    const genreMixStore = new EntityStorageManager('genreMix',await getStorageStrategy());
    const genreStore = new EntityStorageManager('genre',await getStorageStrategy());
    const illnessStore = new EntityStorageManager('illness',await getStorageStrategy());
    const gonzoFactorStore = new ValueStorageManager<number>('gonzoFactor',await getStorageStrategy());
    const lastIdStore = new ValueStorageManager<number>('lastId',await getStorageStrategy());

    const allEntityStores = [
        campaignStore,
        adventureStore,
        genreMixStore,
        genreStore,
        characterStore,
        illnessStore,
    ];

    const registry = EntityStoreRegistry.getInstance();
    registry.registerStore('Campaign', campaignStore);
    registry.registerStore('Adventure', adventureStore);
    registry.registerStore('Character', characterStore);
    registry.registerStore('GenreMix', genreMixStore);
    registry.registerStore('Genre', genreStore);
    registry.registerStore('Illness', illnessStore);


    return {
        campaignStore,
        adventureStore,
        characterStore,
        illnessStore,
        genreMixStore,
        genreStore,
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