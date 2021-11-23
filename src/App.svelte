<script>
  import ViewRoot from "./base/ViewRoot.svelte";
  import EditorProperties from "./base/EditorProperties.svelte";

  let data = {
    component: "List",
    children: [
      { component: "TextInput", label: "A" },
      { component: "TextInput", label: "A" },
      { component: "TextInput", label: "A" },
      {
        component: "List",
        children: [
          {
            component: "Dropdown",
            options: [
              { value: "alma", label: "Alma" },
              { value: "korte", label: "Körte" },
            ],
          },
        ],
      },
      { component: "Button", text: "Gomb" },
      {
        component: "TestContextHost",
        guest: {
          component: "List",
          children: [
            { component: "TestContextGuest" },
            { component: "TestContextGuest" },
          ],
        },
      },
    ],
  };

  let value;

  let edit = true;

  $: console.log(value);

  // TODO
  function update() {
    data = data;
  }
</script>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  .main {
    width: 70vw;
    height: 100vh;
  }
  .sidebar {
    width: 30vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .properties-panel {
    height: 20vh;
  }
  .form-area {
    height: 60vh;
  }
  .value-area {
    height: 20vh;
  }
  </style>
  
  <div class="wrapper">
  <div class="main">
    {#key edit}
      <ViewRoot isEditor={edit} {data} bind:value />
    {/key}
  </div>
  <div class="sidebar">
    <div class="properties-panel">
      <label>
        <input type="checkbox" bind:checked={edit} />
        Editor?
      </label>
      <hr />
      <EditorProperties />
    </div>
    <textarea
      on:click={update}
      class="form-area"
      value={JSON.stringify(data, undefined, "  ")}
      on:change={(e) => (data = JSON.parse(e.target.value))}
    />
    <textarea
      class="value-area"
      value={JSON.stringify(value, undefined, "  ")}
      on:change={(e) => (value = JSON.parse(e.target.value))}
    />
  </div>
</div>
