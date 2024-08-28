<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { slide } from 'svelte/transition';
    import { writable } from "svelte/store";

    export let categories: any[];
    export let activeCategory: string = "";
    export let activeTable: string = "";
    export let favoriteTables: any[] = [];

    const dispatch = createEventDispatcher();

    function removeFavorite(categoryName: string, tableName: string) {
        dispatch('removeFavorite', { categoryName, tableName });
    }

    function setActiveCategory(categoryName: string) {
        dispatch('setActiveCategory', categoryName);
    }

    function setActiveTable(categoryName: string, tableName: string) {
        dispatch('setActiveTable', { categoryName, tableName });
    }

    let isIndexVisible = true;
    let expandedCategories = writable(new Set<string>());
    let isFavoritesExpanded = writable(false);

    function toggleIndex() {
        isIndexVisible = !isIndexVisible;
    }

    function toggleCategory(categoryName: string) {
        expandedCategories.update(set => {
            if (set.has(categoryName)) {
                set.delete(categoryName);
            } else {
                set.add(categoryName);
            }
            return set;
        });
    }

    function toggleFavorites() {
        isFavoritesExpanded.update(value => !value);
    }

    // Reactive statement to expand active category and collapse others
    $: if (activeCategory) {
        expandedCategories.set(new Set([activeCategory]));
    }
</script>

{#if isIndexVisible}
    <div class="w-1/4 pr-4 sticky top-0 max-h-screen overflow-y-auto">
        <div class="flex items-center mb-4">
            <button
                    class="text-xl font-bold text-blue-700 hover:bg-blue-100 rounded-lg p-1 mr-2"
                    on:click={toggleIndex}
            >
                ←
            </button>
            <button
                    class="text-xl font-bold flex-grow text-left p-2 rounded-lg transition-colors duration-200 ease-in-out {activeCategory === 'Favorites' ? 'bg-blue-700 text-white' : 'text-blue-700 hover:bg-blue-100'}"
                    on:click={() => setActiveCategory('Favorites')}
            >
                Favorites
            </button>
            <button
                    class="p-2 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors duration-200 ease-in-out"
                    on:click={toggleFavorites}
            >
                <svg class="w-6 h-6 transition-transform duration-200 ease-in-out {$isFavoritesExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
        </div>

        {#if $isFavoritesExpanded}
            <ul class="ml-4 mt-2 space-y-1 mb-4" transition:slide="{{ duration: 300 }}">
                {#each favoriteTables as table}
                    <li class="flex items-center justify-between">
                        <button
                                class="text-sm flex-grow text-left p-1 rounded transition-colors duration-200 ease-in-out {activeTable === table.title ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'}"
                                on:click={() => setActiveTable(table.category, table.title)}
                        >
                            {table.title}
                        </button>
                        <button
                                class="text-red-500 hover:text-red-700 ml-2 flex-shrink-0"
                                on:click={() => removeFavorite(table.category, table.title)}
                        >
                            ×
                        </button>
                    </li>
                {/each}
            </ul>
        {/if}

        <h2 class="text-2xl font-bold text-blue-700 mb-2">Categories</h2>
        <ul class="space-y-2">
            {#each categories as category}
                <li>
                    <div class="flex items-center justify-between">
                        <button
                                class="text-xl font-bold flex-grow text-left p-2 rounded-lg transition-colors duration-200 ease-in-out {activeCategory === category.name ? 'bg-blue-700 text-white' : 'text-blue-700 hover:bg-blue-100'}"
                                on:click={() => setActiveCategory(category.name)}
                        >
                            {category.name}
                        </button>
                        <button
                                class="p-2 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors duration-200 ease-in-out"
                                on:click={() => toggleCategory(category.name)}
                        >
                            <svg class="w-6 h-6 transition-transform duration-200 ease-in-out {$expandedCategories.has(category.name) ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </div>
                    {#if $expandedCategories.has(category.name)}
                        <ul class="ml-4 mt-2 space-y-1" transition:slide="{{ duration: 300 }}">
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
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
{:else}
    <button
            class="fixed top-36 left-2 text-xl font-bold text-blue-700 hover:bg-blue-100 rounded-lg p-1 shadow-md"
            on:click={toggleIndex}
    >
        →
    </button>
{/if}