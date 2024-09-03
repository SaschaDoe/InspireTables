<script lang="ts">
    import type { RollResult } from "../../core/tables/rollResult";
    import { entityComponentMap } from "$lib/EntityComponents/entityComponentMap";
    import type { Entity } from "../../core/entities/entity";
    import {onMount} from "svelte";

    export let result: RollResult;
    let entities: Entity[] = [];
    onMount(() => {
        for (const creationResult of result.creationResults) {
            let entity = creationResult.getCreation();
            if(entity !== null){
                entities.push(entity);
            }
        }
    })

    function getComponentForEntity(entity: Entity) {
        console.log("Getting Component for: ", entity);
        let name: string = entity.constructor.name;
        console.log(name);
        let component = entityComponentMap[name] || null;
        console.log("Found: ", component);
        console.log("In: ", entityComponentMap);
        return component;
    }


</script>

<div class="text-green-900">
    <div class="ml-4">
        <div class="flex items-center">
            <span class="text-blue-700">{result.entry.interval.probability.toFixed(2)}% - {result.entry.descriptionText}</span>
        </div>
        <div class="ml-4">
                {#each entities as entity}
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