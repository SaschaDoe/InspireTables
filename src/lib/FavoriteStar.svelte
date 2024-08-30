<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import favoriteSelected from "../../static/favorite_star_selected.png";
    import favoriteUnSelected from "../../static/favorite_star_unSelected.png";

    export let isFavorite: boolean;

    const dispatch = createEventDispatcher();

    function toggleFavorite() {
        dispatch('toggleFavorite');
    }
</script>

<button on:click={toggleFavorite} class="focus:outline-none">
    <img
            src={isFavorite ? favoriteSelected : favoriteUnSelected}
            alt={isFavorite ? "Favorite" : "Not favorite"}
            class="w-6 h-6"
    />
</button>