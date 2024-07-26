<script lang="ts">
    import { onMount, createEventDispatcher, onDestroy } from 'svelte';
    import type { Entity } from "../../core/entities/entity";
    import { EntityStoreRegistry } from "../../core/entities/persist/entityStoreRegistry";
    import { writable, type Writable } from 'svelte/store';

    const dispatch = createEventDispatcher<{
        setActiveType: string;
        setActiveEntity: { typeName: string; entityId: number };
    }>();

    export let activeType: string = "";
    export let activeEntityId: number = -1;
    $: if (activeType) {
        console.log('Active type changed:', activeType);
        entitiesByTypeStore.subscribe(entitiesMap => {
            console.log('Current entitiesByTypeStore contents:');
            entitiesMap.forEach((entities, type) => {
                console.log(`  ${type}${type === activeType ? ' (active)' : ''}: ${entities.length} entities`);
            });
            if (!entitiesMap.has(activeType)) {
                console.warn(`  Warning: activeType "${activeType}" is not present in the store!`);
            }
        });
    }
    let entitiesByTypeStore: Writable<Map<string, Entity[]>> = writable(new Map());
    let unsubscribe: () => void;

    onMount(async () => {
        const registry = EntityStoreRegistry.getInstance();

        // Initial fetch
        entitiesByTypeStore.set(await registry.getAllEntitiesByType());

        // Subscribe to changes
        unsubscribe = registry.subscribe((updatedEntitiesByType: Map<string, Entity[]>) => {
            entitiesByTypeStore.set(updatedEntitiesByType);
        });
    });

    onDestroy(() => {
        if (unsubscribe) {
            unsubscribe();
        }
    });

    function setActiveType(typeName: string) {
        dispatch('setActiveType', typeName);
    }

    function setActiveEntity(typeName: string, entityId: number) {
        dispatch('setActiveEntity', { typeName, entityId });
    }
</script>

<ul class="space-y-2">
    {#each Array.from($entitiesByTypeStore) as [entityType, entities]}
        <li>
            <button
                    class="text-xl font-bold w-full text-left p-2 rounded-lg transition-colors duration-200 ease-in-out {activeType === entityType ? 'bg-blue-700 text-white' : 'text-blue-700 hover:bg-blue-100'}"
                    on:click={() => setActiveType(entityType)}
            >
                {entityType}
            </button>
            <ul class="ml-4 mt-2 space-y-1">
                {#each entities as entity (entity.id)}
                    <li>
                        <button
                                class="text-sm w-full text-left p-1 rounded transition-colors duration-200 ease-in-out {activeEntityId === entity.id && activeType === entityType ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'}"
                                on:click={() => setActiveEntity(entityType, entity.id)}
                        >
                            ID: {entity.id}
                        </button>
                    </li>
                {/each}
            </ul>
        </li>
    {/each}
</ul>