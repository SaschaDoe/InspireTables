<script lang="ts">
    import {onMount} from "svelte";
    import {getStorageStrategy, getStore} from "../../core/entities/persist/stores";
    import {TableManager} from "../../core/entities/persist/tableManager";
    import {FunctionFactory} from "../../core/tables/core/entry/functionFactory";

    onMount(async () => {
        let storageStrategy = await getStorageStrategy();
        let tableManager = await TableManager.getInstance(storageStrategy,new FunctionFactory());
    });
</script>

<h1>Campaigns</h1>
