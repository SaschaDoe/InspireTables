<script lang="ts">
    import { onMount, createEventDispatcher, onDestroy } from 'svelte';
    import { slide } from 'svelte/transition';
    import type { Entity } from "../../core/entities/entity";
    import { EntityStoreRegistry } from "../../core/entities/persist/entityStoreRegistry";
    import { writable, type Writable } from 'svelte/store';

    const dispatch = createEventDispatcher<{
        setActiveType: string;
        setActiveEntity: { typeName: string; entityId: number };
    }>();

    export let activeType: string = "";
    export let activeEntityId: number = -1;

    let entitiesByTypeStore: Writable<Map<string, Entity[]>> = writable(new Map());
    let expandedTypes: Writable<Set<string>> = writable(new Set());
    let unsubscribe: () => void;

    $: if (activeType) {
        expandedTypes.set(new Set([activeType]));
    }

    onMount(async () => {
        const registry = EntityStoreRegistry.getInstance();
        entitiesByTypeStore.set(await registry.getAllEntitiesByType());

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

    function toggleExpanded(typeName: string) {
        expandedTypes.update(set => {
            if (set.has(typeName)) {
                set.delete(typeName);
            } else {
                set.add(typeName);
            }
            return set;
        });
    }
</script>

<ul class="space-y-2">
    {#each Array.from($entitiesByTypeStore) as [entityType, entities]}
        <li>
            <div class="flex items-center justify-between">
                <button
                        class="text-xl font-bold flex-grow text-left p-2 rounded-lg transition-colors duration-200 ease-in-out {activeType === entityType ? 'bg-blue-700 text-white' : 'text-blue-700 hover:bg-blue-100'}"
                        on:click={() => setActiveType(entityType)}
                >
                    {entityType}
                </button>
                <button
                        class="p-2 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors duration-200 ease-in-out"
                        on:click={() => toggleExpanded(entityType)}
                >
                    <svg class="w-6 h-6 transition-transform duration-200 ease-in-out {$expandedTypes.has(entityType) ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </div>
            {#if $expandedTypes.has(entityType)}
                <ul class="ml-4 mt-2 space-y-1" transition:slide="{{ duration: 300 }}">
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
            {/if}
        </li>
    {/each}
</ul>