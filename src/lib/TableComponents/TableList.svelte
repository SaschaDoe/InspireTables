<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import Table from "$lib/TableComponents/Table.svelte";
    import CategoryIndex from "./CategoryIndex.svelte";
    import { allCategories } from "../../core/tables/allCategories";
    import { writable } from 'svelte/store';
    import { RangeSlider  } from '@skeletonlabs/skeleton';

    let categories = allCategories();
    let activeCategory = "";
    let activeTable = "";
    let showScrollToTop = writable(false);
    let scrollContainer: HTMLDivElement;
    let sliderValue = 0;

    $: sliderLabel = getSliderLabel(sliderValue);

    function getSliderLabel(value: number): string {
        if (value < 1) {
            return `Normal: ${value.toFixed(1)}`;
        } else if (value === 1) {
            return "Even";
        } else {
            return `Flipped: ${(value - 1).toFixed(1)}`;
        }
    }

    function getTableMode(value: number): string {
        if (value < 1) {
            return "normal";
        } else if (value === 1) {
            return "even";
        } else {
            return "flipped";
        }
    }

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
        const tableId = `table-${tableName.replace(/\s+/g, '-').toLowerCase()}`;
        const tableElement = document.getElementById(tableId);
        if (tableElement && scrollContainer) {
            // Use setTimeout to ensure the scroll happens after the DOM has updated
            setTimeout(() => {
                const topOffset = tableElement.offsetTop - scrollContainer.offsetTop;
                scrollContainer.scrollTo({ top: topOffset, behavior: 'smooth' });
            }, 0);
        }
    }

    function scrollToTop() {
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function handleScroll() {
        showScrollToTop.set(scrollContainer.scrollTop > 100);
        updateActiveTableOnScroll();
    }

    function updateActiveTableOnScroll() {
        if (!scrollContainer) return;

        const tables = scrollContainer.querySelectorAll('[id^="table-"]');
        const scrollPosition = scrollContainer.scrollTop;

        for (let i = 0; i < tables.length; i++) {
            const table = tables[i] as HTMLElement;
            const tableTop = table.offsetTop - scrollContainer.offsetTop;
            const tableBottom = tableTop + table.offsetHeight;

            if (tableTop <= scrollPosition && tableBottom > scrollPosition) {
                const tableId = table.id;
                for (const category of categories) {
                    const matchingTable = category.tables.find(t =>
                        `table-${t.title.replace(/\s+/g, '-').toLowerCase()}` === tableId
                    );
                    if (matchingTable) {
                        activeCategory = category.name;
                        activeTable = matchingTable.title;
                        console.log('Active Category:', activeCategory, 'Active Table:', activeTable);
                        return;
                    }
                }
                break;
            }
        }
    }

    onMount(() => {
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial scroll position
        }
    });

    onDestroy(() => {
        if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', handleScroll);
        }
    });
</script>

<div class="flex relative h-full">
    <CategoryIndex
            {categories}
            {activeCategory}
            {activeTable}
            on:setActiveCategory={(event) => setActiveCategory(event.detail)}
            on:setActiveTable={setActiveTable}
    />

    <div class="flex-1 flex flex-col h-screen">
        <div class="bg-white z-10">
            <div class="flex items-center justify-between mb-4">
                <h1 class="text-2xl font-bold text-blue-700 p-4">All Tables</h1>
                <div class="flex flex-col items-center w-48">
                    <span class="text-sm text-gray-600 mb-1">{sliderLabel}</span>
                    <RangeSlider
                            name="table-mode"
                            bind:value={sliderValue}
                            min={0}
                            max={2}
                            step={0.1}
                            ticked
                    />
                </div>
            </div>
        </div>

        <div bind:this={scrollContainer} class="flex-1 p-4 overflow-y-auto">
            {#each categories as category}
                <div class="bg-gray-100 p-4 mb-6 rounded-lg">
                    <h2 class="text-2xl font-bold text-blue-700 mb-4">{category.name}</h2>
                    <div class="space-y-4">
                        {#each category.tables as table}
                            <div id="table-{table.title.replace(/\s+/g, '-').toLowerCase()}">
                                <Table {table} mode={getTableMode(sliderValue)}></Table>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>

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