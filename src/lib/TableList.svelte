<script lang="ts">
    import Table from "$lib/Table.svelte";
    import {allCategories} from "../core/tables/allCategories";

    let categories = allCategories();
    let activeCategory = "";
    function setActiveCategory(categoryName: string) {
        activeCategory = categoryName;
    }
</script>

<div class="container mx-auto p-4 flex">
    <div class="w-1/4 pr-4">
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
                </li>
            {/each}
        </ul>
    </div>

    <div class="w-3/4">
        <h1 class="text-2xl font-bold mb-4 text-blue-700">All Tables</h1>
        {#each categories as category}
            <div class="bg-gray-100 p-4 mb-6 rounded-lg">
                <h2 class="text-2xl font-bold text-blue-700 mb-4">{category.name}</h2>
                <div class="space-y-4">
                    {#each category.tables as table}
                        <Table table="{table}"></Table>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>