<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { Search } from 'lucide-svelte';

    export let value = '';
    export let placeholder = 'Search...';
    export let categories: { name: string; tables: { title: string }[] }[] = [];
    export let favoriteTables: { category: string; title: string }[] = [];

    const dispatch = createEventDispatcher<{
        searchResults: { filteredCategories: typeof categories; filteredFavorites: typeof favoriteTables }
    }>();

    function handleInput(event: Event) {
        const target = event.target as HTMLInputElement;
        value = target.value;
        const searchResults = performSearch(value);
        dispatch('searchResults', searchResults);
    }

    function performSearch(term: string) {
        const filteredFavorites = filterTables(favoriteTables, term);
        const filteredCategories = categories.map(category => ({
            ...category,
            tables: filterTables(category.tables, term)
        })).filter(category => category.tables.length > 0);

        return { filteredCategories, filteredFavorites };
    }

    function filterTables<T extends { title: string }>(tables: T[], term: string): T[] {
        return tables.filter(table =>
            table.title.toLowerCase().includes(term.toLowerCase())
        );
    }
</script>

<div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search class="h-5 w-5 text-gray-400" />
    </div>
    <input
            type="text"
            {placeholder}
            bind:value
            on:input={handleInput}
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400 bg-white shadow-sm transition-all duration-150 ease-in-out"
    />
</div>