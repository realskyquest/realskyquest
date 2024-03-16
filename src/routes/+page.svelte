<script lang="ts">
	import config from '$lib/data/config';
	import Seo from '$lib/components/Seo.svelte';

    import Lorem from './Lorem.svelte';
</script>

<svelte:head>
	<title>Home | {config.title}</title>
    <link rel="canonical" href="{config.base}/" />
    <meta name="description" content={config.description} />
</svelte:head>

<Seo title="Home" />

<section>
    <Lorem></Lorem>
</section>