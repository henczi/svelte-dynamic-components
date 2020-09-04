<script>
	import GenericComponent from "./base/GenericComponent.svelte";

  let data = {
    component: "List",
    children: [
      { component: "TextInput" },
      { component: "TextInput" },
      { component: "TextInput" },
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
    ],
  };

	let value;
	
	$: console.log(value)
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
  .form-area {
    height: 70vh;
  }
  .value-area {
    height: 30vh;
  }
</style>

<div class="wrapper">
  <div class="main">
    <GenericComponent {data} bind:value />
  </div>
  <div class="sidebar">
    <textarea
      class="form-area"
      value={JSON.stringify(data, undefined, '  ')}
      on:change={(e) => (data = JSON.parse(e.target.value))} />
    <textarea
      class="value-area"
      value={JSON.stringify(value, undefined, '  ')}
      on:change={(e) => (value = JSON.parse(e.target.value))} />
  </div>
</div>
