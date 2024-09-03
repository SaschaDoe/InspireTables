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
        getStore,
        selectedAltTables,
        selectedGlobalStore,
        selectedProfileStore,
        selectedSubTables,
    } from "../../core/entities/persist/stores";
    import {createEventDispatcher, onMount} from "svelte";
    import {TableStorageManager} from "../../core/entities/persist/tableStorageManager";
    import type {StorageStrategy} from "../../core/entities/persist/storageStrategy";
    import {Category} from "../../core/tables/category";
    import FavoriteStar from "$lib/FavoriteStar.svelte";
    import type {Profile} from "../../core/entities/profile/profile";
    import {get} from "svelte/store";
    import {GlobalEntity} from "../../core/entities/profile/globalEntity";

    const dispatch = createEventDispatcher();
    let showModal: boolean = false;
    export let table: Table = new MainGenreTable();
    export const category = new Category();
    let profile: Profile | null = null;
    export let tableUpdateTrigger = 0;
    let modalDescription = "";
    let rollResult = new RollResult().withEntry(new Entry());
    let hasEntities: boolean = false;
    const originalTableString = "original";
    let entries: Entry[] = [];
    let isEvenDistributed: boolean = true;
    let selectedSubTable: Table|null = null;
    let selectedAltTable: Table|null = null;
    let selectedSubTableName: string = originalTableString;
    let selectedAltTableName: string = originalTableString;
    let currentTable: Table = table;
    let hasSubTables: boolean = false;
    let hasAltTables: boolean = false;
    let global = new GlobalEntity();

    $: {
        if (tableUpdateTrigger !== undefined || selectedSubTableName !== undefined) {
            if (tableUpdateTrigger !== undefined) {
                if (!table.entryList.isProbabilitySet) {
                    table.entryList.setProbabilities();
                }
                entries = [...table.entryList.entries];
                isEvenDistributed = table.isEvenDistributed;
            }
            updateCurrentTable();
        }
    }

    onMount(async () => {
        console.log("on mount for ", table.title);
        profile = get(selectedProfileStore);
        selectedProfileStore.subscribe(p => profile = p);
        storageStrategy = await getStorageStrategy();
        tableStorageManager = new TableStorageManager(storageStrategy);
        let globalPromise = get(selectedGlobalStore);
        if(globalPromise !== null){
            global = globalPromise;
        }

        await updateCurrentTable();
    });

    async function saveGlobal() {
        let globalStore = await getStore('globalStore');
        await globalStore.saveEntity(global)
    }

    async function saveProfile() {
        if(profile !== null){
            let profileStore = await getStore('profileStore');
            await profileStore.saveEntity(profile)
            console.log("save: ",profile);
        }
    }

    async function updateCurrentTable() {
        if(profile !== null){
            console.log("update current table with profile")
            for (const subTable of table.subTables) {
                if(profile.selectedSubTables.some(selectedTable => selectedTable.title === subTable.title)){
                    console.log("search in ", subTable);
                    console.log("for ", profile.selectedSubTables);
                    selectedSubTable = subTable;
                    selectedSubTableName = getFilteredSubtableTitle(selectedSubTable.title);
                    currentTable = selectedSubTable;
                }
            }

            for (const altTable of currentTable.altTables){
                if(profile.selectedAltTables.some(selectedTable => selectedTable.title === altTable.title)){
                    selectedAltTable = altTable;
                    selectedAltTableName = getFilteredAltTableTitle(selectedAltTable.title)
                }
            }
        }else{
            if(global){
                for (const subTable of table.subTables) {
                    if(global.selectedSubTables.some(selectedTable => selectedTable.title === subTable.title)){
                        selectedSubTable = subTable;
                        selectedSubTableName = getFilteredSubtableTitle(selectedSubTable.title);
                        currentTable = selectedSubTable;
                    }
                }

                for (const altTable of currentTable.altTables){
                    if(global.selectedAltTables.some(selectedTable => selectedTable.title === altTable.title)){
                        selectedAltTable = altTable;
                        selectedAltTableName = getFilteredAltTableTitle(selectedAltTable.title)
                    }
                }
                await saveGlobal();
            }else{
                for (const subTable of table.subTables) {
                    if(get(selectedSubTables).includes(subTable)){
                        selectedSubTable = subTable;
                    }
                }

                for (const altTable of table.altTables){
                    if(get(selectedAltTables).includes(altTable)){
                        selectedAltTable = altTable;
                    }
                }
            }

        }


        if(selectedAltTable !== null){
            currentTable = selectedAltTable;
        }else if(selectedSubTable !== null){
            currentTable = selectedSubTable;
        }else{
            currentTable = table;
        }

        if (!currentTable.entryList.isProbabilitySet) {
            currentTable.entryList.setProbabilities();
        }
        entries = [...currentTable.entryList.entries];
        isEvenDistributed = currentTable.isEvenDistributed;
        hasSubTables = table.subTables.length > 0;
        if(selectedSubTable !== null){
            hasAltTables = selectedSubTable.altTables.length > 0;
        }else{
            hasAltTables = table.altTables.length > 0;
        }
    }

    let storageStrategy: StorageStrategy;
    let tableStorageManager: TableStorageManager;

    async function handleAltTableChange(event: CustomEvent<Table|null>) {
        if(event.detail === null){
            console.log("null in handle alt table");
            return;
        }
        if(selectedSubTable !== null && event.detail.title === selectedSubTable.title){
            console.log("alt-handle ", table.title)
            selectedAltTableName = originalTableString;
            if(profile !== null && selectedAltTable !== null){
                let index = profile.selectedAltTables.indexOf(selectedAltTable)
                profile.selectedAltTables.splice(index,1);
                await saveProfile();
            }else{
                if(global && selectedAltTable !== null){
                    let index = global.selectedAltTables.indexOf(selectedAltTable)
                    global.selectedAltTables.splice(index,1);
                    await saveGlobal();
                }
                console.log("global after splice", global);
            }
            selectedAltTable = null;
            currentTable = selectedSubTable;
        }else {
            selectedAltTableName = event.detail.title;
            if (profile !== null) {
                console.log("alt handled with profile")
                for (const selectedSubTable of table.subTables) {
                    for (const altTable of selectedSubTable.altTables) {
                        let index = profile.selectedAltTables.indexOf(altTable);
                        if (index > -1) {
                            profile.selectedAltTables.slice(index);
                        }

                    }
                }
                profile.selectedAltTables.push(event.detail);
                await saveProfile();
                console.log("alt handled: ", profile.selectedAltTables.length)
            } else {
                if (global) {
                    console.log("alt handled with global")
                    for (const selectedSubTable of table.subTables) {
                        for (const altTable of selectedSubTable.altTables) {
                            let index = global.selectedAltTables.indexOf(altTable);
                            if (index > -1) {
                                global.selectedAltTables.slice(index);
                            }
                        }
                    }
                    global.selectedAltTables.push(event.detail);
                    await saveGlobal();
                } else {
                    console.log("alt handled without profile or global")
                    for (const subTable of table.subTables) {
                        let index = get(selectedAltTables).indexOf(subTable);
                        if (index > -1) {
                            selectedAltTables.update(altTables => {
                                altTables.slice(index);
                                return altTables;
                            })
                        }
                    }
                    selectedAltTables.update(altTables => {
                        altTables.push(event.detail);
                        return altTables;
                    })
                }
            }
        }
        await updateCurrentTable();
    }

    async function handleSubTableChange(event: CustomEvent<Table>) {
        if(event.detail.title === table.title){
            console.log("handle original", table.title)
            selectedSubTableName = originalTableString;
            selectedAltTableName = originalTableString;
            if(profile !== null && selectedSubTable !== null){
                let index = profile.selectedSubTables.indexOf(selectedSubTable)
                profile.selectedSubTables.splice(index,1);
                await saveProfile();
            }else{
                if(global && selectedSubTable !== null){
                    let index = global.selectedSubTables.indexOf(selectedSubTable)
                    global.selectedSubTables.splice(index,1);
                    await saveGlobal();
                }
                console.log("global after splice", global);
            }
            selectedSubTable = null;
            selectedAltTable = null;
            currentTable = table;
        }else{
            if(profile !== null){
                console.log("sub handled for profile");
                for (const subTable of table.subTables) {
                    let index = profile.selectedSubTables.indexOf(subTable);
                    if(index > -1){
                        profile.selectedSubTables.splice(index,1);
                    }
                }
                profile.selectedSubTables.push(event.detail);
                await saveProfile();
                console.log("sub handled: ",profile.selectedSubTables.length);
            }else{
                if(global){
                    console.log("sub handled for global");
                    for (const subTable of table.subTables) {
                        let index = global.selectedSubTables.indexOf(subTable);
                        if(index > -1){
                            global.selectedSubTables.splice(index,1);
                        }
                    }
                    global.selectedSubTables.push(event.detail);
                    await saveGlobal();
                }else{
                    console.log("sub handled without profile or global");
                    for (const subTable of table.subTables) {
                        let index = get(selectedSubTables).indexOf(subTable);
                        if(index > -1){
                            selectedSubTables.update(subTables => {
                                subTables.splice(index,1);
                                return subTables;
                            })
                        }
                    }
                    selectedSubTables.update(subTables => {
                        subTables.push(event.detail);
                        return subTables;
                    })

                }
            }
        }

        await updateCurrentTable();
    }

    const popupCombobox: PopupSettings = {
        event: 'click',
        target: 'popupCombobox',
        placement: 'bottom',
        closeQuery: '.listbox-item'
    };

    const popupAltCombobox: PopupSettings = {
        event: 'click',
        target: 'popupAltCombobox',
        placement: 'bottom',
        closeQuery: '.listbox-item'
    };

    $: hasSubTables = false;
    $: hasAltTables = false;

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
        console.log("Current table: ", currentTable);
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
        if(fullTitle === originalTableString){
            return originalTableString;
        }
        const prefix = table.title + " - ";
        return fullTitle.startsWith(prefix) ? fullTitle.slice(prefix.length) : fullTitle;
    }

    function getFilteredAltTableTitle(fullTitle: string): string {
        if(fullTitle === originalTableString){
            return originalTableString;
        }
        const prefix = table.title + " - " + selectedSubTableName + " - Alt - ";
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
                        <span class="capitalize">{getFilteredSubtableTitle(selectedSubTableName)}</span>
                        <span>↓</span>
                    </button>
                    <div class="card w-48 shadow-xl" data-popup="popupCombobox">
                        <ListBox rounded="rounded-none">
                            <ListBoxItem
                                    bind:group={selectedSubTableName}
                                    name="subtable"
                                    value={originalTableString}
                                    on:change={() => handleSubTableChange(new CustomEvent('change', { detail: table }))}
                                    >{originalTableString}</ListBoxItem>
                            {#each table.subTables as subTable}
                                <ListBoxItem
                                        bind:group={selectedSubTableName}
                                        name="subtable"
                                        value={subTable.title}
                                        on:change={() => handleSubTableChange(new CustomEvent('change', { detail: subTable }))}
                                >>
                                    {getFilteredSubtableTitle(subTable.title)}
                                </ListBoxItem>
                            {/each}
                        </ListBox>
                        <div class="arrow bg-surface-100-800-token" />
                    </div>
                {/if}

                {#if hasAltTables}
                    <button class="btn variant-filled w-48 justify-between" use:popup={popupAltCombobox}>
                        <span class="capitalize">{getFilteredAltTableTitle(selectedAltTableName)}</span>
                        <span>↓</span>
                    </button>
                    <div class="card w-48 shadow-xl" data-popup="popupAltCombobox">
                        <ListBox rounded="rounded-none">
                            <ListBoxItem
                                    bind:group={selectedAltTableName}
                                    name="alttable"
                                    value={originalTableString}
                                    on:change={() => handleAltTableChange(new CustomEvent('change', { detail: selectedSubTable }))}
                            >
                                {originalTableString}
                            </ListBoxItem>
                            {#each currentTable.altTables as altTable}
                                <ListBoxItem
                                        bind:group={selectedAltTableName}
                                        name="alttable"
                                        value={altTable.title}
                                        on:change={() => handleAltTableChange(new CustomEvent('change', { detail: altTable }))}
                                >
                                    {getFilteredAltTableTitle(altTable.title)}
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
