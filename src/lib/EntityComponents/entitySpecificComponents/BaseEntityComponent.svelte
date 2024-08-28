<script lang="ts">
    //import { slide } from 'svelte/transition';

    export let title: string;
    export let id: number;
    export let isHidden: boolean = false;
    export let enableHidden: boolean = true;

    function toggleHidden() {
        isHidden = !isHidden;
    }
</script>

<div class="grid grid-cols-[auto,1fr] gap-x-2">
    {#if enableHidden}
        <button on:click={toggleHidden} class="self-start mt-1">
            {#if isHidden}
                ▼
            {:else}
                ▲
            {/if}
        </button>
    {:else}
        <div></div>
    {/if}

    <h3>{title}: {id}</h3>

    <div class="contents">
        {#if !isHidden}
            <!-- <div transition:slide|local class="col-span-2 info"> -->
                <slot></slot>
            <!-- </div> -->
        {/if}
    </div>
</div>

<style>
    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2em;
    }
    .info {
        display: flex;
        flex-direction: column;
        white-space: nowrap;
    }
</style>