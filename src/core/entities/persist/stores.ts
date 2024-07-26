import { EntityStorageManager } from "./entityStorageManager";
import { BrowserStorageStrategy } from "./browserStorageStrategy";
import { TauriStorageStrategy } from "./tauriStorageStrategy";
import { TauriIdStorageStrategy } from "./id/tauriStorageStrategy";
import { BrowserIdStorageStrategy } from "./id/browserStorageStrategy";
import { IdGenerator } from "./id/IdGenerator";
import {EntityStoreRegistry} from "./entityStoreRegistry";


// Function to determine if we're in a Tauri environment
function isInTauriEnvironment(): boolean {
    if (typeof window !== 'undefined') {
        return 'window.__TAURI__' in window;
    }
    return false; // Default to false in non-browser environments
}

// Function to get the appropriate storage strategy
function getStorageStrategy() {
    if (isInTauriEnvironment()) {
        return new TauriStorageStrategy();
    }
    return new BrowserStorageStrategy();
}

// Function to get the appropriate ID storage strategy
function getIdStorageStrategy() {
    if (isInTauriEnvironment()) {
        return new TauriIdStorageStrategy();
    }
    return new BrowserIdStorageStrategy();
}

// Create your EntityStorageManager instances
export const characterStore = new EntityStorageManager('character', getStorageStrategy());
export const illnessStore = new EntityStorageManager('illness', getStorageStrategy());

export const allStores = [
    illnessStore,
    characterStore
];

export const registry = EntityStoreRegistry.getInstance();
registry.registerStore('Character', characterStore);
registry.registerStore('Illness', illnessStore);



// Initialize IdGenerator
export const idGenerator = IdGenerator.getInstance(getIdStorageStrategy());