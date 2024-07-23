<script lang="ts">
    import type { Table } from "../../core/tables/table";
    import { MainGenreTable } from "../../core/tables/genre/mainGenres";
    import {getModalStore, type ModalSettings} from '@skeletonlabs/skeleton';

    const modalStore = getModalStore();

    console.log("Table component initialized");
    export let table: Table = new MainGenreTable();

    function roll(){
        let result = table.roll();
        let description = result.description
        let tree = result.tree
        //see final result
        //see tree https://www.skeleton.dev/components/tree-views
        //confirm to persist entities that must have created on the way
        //reload single rolls in tree
        const modal: ModalSettings = {
            type: 'confirm',
            title: 'Please Confirm',
            body: 'Are you sure you wish to proceed?',
            // TRUE if confirm pressed, FALSE if cancel pressed
            response: (r: boolean) => console.log('response:', r),

        };
        modalStore.trigger(modal);
    }
</script>

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