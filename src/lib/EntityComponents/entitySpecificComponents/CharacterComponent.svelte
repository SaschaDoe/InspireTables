<script lang="ts">
    import {Character} from "../../../core/entities/character/character";

    export let entity: Character;
</script>

<div class="flex items-center space-x-2">
    <h3 class="text-blue-700">Character:</h3>
    <p class="text-gray-600">{entity.id}</p>
</div>
<p class="text-blue-700">{entity.gender}</p>
{#if entity.illnesses && entity.illnesses.length > 0}
    {#each entity.illnesses as illness}
        <p class="text-blue-700">{illness.adjective}{illness.origin}</p>
    {/each}
{:else}
    <p class="text-blue-700">No illnesses</p>
    {/if}
