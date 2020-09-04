<script>
	import { tick } from 'svelte';
	import { selection } from './editor-bridge.js';
    import ViewRoot from "./ViewRoot.svelte";

    let data;
    let value;

    let callback;

    let show = true;

    selection.changed = async function(d, cb) {
        value = undefined; // do not use old values
        data = d;
        callback = cb;
        show = false;
        await tick(); // TODO
        show = true;
    }

    $: if (callback) callback(value);

</script>

{#if show}
<ViewRoot {data} bind:value ></ViewRoot>
{/if}