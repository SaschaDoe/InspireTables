<script lang="ts">
    import type { RollResult } from "../../core/tables/rollResult";
    import type {SvelteComponent} from "svelte";
    import {entityComponentMap} from "$lib/EntityComponents/entityComponentMap";
    import type {Entity} from "../../core/entities/entity";

    function getComponentForEntity(entity: Entity) {
        console.log("Getting Component for: ",entity);
        let name: string = entity.constructor.name;
        let component = entityComponentMap[name] || null;
        console.log("Found: ", component);
        return component;
    }

    export let result: RollResult;
</script>

<div class="text-green-900">
    <div class="ml-4">
        <div class="flex items-center">
            <span class="text-blue-700">{result.entry.name} - {result.entry.DescriptionText}</span>
        </div>
            <div class="ml-4">
                {#each result.entities as entity}
                    {#if getComponentForEntity(entity)}
                        <svelte:component
                                this={getComponentForEntity(entity)}
                                {entity}
                                enableHidden={true}
                                isHidden={true}
                        />
                    {/if}
                {/each}
            </div>
    </div>
</div>