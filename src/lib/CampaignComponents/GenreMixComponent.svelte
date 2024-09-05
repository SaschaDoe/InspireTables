<script lang="ts">
    import {GenreMix} from "../../core/entities/genre/genreMix";
    import GenreComponent from "$lib/CampaignComponents/GenreComponent.svelte";
    import {getSelectedCampaign, getSelectedProfile, getStorageStrategy} from "../../core/entities/persist/stores";
    import {Profile} from "../../core/entities/profile/profile";
    import {Campaign} from "../../core/entities/campaign/campaign";
    import {GenreMixCreator} from "../../core/entities/genre/genreMixCreator";
    import {TableManager} from "../../core/entities/persist/tableManager";
    import {FunctionFactory} from "../../core/tables/core/entry/functionFactory";

    export let genreMix = new GenreMix();
    let campaign = new Campaign();
    let profile = new Profile();

    async function rollAgain() {
        let tmpProfile = await getSelectedProfile();
        if (tmpProfile !== null) {
            profile = tmpProfile;
        }

        let tmpCampaign = await getSelectedCampaign();
        if (tmpCampaign !== null) {
            campaign = tmpCampaign;
        }
        let storageStrategy = await getStorageStrategy();
        let tableManager = await TableManager.getInstance(storageStrategy, new FunctionFactory());

        // Create a new GenreMix and update the genreMix variable
        const newGenreMix = (await new GenreMixCreator(tableManager)
            .withNarrativeMedium(profile.narrativeMediumType)
            .create()).getCreation() as GenreMix;

        // Trigger reactivity by reassigning the genreMix
        genreMix = newGenreMix;
    }
</script>

<div class="text-black p-4">
    <button
            on:click={rollAgain}
            class="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582a2 2 0 001.789 1.105l.76.026a5 5 0 001.37.154l.108-.004h2a5 5 0 01.133-9.995H11a2 2 0 00-2-2h-5v5zM20 20v-5h-.582a2 2 0 00-1.789-1.105l-.76-.026a5 5 0 00-1.37-.154l-.108.004h-2a5 5 0 01-.133 9.995H13a2 2 0 002 2h5v-5z"></path>
        </svg>
    </button>
    <GenreComponent genre={genreMix.primaryGenre}></GenreComponent>
    {#each genreMix.subGenres as genre}
        <GenreComponent genre={genre}></GenreComponent>
    {/each}
</div>
