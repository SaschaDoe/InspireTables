<script lang="ts">
    import { Character } from "../../../core/entities/character/character";
    import BaseEntityComponent from "$lib/EntityComponents/entitySpecificComponents/BaseEntityComponent.svelte";

    export let entity: Character;
    export let isHidden: boolean = false;
    export let enableHidden: boolean = true;
</script>

<BaseEntityComponent title="Character" id={entity.id} {isHidden} {enableHidden}>
    <p class="text-blue-700">{entity.gender}</p>
    {#if entity.illnesses && entity.illnesses.length > 0}
        {#each entity.illnesses as illness}
            <p class="text-blue-700">{illness.adjective} {illness.origin}</p>
        {/each}
    {:else}
        <p class="text-blue-700">No illnesses</p>
    {/if}
</BaseEntityComponent>