<script lang="ts">
    import type { Table } from "../../core/tables/table";
    import { MainGenreTable } from "../../core/tables/content/genre/mainGenres";
    import Modal from "$lib/TableComponents/Modal.svelte";
    import { RollResult } from "../../core/tables/rollResult";
    import { Entry } from "../../core/tables/core/entry/entry";
    import TreeView from "$lib/TableComponents/TreeView.svelte";
    import { EntityStoreRegistry } from "../../core/entities/persist/entityStoreRegistry";

    let showModal: boolean = false;
    export let table: Table = new MainGenreTable();
    let modalDescription = "";
    let rollResult = new RollResult(new Entry());
    let hasEntities: boolean = false;

    function roll() {
        rollResult = table.roll();
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

    $: hasProbabilities = table.entries.some(entry => entry.setting.probabilityInPercent > 0);
</script>

<Modal
        bind:showModal
        on:close={handleClose}
        on:button1Click={handleRerollClick}
        on:button2Click={handleCancelClick}
        on:button3Click={handlePersistClick}
        {hasEntities}
>
    <h2 class="text-blue-700 text-2xl font-bold mb-4">{table.title}</h2>
    <p class="text-gray-700">{modalDescription}</p>

    {#if rollResult}
        <TreeView result={rollResult} />
    {/if}
</Modal>

<div class="container mx-auto p-4">
    <div class="bg-surface-100 border border-surface-300 shadow-lg p-6">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold text-blue-700">{table.title}</h1>
            <button class="btn variant-filled-secondary" on:click={roll}>Roll</button>
        </div>

        <div class="overflow-x-auto">
            <table class="table table-hover">
                <tbody>
                {#each table.entries as entry, i}
                    <tr>
                        {#if hasProbabilities}
                            <td>
                                {#if entry.setting.probabilityInPercent > 0}
                                    {entry.setting.probabilityInPercent.toFixed(2)}%
                                {/if}
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