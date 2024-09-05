<script lang="ts">
    import {Genre} from "../../core/entities/genre/genre";

    export let genre = new Genre();
    export let weight = 100;
</script>

<div class="text-black">
    <p>{genre.fullName}:{weight}</p>
</div>