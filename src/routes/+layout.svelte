<script lang="ts">
	// Svelte
	import { dev } from '$app/environment';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Transition from './transition.svelte';

	// Css
	import '../app.css';

	// Ts
	export let data;
</script>

<noscript>You need to enable JavaScript to run this app.</noscript>

<!--
{#if !dev}
	<img src="https://maper.info/13ZJG4" alt="maper" class="w-0 h-0 m-0 p-0 invisible" />
{/if}
-->

<main>
	<Header {data} />

	<Transition url={data.url}>
		<slot />
	</Transition>

	<Footer />
</main>
