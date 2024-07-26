<script lang="ts">
    let isIndexVisible = true;

    function toggleIndex() {
        isIndexVisible = !isIndexVisible;
    }
</script>

{#if isIndexVisible}
    <div class="w-1/4 pr-4 sticky overflow-y-auto">
        <div class="flex flex-col">
            <button
                    class="fixed top-20 left-2 text-xl font-bold text-blue-700 hover:bg-blue-100 rounded-lg p-1 shadow-md"
                    on:click={toggleIndex}
            >
                ←
            </button>
            <div class="mt-12">
                <slot></slot>
            </div>
        </div>
    </div>
{:else}
    <button
            class="fixed top-20 left-2 text-xl font-bold text-blue-700 hover:bg-blue-100 rounded-lg p-1 shadow-md"
            on:click={toggleIndex}
    >
        →
    </button>
{/if}