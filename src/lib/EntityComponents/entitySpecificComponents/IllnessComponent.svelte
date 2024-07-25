<script lang="ts">
    import {Illness} from "../../../core/entities/status/illness";

    export let entity: Illness;
</script>

<h3>{entity.id} {entity.adjective} {entity.type}</h3>
<p><strong>How long sick: </strong>{entity.time}</p>
<p><strong>Beginning Symptoms: </strong>{entity.beginningSymptoms.join(", ")}</p>
<p><strong>Symptoms: </strong>{entity.symptoms.join(", ")}</p>
<p><strong>Cure: </strong>{entity.cure}</p>
<p><strong>Origin: </strong>{entity.origin}</p>
<p><strong>Lore: </strong>{entity.lore}</p>
<p><strong>Age: </strong>{entity.age}</p>
<p><strong>World Effect: </strong>{entity.worldEffect}</p>
<p><strong>Transmission: </strong>{entity.transmission}</p>