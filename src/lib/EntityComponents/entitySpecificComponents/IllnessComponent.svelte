<script lang="ts">
    import { Illness } from "../../../core/entities/status/illness";
    import BaseEntityComponent from "$lib/EntityComponents/entitySpecificComponents/BaseEntityComponent.svelte";
    export let entity: Illness;
    export let isHidden: boolean = false;
    export let enableHidden: boolean = true;
</script>

<BaseEntityComponent title="Illness" id={entity.id} {isHidden} {enableHidden}>
    <p><strong>Type: </strong>{entity.adjective} {entity.type}</p>
    <p><strong>How long sick: </strong>{entity.time}</p>
    <p><strong>Beginning Symptoms: </strong>{entity.beginningSymptoms.join(", ")}</p>
    <p><strong>Symptoms: </strong>{entity.symptoms.join(", ")}</p>
    <p><strong>Cure: </strong>{entity.cure}</p>
    <p><strong>Origin: </strong>{entity.origin}</p>
    <p><strong>Lore: </strong>{entity.lore}</p>
    <p><strong>Age: </strong>{entity.age}</p>
    <p><strong>World Effect: </strong>{entity.worldEffect}</p>
    <p><strong>Transmission: </strong>{entity.transmission}</p>
</BaseEntityComponent>
