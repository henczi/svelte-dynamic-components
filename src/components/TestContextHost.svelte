<script>
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    const val = writable(0);

    setContext('TestContextValKey', val)

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