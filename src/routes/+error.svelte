<script>
	// src/routes/blog/[slug]/+page.svelte

	import { page } from '$app/stores';
</script>

<article class="prose mt-4 ml-4">
	<h1>{$page.status}</h1>
	<p>{$page.error?.message}</p>
</article>

<div class="h-[56vh]" />
