<script>
    export let text = '';
    let hasBeenShown = false;

    function handleMouseEnter() {
        console.log("mouse enter in: ", text, hasBeenShown)
        if (!hasBeenShown) {
            hasBeenShown = true;
        }
    }
</script>

<div class="relative" on:mouseleave={handleMouseEnter}>
    {#if !hasBeenShown}
        <div class="absolute z-10 w-max p-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
            {text}
        </div>
        {/if}
</div>
