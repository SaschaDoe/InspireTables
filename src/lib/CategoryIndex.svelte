<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let categories: any[];
    export let activeCategory: string = "";
    export let activeTable: string = "";

    const dispatch = createEventDispatcher();

    function setActiveCategory(categoryName: string) {
        dispatch('setActiveCategory', categoryName);
    }

    function setActiveTable(categoryName: string, tableName: string) {
        dispatch('setActiveTable', { categoryName, tableName });
    }
</script>

<div class="w-1/4 pr-4 sticky top-0 max-h-screen overflow-y-auto">
    <h2 class="text-2xl font-bold mb-4 text-blue-700">Categories</h2>
    <ul class="space-y-2">
        {#each categories as category}
            <li>
                <button
                        class="text-xl font-bold w-full text-left p-2 rounded-lg transition-colors duration-200 ease-in-out {activeCategory === category.name ? 'bg-blue-700 text-white' : 'text-blue-700 hover:bg-blue-100'}"
                        on:click={() => setActiveCategory(category.name)}
                >
                    {category.name}
                </button>
                <ul class="ml-4 mt-2 space-y-1">
                    {#each category.tables as table}
                        <li>
                            <button
                                    class="text-sm w-full text-left p-1 rounded transition-colors duration-200 ease-in-out {activeTable === table.title ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'}"
                                    on:click={() => setActiveTable(category.name, table.title)}
                            >
                                {table.title}
                            </button>
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</div>