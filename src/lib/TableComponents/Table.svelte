<script lang="ts">
    import type { Table } from "../../core/tables/table";
    import { MainGenreTable } from "../../core/tables/genre/mainGenres";
    import Modal from "$lib/TableComponents/Modal.svelte";
    import { RollResult } from "../../core/tables/rollResult";
    import { Entry } from "../../core/tables/entry";
    import TreeView from "$lib/TableComponents/TreeView.svelte";
    import {summarizeEntities} from "../../core/entities/entityHelper";
    import {EntityStoreRegistry} from "../../core/entities/persist/entityStoreRegistry";

    let showModal: boolean = false;
    export let table: Table = new MainGenreTable();
    let modalDescription = "";
    let rollResult = new RollResult(new Entry());
    let hasEntities: boolean = false;

    function roll() {
        rollResult = table.roll();
        modalDescription = rollResult.combinedString;
        hasEntities = rollResult.entities.length > 0;
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
        for (let entity of rollResult.entities) {
            const entityType = entity.constructor.name;
            const store = EntityStoreRegistry.getInstance().getStore(entityType);
            if (store) {
                store.saveEntity(entity);
            }
        }
        showModal = false;
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
    <h2 class="text-blue-700 text-2xl font-bold mb-4">{table.title}</h2>
    <p class="text-gray-700">{modalDescription}</p>

    {#if rollResult}
        {#if rollResult.entities.length > 0}
            <p class="text-green-900">Entities: {summarizeEntities(rollResult.entities)}</p>
            <!-- TODO: Click on entity and scroll and open the Componenent if possible -->
        {/if}
        <TreeView result={rollResult} />

    {/if}
</Modal>

<div class="container mx-auto p-4">
    <div class="bg-surface-100 border border-surface-300 rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold text-blue-700">{table.title}</h1>
            <button class="btn variant-filled-secondary" on:click={roll}>Roll</button>
        </div>

        <div class="overflow-x-auto">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {#each table.entries as entry, i}
                    <tr>
                        <td>{i}</td>
                        <td>{entry.DescriptionText}</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>