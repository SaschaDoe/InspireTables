import { writable } from 'svelte/store';

export const entityUpdateStore = writable<Set<string>>(new Set());

export function notifyEntityUpdates(entityTypes: string[]) {
    entityUpdateStore.update(currentSet => {
        entityTypes.forEach(type => currentSet.add(type));
        return currentSet;
    });
}

export function clearEntityUpdates() {
    entityUpdateStore.set(new Set());
}