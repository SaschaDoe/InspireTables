<script lang="ts">
    import { Genre } from "../../core/entities/genre/genre";

    export let genre = new Genre();
    export let weight = 100;
</script>

<!-- Better styling for the genre display -->
<div class="flex justify-between text-gray-800">
    <span class="font-semibold">{genre.fullName}</span>
    {#if weight !== 100}
        <span class="text-gray-600">{weight}%</span>
    {/if}
</div>