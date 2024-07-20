<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import Table from "$lib/Table.svelte";
    import CategoryIndex from "./CategoryIndex.svelte";
    import { allCategories } from "../core/tables/allCategories";
    import { writable } from 'svelte/store';

    let categories = allCategories();
    let activeCategory = "";
    let activeTable = "";
    let showScrollToTop = writable(false);
    let scrollContainer:HTMLDivElement;

    function setActiveCategory(categoryName: string) {
        activeCategory = categoryName;
        activeTable = ""; // Reset active table when changing category
    }

    function setActiveTable(event: CustomEvent<{categoryName: string, tableName: string}>) {
        const { categoryName, tableName } = event.detail;
        activeCategory = categoryName;
        activeTable = tableName;
        scrollToTable(tableName);
    }

    function scrollToTable(tableName: string) {
        const tableId = tableName.replace(/\s+/g, '-').toLowerCase();
        const tableElement = document.getElementById(tableId);
        if (tableElement && scrollContainer) {
            tableElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function scrollToTop() {
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function handleScroll() {
        showScrollToTop.set(scrollContainer.scrollTop > 100);
        console.log("Scroll position:", scrollContainer.scrollTop, "Show button:", $showScrollToTop);
    }

    onMount(() => {
        console.log("Component mounted");
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            // Check initial scroll position
            handleScroll();
        }
    });

    onDestroy(() => {
        if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', handleScroll);
        }
    });
</script>

<div class="flex relative">
    <CategoryIndex
            {categories}
            {activeCategory}
            {activeTable}
            on:setActiveCategory={(event) => setActiveCategory(event.detail)}
            on:setActiveTable={setActiveTable}
    />

    <div bind:this={scrollContainer} class="p-4 overflow-y-auto h-screen">
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
        {#if $showScrollToTop}
            <button
                    on:click={scrollToTop}
                    class="fixed bottom-5 left-2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 z-50"
            >
                ↑
            </button>
        {/if}
    </div>


</div>
