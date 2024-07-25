import CharacterComponent from "$lib/EntityComponents/entitySpecificComponents/CharacterComponent.svelte";
import {Illness} from "../../core/entities/status/illness";
import {type ComponentType, SvelteComponent} from "svelte";
import IllnessComponent from "$lib/EntityComponents/entitySpecificComponents/IllnessComponent.svelte";

export type EntityComponentMap = {
    [key: string]: ComponentType;
};

// Create the entityComponentMap
export const entityComponentMap: EntityComponentMap = {
    'Character': CharacterComponent,
    'Illness': IllnessComponent,
};