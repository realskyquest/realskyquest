<script lang="ts">
	import config from "$lib/data/config";

    export let title: string;
</script>

<svelte:head>
    <meta name="robots" content="all" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={config.title} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={config.description} />
    <meta name="twitter:image" content="/assets/banner.jpeg" />
    <meta name="twitter:image:alt" content="Website banner" />

    <meta property="og:site_name" content={config.title} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:url" content={config.base} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={config.description} />

	<meta property="og:image" content="/assets/banner.jpeg" />
	<meta property="og:image:width" content="1000" />
	<meta property="og:image:height" content="500" />
	<meta property="og:image:alt" content="Website banner" />
</svelte:head>