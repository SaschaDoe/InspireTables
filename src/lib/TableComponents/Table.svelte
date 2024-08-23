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
    import {onMount} from "svelte";


    let showModal: boolean = false;
    export let table: Table = new MainGenreTable();

    export let tableUpdateTrigger = 0;
    let modalDescription = "";
    let rollResult = new RollResult(new Entry());
    let hasEntities: boolean = false;
    const originalTableString = "original"
    let entries: Entry[] = [];
    let isEvenDistributed: boolean = true;
    let selectedSubTable: string = originalTableString;
    let currentTable: Table = table;

    $: {
        if (tableUpdateTrigger !== undefined || selectedSubTable !== undefined) {
            console.log("Table update or selection change triggered");
            if (tableUpdateTrigger !== undefined) {
                console.log("Table update triggered")
                if (!table.entryList.isProbabilitySet) {
                    table.entryList.setProbabilities();
                }
                entries = [...table.entryList.entries];
                isEvenDistributed = table.isEvenDistributed;
                hasSubTables = table.subTables.length > 0;
                console.log("Has subtables:", hasSubTables);

            }
            initializeSelectedSubTable();
            updateCurrentTable();
        }
    }

    function updateCurrentTable() {
        console.log("Updating current table");
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
        console.log("Has subtables:", hasSubTables);
    }

    onMount(() => {
        initializeSelectedSubTable();
    });

    function initializeSelectedSubTable() {
        const selectedSubTables = table.subTables.filter(subTable => subTable.isSelected);
        if (selectedSubTables.length > 0) {
            // If multiple subtables are selected, we'll use the first one
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

    function roll() {
        rollResult = currentTable.roll();
        modalDescription = rollResult.combinedString;
        hasEntities = Object.values(rollResult.entities).some(entityArray => entityArray.length > 0);
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
        for (const [entityType, entities] of Object.entries(rollResult.entities)) {
            const store = EntityStoreRegistry.getInstance().getStore(entityType);
            if (store) {
                for (const entity of entities) {
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
            <h1 class="text-2xl font-bold text-blue-700">{currentTable.title}</h1>
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