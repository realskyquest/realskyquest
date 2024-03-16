<script>
	import { page } from '$app/stores';
	import config from '$lib/data/config';

	const title = `404 Not Found`;
</script>

<svelte:head>
	<title>404 Not Found</title>
	<link rel="canonical" href="{config.base}/404" />
    <meta name="description" content="404 Not Found" />

	<meta name="robots" content="noindex" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={config.title} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={config.description} />
    <meta name="twitter:image" content="/assets/404banner.jpeg" />
    <meta name="twitter:image:alt" content="Website banner" />

    <meta property="og:site_name" content={config.title} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:url" content={config.base} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={config.description} />

	<meta property="og:image" content="/assets/404banner.jpeg" />
	<meta property="og:image:width" content="1000" />
	<meta property="og:image:height" content="500" />
	<meta property="og:image:alt" content="Website banner" />
</svelte:head>

<article class="typography mt-[30vh] w-[50%] text-center mx-auto">
	<h1>{$page.status}</h1>
	<p>{$page.error?.message}</p>
</article>

<div class="h-[56vh]" />