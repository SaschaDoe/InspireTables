<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import CategoryIndex from "./CategoryIndex.svelte";
    import {allCategories} from "../../core/tables/allCategories";
    import { writable } from 'svelte/store';
    import { RangeSlider  } from '@skeletonlabs/skeleton';
    import {
        getStorageStrategy,
        getStore,
        tableUpdateStore,
        triggerTableUpdate
    } from "../../core/entities/persist/stores";
    import type {ValueStorageManager} from "../../core/entities/persist/valueStorageManager";
    import TableComponent from "$lib/TableComponents/Table.svelte";
    import {Table} from "../../core/tables/table";
    import {TableStorageManager} from "../../core/entities/persist/tableStorageManager";
    import type {StorageStrategy} from "../../core/entities/persist/storageStrategy";
    import {mapCategories} from "../../core/tables/category";
    import {FunctionFactory} from "../../core/tables/core/entry/functionFactory";
    let categories = allCategories();
    let activeCategory = "";
    let activeTable = "";
    let showScrollToTop = writable(false);
    let scrollContainer: HTMLDivElement;
    let sliderValue = 0;
    let tableUpdateTrigger = 0;
    let sliderLabel: string;
    let gonzoStore: ValueStorageManager<number>;
    let storageStrategy: StorageStrategy;
    let tableManager: TableStorageManager;

    async function updateGonzoFactor(value: number) {
        if (gonzoStore) {
            await gonzoStore.setValue(value);
        }
    }

    $: {
        sliderLabel = getSliderLabel(sliderValue);
        updateGonzoFactor(sliderValue);
    }

    $: tableUpdateTrigger = $tableUpdateStore;

    function updateCategories(loadedTables: Table[]){
        categories = mapCategories(categories, loadedTables);
        triggerTableUpdate();
        tableUpdateTrigger += 1;
        updateFavoriteTables();
        console.log("Categories updated: ", categories);
    }
    let favoriteTables: any[] = [];



    onMount(async () => {
        storageStrategy = await getStorageStrategy();
        tableManager = new TableStorageManager(storageStrategy);
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial scroll position
        }

        gonzoStore = await getStore('gonzoFactorStore');
        let gonzoFactor = 0;
        try{
            let value = await gonzoStore.getValue();
            if(value !== null){
                gonzoFactor = value;
            }
        }catch{
            await gonzoStore.setValue(gonzoFactor);
        }

        sliderValue = gonzoFactor;
        sliderLabel = getSliderLabel(sliderValue);

        try {
            await loadTables();
        } catch (error) {
            console.error('Error loading tables in onMount:', error);
        }

        updateFavoriteTables();
    });

    onDestroy(() => {
        if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', handleScroll);
        }
    });

    async function loadTables(){
        try {
            let loadedTables = await tableManager.getTablesWithThereSubTablesFrom('/tables/', categories);
            let realTables = loadedTables.map(tableJson => Table.fromJSON(tableJson, new FunctionFactory()));
            updateCategories(realTables);
            updateFavoriteTables();
        } catch (error) {
            console.error('Error syncing tables:', error);
        }

        triggerTableUpdate();
        tableUpdateTrigger += 1;
        categories = [...categories];
    }

    async function saveTables(){
        try{
            await tableManager.saveAllCategoriesIn('/tables/', categories);
        }catch(error){
            console.log("error while saving all categories", error);
        }
    }

    async function syncTables() {
        saveTables();
        loadTables();
    }

    function getSliderLabel(value: number): string {
        for(let category of categories){
            for(let table of category.tables){
                table.changeGonzo(value);
            }
        }
        tableUpdateTrigger += 1;

        if (value < 1) {
            return `Normal: ${value.toFixed(1)}`;
        } else if (value === 1) {
            return "Even";
        } else {
            return `Flipped: ${(value).toFixed(1)}`;
        }
    }

    function setActiveCategory(categoryName: string) {

        activeCategory = categoryName;
        activeTable = ""; // Reset active table when changing category
        if (categoryName === "Favorites") {
            if (favoriteTables.length > 0) {
                scrollToTable(favoriteTables[0].title);
            }
        }else{
            let category = categories.find(c => c.name === categoryName);
            let firstTable = category?.tables[0];
            if(firstTable){
                scrollToTable(firstTable.title);
            }
        }


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
                        return;
                    }
                }
                break;
            }
        }
    }

    let updateTrigger = 0;

    function triggerUpdate() {
        updateTrigger += 1;
    }

    function updateFavoriteTables() {
        favoriteTables = categories.flatMap(category =>
            category.tables
                .filter(table => table.isFavorite)
                .map(table => ({ ...table, category: category.name }))
        );
    }

    function handleRemoveFavorite(event: CustomEvent) {
        const { categoryName, tableName } = event.detail;
        updateTableFavoriteStatus(categoryName, tableName, false);
    }

    async function updateTableFavoriteStatus(categoryName: string, tableName: string, isFavorite: boolean) {
        // Find the category and update the table
        const categoryIndex = categories.findIndex(c => c.name === categoryName);
        if (categoryIndex !== -1) {
            const tableIndex = categories[categoryIndex].tables.findIndex(t => t.title === tableName);
            if (tableIndex !== -1) {
                categories[categoryIndex].tables[tableIndex].isFavorite = isFavorite;

                // Save the updated table
                try {
                    await tableManager.saveTable('tables', categoryName, categories[categoryIndex].tables[tableIndex]);
                    console.log(`Table ${tableName} favorite status updated to ${isFavorite}`);
                } catch (error) {
                    console.error('Error saving table favorite status:', error);
                    // Revert the change if saving failed
                    categories[categoryIndex].tables[tableIndex].isFavorite = !isFavorite;
                }
            }
        }
        updateFavoriteTables();
        categories = [...categories]; // Trigger reactivity
    }


    function handleFavoriteToggled(event: CustomEvent) {
        const { table, category } = event.detail;
        updateTableFavoriteStatus(category, table.title, table.isFavorite);
    }


</script>

<div class="flex relative h-full">
    <CategoryIndex
            {categories}
            {activeCategory}
            {activeTable}
            {favoriteTables}
            on:setActiveCategory={(event) => setActiveCategory(event.detail)}
            on:setActiveTable={setActiveTable}
            on:removeFavorite={handleRemoveFavorite}
    />

    <div class="flex-1 flex flex-col h-screen">
        <div class="bg-white z-10">
            <div class="flex items-center justify-between mb-4">
                <h1 class="text-2xl font-bold text-blue-700 p-4">All Tables</h1>
                <button
                        on:click={syncTables}
                        class="btn variant-filled-primary flex items-center space-x-2"
                >
                    <span>Sync</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                    </svg>
                </button>
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
                                <TableComponent
                                        {table}
                                        {category}
                                        {tableUpdateTrigger}
                                        on:tableUpdated={triggerTableUpdate}
                                        on:favoriteToggled={handleFavoriteToggled}
                                />
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