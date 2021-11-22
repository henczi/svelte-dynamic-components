<script>
    import { getValStore } from "././TestContextHost.svelte"; // Note: '././' -> preserve relative import

    const val = getValStore();
</script>

<button on:click={() => $val++}>
    Increment value: {$val}
</button>
