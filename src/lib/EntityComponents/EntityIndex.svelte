<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import type { Entity } from "../../core/entities/entity";
    import { EntityStoreRegistry } from "../../core/entities/persist/entityStoreRegistry";

    const dispatch = createEventDispatcher();

    let entitiesByType: Map<string, Entity[]> = new Map();
    let activeType = "";
    let activeEntity: number = -1;

    onMount(async () => {
        entitiesByType = await EntityStoreRegistry.getInstance().getAllEntitiesByType();
    });

    function setActiveType(typeName: string) {
        activeType = activeType === typeName ? "" : typeName;
        activeEntity = -1; // Reset active entity when changing type
        dispatch('setActiveType', typeName);
    }

    function setActiveEntity(typeName: string, entityId: number) {
        activeEntity = activeEntity === entityId ? -1 : entityId;
        activeType = typeName;
        dispatch('setActiveEntity', { typeName, entityId });
    }
</script>

<ul class="space-y-2">
    {#each Array.from(entitiesByType) as [entityType, entities]}
        <li>
            <button
                    class="text-xl font-bold w-full text-left p-2 rounded-lg transition-colors duration-200 ease-in-out {activeType === entityType ? 'bg-blue-700 text-white' : 'text-blue-700 hover:bg-blue-100'}"
                    on:click={() => setActiveType(entityType)}
            >
                {entityType}
            </button>
            {#if activeType === entityType}
                <ul class="ml-4 mt-2 space-y-1">
                    {#each entities as entity}
                        <li>
                            <button
                                    class="text-sm w-full text-left p-1 rounded transition-colors duration-200 ease-in-out {activeEntity === entity.id ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'}"
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