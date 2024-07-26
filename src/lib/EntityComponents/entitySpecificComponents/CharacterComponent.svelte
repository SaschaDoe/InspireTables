<script lang="ts">
    import { Character } from "../../../core/entities/character/character";
    import BaseEntityComponent from "$lib/EntityComponents/entitySpecificComponents/BaseEntityComponent.svelte";

    export let entity: Character;
    export let isHidden: boolean = false;
    export let enableHidden: boolean = true;
</script>

<BaseEntityComponent title="Character" id={entity.id} {isHidden} {enableHidden}>
    <p>{entity.gender}</p>
    {#if entity.illnesses && entity.illnesses.length > 0}
        {#each entity.illnesses as illness}
            <p>{illness.adjective} {illness.origin}</p>
        {/each}
    {:else}
        <p>No illnesses</p>
    {/if}
</BaseEntityComponent>