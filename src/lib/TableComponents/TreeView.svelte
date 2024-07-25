<script lang="ts">
    import type { RollResult } from "../../core/tables/rollResult";

    export let result: RollResult;
</script>

<div class="text-green-900">
    <div class="ml-4">
        <div class="flex items-center">
            <span class="text-blue-700">{result.entry.name} - {result.entry.DescriptionText}</span>
        </div>
        {#if result.results.length > 0}
            <div class="ml-4">
                {#each result.results as childResult}
                    <svelte:self result={childResult} />
                {/each}
            </div>
        {/if}
    </div>
</div>