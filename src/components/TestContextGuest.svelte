<script>
    import { getContext } from 'svelte';

    const val = getContext('TestContextValKey')
</script>

<button on:click={() => $val++}>
    Increment value: {$val}
</button>
