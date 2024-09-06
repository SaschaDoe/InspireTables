<script lang="ts">
    import { onMount } from 'svelte'; // Import onMount lifecycle function
    import { GenreMix } from "../../core/entities/genre/genreMix";
    import GenreComponent from "$lib/CampaignComponents/GenreComponent.svelte";
    import { getSelectedCampaign, getSelectedProfile, getStorageStrategy, saveSelectedCampaign } from "../../core/entities/persist/stores";
    import { Profile } from "../../core/entities/profile/profile";
    import { Campaign } from "../../core/entities/campaign/campaign";
    import { GenreMixCreator } from "../../core/entities/genre/genreMixCreator";
    import { TableManager } from "../../core/entities/persist/tableManager";
    import { FunctionFactory } from "../../core/tables/core/entry/functionFactory";
    import { RefreshCcw } from 'lucide-svelte'; // Use Lucide's Refresh Icon

    export let genreMix: GenreMix = new GenreMix(); // GenreMix from outside
    let campaign = new Campaign();
    let profile = new Profile();
    let primaryWeight = 100;
    let subGenreWeights: { genre: string, weight: number }[] = [];

    // Function to update weights and genre components
    function updateWeights(genreMix: GenreMix) {
        primaryWeight = genreMix.genreWeights.get(genreMix.primaryGenre.fullName) as number;
        subGenreWeights = genreMix.subGenres
            .map((genre) => ({
                genre: genre.fullName,
                weight: genreMix.genreWeights.get(genre.fullName) as number,
            }))
            .sort((a, b) => b.weight - a.weight);
    }

    // Set up genre mix from the existing one
    function setupExistingGenreMix() {
        if (genreMix) {
            updateWeights(genreMix); // Update weights using the existing genre mix
        }
    }

    // Generate a new genre mix
    async function generateNewGenreMix() {
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

        const newGenreMix = (await new GenreMixCreator(tableManager)
            .withNarrativeMedium(profile.narrativeMediumType)
            .create()).getCreation() as GenreMix;

        campaign.genreMix = newGenreMix;
        await saveSelectedCampaign(campaign);

        genreMix = newGenreMix;
        updateWeights(genreMix); // Update weights using the new genre mix
    }

    // On component mount, set up using the existing GenreMix
    onMount(() => {
        setupExistingGenreMix(); // Use the existing genre mix from outside
    });

    async function rollAgain() {
        await generateNewGenreMix();
    }
</script>

<!-- Genre Mix Layout -->
<div class="p-4 bg-gray-100 rounded-lg shadow-md">
    <div class="flex items-center justify-between">
        <h2 class="text-lg font-bold text-black">Genre Mix</h2>
        <button
                on:click={rollAgain}
                class="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full transition duration-300 ease-in-out">
            <!-- Smaller Refresh Icon -->
            <RefreshCcw class="w-4 h-4" />
        </button>
    </div>

    <!-- Primary Genre Section -->
    <section class="mt-4">
        <header class="text-xl font-semibold text-gray-700 mb-2">Primary Genre</header>
        <div class="bg-white p-2 rounded-lg shadow">
            <GenreComponent genre={genreMix.primaryGenre} weight={primaryWeight}></GenreComponent>
        </div>
    </section>

    {#if subGenreWeights.length > 0}
    <!-- Sub-genres Section -->
    <section class="mt-4">
        <header class="text-xl font-semibold text-gray-700 mb-2">Sub Genres</header>
        <div class="space-y-2">
            {#each subGenreWeights as {genre, weight}}
                <div class="bg-white p-2 rounded-lg shadow">
                    <GenreComponent genre={genreMix.subGenres.find(subGenre => subGenre.fullName === genre)} weight={weight}></GenreComponent>
                </div>
            {/each}
        </div>
    </section>
        {/if}
</div>
