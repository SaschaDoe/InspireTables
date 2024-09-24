<script lang="ts">
    import { World } from "../../core/entities/world/world";
    import { onMount } from "svelte";
    import {
        getSelectedCampaign,
        getStore,
        saveSelectedCampaign,
        saveSelectedWorld,
        selectedCampaignStore,
        selectedGlobalStore
    } from "../../core/entities/persist/stores";
    import { get } from "svelte/store";
    import {Campaign} from "../../core/entities/campaign/campaign";

    function nothing(tabIndex: number) {
        console.log("not overloaded");
    }

    export let world = new World();
    export let changeTab: (tabIndex: number) => void = nothing;

    let currentCampaign: Campaign|null = new Campaign();
    let worldName = world.name;
    let isEditing = false;
    let textWidth = 25;
    let textElement: HTMLButtonElement;
    let inputElement: HTMLInputElement;

    function updateTextWidth() {
        if (textElement) {
            const styles = window.getComputedStyle(textElement);
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            context.font = `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;

            if(worldName.length < 5){
                textWidth = 7;
            }else{
                textWidth = context.measureText(worldName).width + 4; // Add a small buffer
            }
        }
    }

    function saveName() {
        world.name = worldName;
        saveSelectedCampaign(currentCampaign);
        saveSelectedWorld(world);
        console.log("World name saved:", world.name, " into ", currentCampaign);
        updateTextWidth();
    }

    function startEditing() {
        isEditing = true;
        updateTextWidth();
        setTimeout(() => inputElement?.focus(), 0);
    }

    function stopEditing() {
        isEditing = false;
        saveName();
    }

    onMount(() => {
        (async () => {
            try {
                currentCampaign = await getSelectedCampaign();

                if (currentCampaign) {
                    world = currentCampaign.world;
                    console.log("World name: ", world.name);
                    if (world.name === "") {
                        worldName = "<Enter Name>";
                    } else {
                        worldName = world.name;
                    }
                }

                updateTextWidth();
            } catch (error) {
                console.error("Error in onMount:", error);
            }
        })();



        updateTextWidth();
    });

    $: if (worldName) updateTextWidth();
</script>

<div class="p-4">
    <div class="flex items-center space-x-4">
        <h1 class="sr-only">World Name</h1>
        {#if isEditing}
            <input
                    bind:this={inputElement}
                    type="text"
                    class="text-xl text-blue-500 px-0 py-1 border-b-2 border-blue-500 focus:outline-none bg-transparent"
                    bind:value={worldName}
                    on:blur={stopEditing}
                    on:keydown={(e) => e.key === 'Enter' && stopEditing()}
                    aria-label="Edit world name"
                    style="width: {textWidth}px;"
            />
        {:else}
            <button
                    bind:this={textElement}
                    class="text-xl text-blue-500 cursor-pointer bg-transparent border-none p-0 m-0 focus:outline-none focus:underline hover:underline"
                    on:click={startEditing}
                    aria-label="Click to edit world name"
            >
                {worldName}
            </button>
        {/if}
        <span class="text-blue-500 text-xl ">ID: {world.id}</span>
    </div>
</div>