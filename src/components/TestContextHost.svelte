<script context="module">
    import { setContext, getContext } from 'svelte';
    import { writable } from 'svelte/store';

    const key = {};

    function createAndSetValStore() {
        const val = writable(0);
        setContext(key, val)
        return val;
    }
    export function getValStore() {
        return getContext(key);
    }
</script>

<script>


    const val = createAndSetValStore();
    export let GenericComponent;
    export let guest;
    export let value;
</script>

<button on:click={() => $val++}>
    Increment value: {$val}
</button>

<div style="padding:1rem;text-align:center;box-sizing:border-box">
    --- GUEST START ---
    <GenericComponent bind:data={guest} bind:value={value}>
    </GenericComponent>
    --- GUEST END ---
</div>