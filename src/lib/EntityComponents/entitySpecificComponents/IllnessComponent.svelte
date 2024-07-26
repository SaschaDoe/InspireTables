<script lang="ts">
    import { Illness } from "../../../core/entities/status/illness";
    import BaseEntityComponent from "$lib/EntityComponents/entitySpecificComponents/BaseEntityComponent.svelte";
    export let entity: Illness;
    export let isHidden: boolean = true;
    export let enableHidden: boolean = true;
</script>

<style>

</style>

<BaseEntityComponent title="Illness" id={entity.id} {isHidden} {enableHidden}>
        <div><strong>Type:</strong> {entity.adjective} {entity.type}</div>
        <div><strong>How long sick:</strong> {entity.time}</div>
        <div><strong>Beginning Symptoms:</strong> {entity.beginningSymptoms.join(", ")}</div>
        <div><strong>Symptoms:</strong> {entity.symptoms.join(", ")}</div>
        <div><strong>Cure:</strong> {entity.cure}</div>
        <div><strong>Origin:</strong> {entity.origin}</div>
        <div><strong>Lore:</strong> {entity.lore}</div>
        <div><strong>Age:</strong> {entity.age}</div>
        <div><strong>World Effect:</strong> {entity.worldEffect}</div>
        <div><strong>Transmission:</strong> {entity.transmission}</div>
</BaseEntityComponent>