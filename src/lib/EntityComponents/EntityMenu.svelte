<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import type { Category } from '../../core/tables/category';
    import { writable, type Writable } from 'svelte/store';
    import { getStores } from '../../core/entities/persist/stores';
    import { EntityStorageManager } from '../../core/entities/persist/entityStorageManager';
    import type {TableManager} from "../../core/entities/persist/tableManager";

    export let tableManager: TableManager;
    export let activeType: string = "";

    let categories: Category[] = [];
    let entityCounts: Writable<Record<string, number>> = writable({});

    const dispatch = createEventDispatcher();

    onMount(async () => {
        categories = tableManager.getAllCategories();
        await updateEntityCounts();
    });

    async function updateEntityCounts() {
        const stores = await getStores();
        let counts: Record<string, number> = {};

        for (const category of categories) {
            for (const table of category.tables) {
                const storeName = `${table.title.toLowerCase()}Store` as keyof typeof stores;
                const store = stores[storeName];
                if (store instanceof EntityStorageManager) {
                    counts[table.title] = await store.getEntityCount();
                }
            }
        }

        entityCounts.set(counts);
    }

    function handleSetActiveType(typeName: string) {
        activeType = typeName;
        dispatch('setActiveType', typeName);
    }
</script>

<div class="bg-surface-100-800-token p-4 rounded-lg">
    <h2 class="text-xl font-bold mb-4">Entities</h2>
    {#each categories as category}
        <div class="mb-4">
            <h3 class="text-lg font-semibold mb-2">{category.name}</h3>
            <ul>
                {#each category.tables as table}
                    {@const count = $entityCounts[table.title] || 0}
                    <li class="mb-2">
                        <button
                                class="w-full text-left p-2 rounded flex justify-between items-center
                                   {activeType === table.title ? 'bg-primary-500 text-white' : 'bg-surface-200-700-token hover:bg-primary-500/20'}"
                                on:click={() => handleSetActiveType(table.title)}
                        >
                            <span>{table.title}</span>
                            <span class="bg-surface-300-600-token px-2 py-1 rounded-full text-sm">{count}</span>
                        </button>
                    </li>
                {/each}
            </ul>
        </div>
    {/each}
</div>