<script lang="ts">
    import type { Table } from "../../core/tables/table";
    import { MainGenreTable } from "../../core/tables/content/genre/mainGenres";
    import Modal from "$lib/TableComponents/Modal.svelte";
    import { RollResult } from "../../core/tables/rollResult";
    import { Entry } from "../../core/tables/core/entry/entry";
    import TreeView from "$lib/TableComponents/TreeView.svelte";
    import { EntityStoreRegistry } from "../../core/entities/persist/entityStoreRegistry";
    import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
    import {
        getStorageStrategy,
    } from "../../core/entities/persist/stores";
    import {createEventDispatcher, onMount} from "svelte";
    import {TableStorageManager} from "../../core/entities/persist/tableStorageManager";
    import type {StorageStrategy} from "../../core/entities/persist/storageStrategy";
    import {Category} from "../../core/tables/category";
    import FavoriteStar from "$lib/FavoriteStar.svelte";
    const dispatch = createEventDispatcher();
    let showModal: boolean = false;
    export let table: Table = new MainGenreTable();
    export const category = new Category();
    export let tableUpdateTrigger = 0;
    let modalDescription = "";
    let rollResult = new RollResult().withEntry(new Entry());
    let hasEntities: boolean = false;
    const originalTableString = "original"
    let entries: Entry[] = [];
    let isEvenDistributed: boolean = true;
    let selectedSubTable: string = originalTableString;
    let currentTable: Table = table;

    $: {
        if (tableUpdateTrigger !== undefined || selectedSubTable !== undefined) {
            if (tableUpdateTrigger !== undefined) {
                if (!table.entryList.isProbabilitySet) {
                    table.entryList.setProbabilities();
                }
                entries = [...table.entryList.entries];
                isEvenDistributed = table.isEvenDistributed;
                hasSubTables = table.subTables.length > 0;
            }
            initializeSelectedSubTable();
            updateCurrentTable();
        }
    }

    function updateCurrentTable() {
        if (selectedSubTable === originalTableString) {
            currentTable = table;
        } else {
            currentTable = table.subTables.find(t => t.title === selectedSubTable) || table;
        }

        if (!currentTable.entryList.isProbabilitySet) {
            currentTable.entryList.setProbabilities();
        }
        entries = [...currentTable.entryList.entries];
        isEvenDistributed = currentTable.isEvenDistributed;
        hasSubTables = table.subTables.length > 0;
    }
    let storageStrategy: StorageStrategy;
    let tableStorageManager: TableStorageManager;
    onMount(async () => {
        initializeSelectedSubTable();
        storageStrategy = await getStorageStrategy();
        tableStorageManager = new TableStorageManager(storageStrategy);
    });

    function initializeSelectedSubTable() {
        const selectedSubTables = table.subTables.filter(subTable => subTable.isSelected);
        if (selectedSubTables.length > 0) {
            selectedSubTable = selectedSubTables[0].title;
            updateCurrentTable();
        }
    }

    const popupCombobox: PopupSettings = {
        event: 'click',
        target: 'popupCombobox',
        placement: 'bottom',
        closeQuery: '.listbox-item'
    };

    $: hasSubTables = false;

    async function toggleFavorite(): Promise<void> {
        currentTable.isFavorite = !currentTable.isFavorite;
        try {
            await tableStorageManager.saveTable('tables', category.name, currentTable);
            console.log(`Table ${currentTable.title} is now ${currentTable.isFavorite ? 'favorited' : 'unfavorited'}`);
            dispatch('favoriteToggled', { table: currentTable, category: category.name });
        } catch (error) {
            console.error('Error saving table favorite status:', error);
            // Revert the favorite status if saving failed
            currentTable.isFavorite = !currentTable.isFavorite;
        }
    }


    function roll() {
        rollResult = currentTable.roll();
        modalDescription = rollResult.combinedString;
        for(let creationResult of rollResult.creationResults){
            if(creationResult.getCreation()){
                hasEntities = true;
            }
        }
        showModal = true;
    }

    function handleClose(): void {
        console.log('Modal closed');
    }

    function handleRerollClick(): void {
        roll();
    }

    function handleCancelClick(): void {
        showModal = false;
    }

    function handlePersistClick(): void {
        console.log("start handle persist")
        for(let creationResult of rollResult.creationResults){
            let store = EntityStoreRegistry.getInstance().getStore(creationResult.getType());
            if (store) {
                let entity = creationResult.getCreation();
                if(entity){
                    console.log("Save ",entity)
                    console.log("into ",store)
                    store.saveEntity(entity);
                }
            }
        }
        showModal = false;
    }

    function getFilteredSubtableTitle(fullTitle: string): string {
        const prefix = table.title + " - ";
        return fullTitle.startsWith(prefix) ? fullTitle.slice(prefix.length) : fullTitle;
    }

    async function handleToggleFavorite(): Promise<void> {
        await toggleFavorite();
    }

</script>

<Modal
        bind:showModal
        on:close={handleClose}
        on:button1Click={handleRerollClick}
        on:button2Click={handleCancelClick}
        on:button3Click={handlePersistClick}
        {hasEntities}
>
    <h2 class="text-blue-700 text-2xl font-bold mb-4">{currentTable.title}</h2>
    <p class="text-gray-700">{modalDescription}</p>

    {#if rollResult}
        <TreeView result={rollResult} />
    {/if}
</Modal>

<div class="container mx-auto p-4">
    <div class="bg-surface-100 border border-surface-300 shadow-lg p-6">
        <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-2">
                <FavoriteStar
                        isFavorite={currentTable.isFavorite}
                        on:toggleFavorite={handleToggleFavorite}
                />
                <h1 class="text-2xl font-bold text-blue-700">{currentTable.title}</h1>
            </div>
            <div class="flex items-center space-x-4">
                {#if hasSubTables}
                    <button class="btn variant-filled w-48 justify-between" use:popup={popupCombobox}>
                        <span class="capitalize">{getFilteredSubtableTitle(selectedSubTable)}</span>
                        <span>↓</span>
                    </button>
                    <div class="card w-48 shadow-xl" data-popup="popupCombobox">
                        <ListBox rounded="rounded-none">
                            <ListBoxItem bind:group={selectedSubTable} name="subtable" value={originalTableString}>{originalTableString}</ListBoxItem>
                            {#each table.subTables as subTable}
                                <ListBoxItem bind:group={selectedSubTable} name="subtable" value={subTable.title}>
                                    {getFilteredSubtableTitle(subTable.title)}
                                </ListBoxItem>
                            {/each}
                        </ListBox>
                        <div class="arrow bg-surface-100-800-token" />
                    </div>
                {/if}
                <button class="btn variant-filled-secondary" on:click={roll}>Roll</button>
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="table table-hover">
                <tbody>
                {#each entries as entry}
                    <tr>
                        {#if !isEvenDistributed}
                            <td>
                                {@html entry.interval.probability < 0.01 ? `<0.01%` : `${entry.interval.probability.toFixed(2)}%`}
                            </td>
                        {/if}
                        <td>{entry.descriptionText}</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>