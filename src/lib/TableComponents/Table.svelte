<script lang="ts">
    import type { Table } from "../../core/tables/table";
    import { MainGenreTable } from "../../core/tables/genre/mainGenres";
    import {getModalStore, type ModalSettings} from '@skeletonlabs/skeleton';
    import Modal from "$lib/TableComponents/Modal.svelte";

    let showModal: boolean = false;



    export let table: Table = new MainGenreTable();
    let modalDescription = "";

    function roll(){
        let result = table.roll();
        modalDescription = result.combinedString
        showModal = true;
    }

    function handleClose(): void {
        console.log('Modal closed');
    }

    function handleButton1Click(): void {
        roll();
    }

    function handleButton2Click(): void {
        showModal = false;
    }

    function handleButton3Click(): void {
        console.log('Persist');
    }
</script>

<Modal
        bind:showModal
        on:close={handleClose}
        on:button1Click={handleButton1Click}
        on:button2Click={handleButton2Click}
        on:button3Click={handleButton3Click}
>
    <h2 class="text-blue-700 text-2xl font-bold mb-4">{table.title}</h2>
    <p class="text-gray-700">{modalDescription}</p>
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