// stores.ts
import {get, writable} from "svelte/store";


import type { StorageStrategy } from "./storageStrategy";
import { BrowserStorageStrategy } from "./browserStorageStrategy";
import { TauriStorageStrategy } from "./tauriStorageStrategy";
import {tauri} from "@tauri-apps/api";
import type {Campaign} from "../campaign/campaign";
import type {Adventure} from "../adventure/adventure";
import type {Profile} from "../profile/profile";
import type {Table} from "../../tables/table";
import type {GlobalEntity} from "../profile/globalEntity";

export const tableUpdateStore = writable(0);
export const selectedProfileStore = writable<Profile | null>(null);
export const selectedGlobalStore = writable<GlobalEntity | null>(null);
export const selectedCampaignStore = writable<Campaign | null>(null);
export const selectedSubTables = writable<Table[]>([]);
export const selectedAltTables = writable<Table[]>([]);

export async function getSelectedCampaign(){
    let profileFromWritable = get(selectedCampaignStore);
    if(profileFromWritable !== null){
        let profileStore = await getStore('campaignStore');
        let profile = await profileStore.getEntity(profileFromWritable.id);
        if(profile === null){
            throw new Error("Profile is selected but not in store!")
        }
        return profile as Campaign;
    }
    return null;
}

export async function getSelectedProfile(){
    let profileFromWritable = get(selectedProfileStore);
    if(profileFromWritable !== null){
        let profileStore = await getStore('profileStore');
        let profile = await profileStore.getEntity(profileFromWritable.id);
        if(profile === null){
            throw new Error("Profile is selected but not in store!")
        }
        return profile as Profile;
    }
    return null;
}

export async function saveSelectedProfile(profile: Profile){
    selectedProfileStore.set(profile);
    let profileStore = await getStore('profileStore');
    await profileStore.saveEntity(profile);
}

// Function to trigger an update
export function triggerTableUpdate() {
    tableUpdateStore.update(n => n + 1);
}

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
    //console.log("is in browser Environment");
    return new BrowserStorageStrategy();
}

// Create a function to initialize stores
export async function initializeStores() {
    const { EntityStorageManager } = await import("./entityStorageManager");
    const { ValueStorageManager } = await import("./valueStorageManager");
    const { EntityStoreRegistry } = await import("./entityStoreRegistry");

    const globalStore = new EntityStorageManager('global',await getStorageStrategy());
    const profileStore = new EntityStorageManager('profile',await getStorageStrategy());
    const campaignStore = new EntityStorageManager('campaign',await getStorageStrategy());
    const adventureStore = new EntityStorageManager('adventure',await getStorageStrategy());
    const characterStore = new EntityStorageManager('character',await getStorageStrategy());
    const genreMixStore = new EntityStorageManager('genreMix',await getStorageStrategy());
    const genreStore = new EntityStorageManager('genre',await getStorageStrategy());
    const worldStore = new EntityStorageManager('world',await getStorageStrategy());
    const illnessStore = new EntityStorageManager('illness',await getStorageStrategy());
    const gonzoFactorStore = new ValueStorageManager<number>('gonzoFactor',await getStorageStrategy());
    const lastIdStore = new ValueStorageManager<number>('lastId',await getStorageStrategy());

    const allEntityStores = [
        campaignStore,
        adventureStore,
        genreMixStore,
        genreStore,
        worldStore,
        characterStore,
        illnessStore,
    ];

    const registry = EntityStoreRegistry.getInstance();
    registry.registerStore('Global', globalStore);
    registry.registerStore('Profile', profileStore);
    registry.registerStore('Campaign', campaignStore);
    registry.registerStore('Adventure', adventureStore);
    registry.registerStore('Character', characterStore);
    registry.registerStore('GenreMix', genreMixStore);
    registry.registerStore('Genre', genreStore);
    registry.registerStore('World', worldStore);
    registry.registerStore('Illness', illnessStore);


    return {
        globalStore,
        profileStore,
        campaignStore,
        adventureStore,
        characterStore,
        illnessStore,
        genreMixStore,
        genreStore,
        worldStore,
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

export async function clearAllStores(): Promise<void> {
    const stores = await getStores();

    // Clear all entity stores
    for (const store of stores.allEntityStores) {
        await store.clear();
    }

    // Clear value stores
    await stores.gonzoFactorStore.clear();
    await stores.lastIdStore.clear();

    // Trigger a table update
    triggerTableUpdate();
}