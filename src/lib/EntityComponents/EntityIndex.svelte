<script lang="ts">
    import { onMount, createEventDispatcher, onDestroy } from 'svelte';
    import { slide } from 'svelte/transition';
    import type { Entity } from "../../core/entities/entity";
    import { EntityStoreRegistry } from "../../core/entities/persist/entityStoreRegistry";
    import { writable, type Writable } from 'svelte/store';
    import { Search } from 'lucide-svelte';

    const dispatch = createEventDispatcher<{
        setActiveType: string;
        setActiveEntity: { typeName: string; entityId: number };
    }>();

    export let activeType: string = "";
    export let activeEntityId: number = -1;

    let entitiesByTypeStore: Writable<Map<string, Entity[]>> = writable(new Map());
    let expandedTypes: Writable<Set<string>> = writable(new Set());
    let unsubscribe: () => void;
    let searchTerm: string = '';

    $: if (activeType) {
        expandedTypes.set(new Set([activeType]));
    }

    $: filteredEntitiesByType = filterEntities($entitiesByTypeStore, searchTerm);

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

    function filterEntities(entitiesByType: Map<string, Entity[]>, term: string): Map<string, Entity[]> {
        const filtered = new Map();
        for (const [type, entities] of entitiesByType) {
            const matchedEntities = entities.filter(entity =>
                entity.description?.toLowerCase().includes(term.toLowerCase()) ||
                type.toLowerCase().includes(term.toLowerCase())
            );
            if (matchedEntities.length > 0) {
                filtered.set(type, matchedEntities);
            }
        }
        return filtered;
    }
</script>

<div class="p-4">
    <div class="relative mb-4">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search class="h-5 w-5 text-gray-400" />
        </div>
        <input
                type="text"
                placeholder="Search entities..."
                bind:value={searchTerm}
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400 bg-white shadow-sm transition-all duration-150 ease-in-out"
        />
    </div>

    <ul class="space-y-2">
        {#each Array.from(filteredEntitiesByType) as [entityType, entities]}
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
                                    {entity.description || `ID: ${entity.id}`}
                                </button>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </ul>
</div>