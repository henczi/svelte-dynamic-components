<script>
    import { setContext } from "svelte";
    import GenericComponent from "./GenericComponent.svelte";
    import EditorGenericComponent from "./EditorGenericComponent.svelte";
    export let isEditor = false;
    export let data;
    export let value;

    let Component = isEditor ? EditorGenericComponent : GenericComponent;

    setContext('GenericComponent', Component);
</script>

<Component {data} bind:value></Component>