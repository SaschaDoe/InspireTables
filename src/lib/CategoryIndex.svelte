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

    let isIndexVisible = true;

    function toggleIndex() {
        isIndexVisible = !isIndexVisible;
    }
</script>

{#if isIndexVisible}
    <div class="w-1/4 pr-4 sticky top-0 max-h-screen overflow-y-auto">

        <div class="flex items-center mb-4">

            <h2 class="text-2xl font-bold text-blue-700 mr-2">Categories</h2>
            <button
                    class="text-xl font-bold text-blue-700 hover:bg-blue-100 rounded-lg p-1"
                    on:click={toggleIndex}
            >
                ←
            </button>
        </div>
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
{:else}
    <button
            class="fixed top-36 left-2 text-xl font-bold text-blue-700 hover:bg-blue-100 rounded-lg p-2 shadow-md"
            on:click={toggleIndex}
    >
        →
    </button>
{/if}