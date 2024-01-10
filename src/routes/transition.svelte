<script lang="ts">
	// Svelte
	import { fade } from 'svelte/transition';

	// Ts
	export let url: string;
</script>

{#key url}
	<div class="transition" in:fade>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
