<script lang="ts">
    import {Adventure} from "../../core/entities/adventure/adventure";

    export let adventure = new Adventure();
</script>

<div class="p-4 bg-gray-100 min-h-screen">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Adventure: {adventure.id}</h1>
    </div>
</div>