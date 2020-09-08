<script>
	import { tick } from 'svelte';
	import { selection } from './editor-bridge.js';
    import ViewRoot from "./ViewRoot.svelte";

    let data;
    let value;

    let callback;

    selection.changed = async function(configData, cb) {
        if (!configData) {
            value = undefined;
            data = undefined;
            callback = undefined;
            return;
        }
        value = configData.value;
        data = configData.data;
        callback = cb;
    }

    $: if (callback) callback(value);

</script>

<ViewRoot {data} bind:value ></ViewRoot>