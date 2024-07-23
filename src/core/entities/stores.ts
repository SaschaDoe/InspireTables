import {EntityStorageManager} from "./entityStorageManager";
import type {Illness} from "./illness";

export const illnessStore = new EntityStorageManager<Illness>('illness');

/*
await illnessStorage.saveEntity(myIllness);
const loadedIllness = await illnessStorage.loadEntity(myIllness.id);
*/