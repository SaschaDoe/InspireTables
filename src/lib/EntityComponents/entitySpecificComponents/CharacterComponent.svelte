<script lang="ts">
    import { slide } from 'svelte/transition';
    import { Character } from "../../../core/entities/character/character";

    export let entity: Character;
    export let isHidden: boolean = false;
    export let enableHidden: boolean = false;

    function toggleHidden() {
        isHidden = !isHidden;
    }
</script>
        <div class="flex items-center space-x-2">
            {#if enableHidden}
                <button on:click={toggleHidden} class="mb-2 text-blue-700">
                    {#if isHidden}
                        ▼
                    {:else}
                        ▲
                    {/if}
                </button>
            {/if}

            <h3 class="text-blue-700">Character:</h3>
            <p class="text-gray-600">{entity.id}</p>
        </div>
        {#if !isHidden}
            <div transition:slide>
            <p class="text-blue-700">{entity.gender}</p>
            {#if entity.illnesses && entity.illnesses.length > 0}
                {#each entity.illnesses as illness}
                    <p class="text-blue-700">{illness.adjective} {illness.origin}</p>
                {/each}
            {:else}
                <p class="text-blue-700">No illnesses</p>
        {/if}
            </div>
        {/if}

<style>
    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2em;
    }
</style>