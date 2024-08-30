<script lang="ts">
    import { Character } from "../../../core/entities/character/character";
    import BaseEntityComponent from "$lib/EntityComponents/entitySpecificComponents/BaseEntityComponent.svelte";
    import type {GenreMix} from "../../../core/entities/genre/genreMix";

    export let entity: GenreMix;
    export let isHidden: boolean = true;
    export let enableHidden: boolean = true;
</script>

<BaseEntityComponent title="Character" id={entity.id} {isHidden} {enableHidden}>
    <p>{entity.primaryGenre}</p>
</BaseEntityComponent>