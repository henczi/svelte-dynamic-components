import GenericComponent from './base/GenericComponent.svelte';
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export { GenericComponent };
export default app;