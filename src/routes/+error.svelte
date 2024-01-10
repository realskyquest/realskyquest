<script>
	import Metatags from '$lib/seo/Metatags.svelte';
	import { page } from '$app/stores';
</script>

<Metatags
	canonical="https://realskyquest.pages.dev/404"
	title="Home | realSkyQuest"
	description="404 not found"
	keywords="404, not found"
	robots="noindex, nofollow"
	image="/404banner.jpg"
/>

<article class="prose mt-4 ml-4">
	<h1>{$page.status}</h1>
	<p>{$page.error?.message}</p>
</article>

<div class="h-[56vh]" />
