<script lang="ts">
let isIndexVisible = true;

function toggleIndex() {
    isIndexVisible = !isIndexVisible;
}
</script>

{#if isIndexVisible}
    <div class=" w-1/4 pr-4 sticky top-0 max-h-screen overflow-y-auto">

        <div class="flex items-center mb-4">
            <button
                    class="text-xl font-bold text-blue-700 hover:bg-blue-100 rounded-lg p-1"
                    on:click={toggleIndex}
            >
                ←
            </button>
            <h2 class="text-2xl font-bold text-blue-700 mr-2">Categories</h2>
            <slot></slot>
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