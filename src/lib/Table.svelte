<script lang="ts">
    import { Table } from "../core/tables/table";
    import { MainGenreTable } from "../core/tables/genre/mainGenres";
    console.log("Table component initialized");
    export let table: Table = new MainGenreTable();
</script>

<div class="container mx-auto p-4">
    <div class="bg-surface-100 border border-surface-300 rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center mb-4">
            <h1 id="{table.title}" class="text-2xl font-bold text-blue-700">{table.title}</h1>
            <button class="btn variant-filled-secondary ">Roll</button>
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
                        <td>{entry.getDescriptionText}</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>