<script lang="ts">
	import 'tailwindcss/tailwind.css';
	import '$lib/assets/styles/ripple.css'
	import '$lib/assets/styles/typography.css';
	import '../app.css';

	import config from '$lib/data/config';
	import MainLayout from '$lib/layouts/MainLayout.svelte';

    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'

	import { dev, browser } from '$app/environment';
	
	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;
			newSW?.addEventListener('statechange', () => {
				if (newSW.state == 'installed') {
					if (confirm('New update available! Reload to update?')) {
						newSW.postMessage({ type: 'SKIP_WAITING' });
						window.location.reload();
					}
				}
			});
		});
	}

    onMount(() => {
        themeChange(false)
		if (!dev && browser) {
			detectSWUpdate();
		}
    })
</script>

<!-- Investigate later: https://fagspay.com/feed.json for rss -->

<svelte:head>
	<meta name="author" content="realSkyQuest" />
	<meta name="generator" content="Sveltekit" />

	<link rel="icon" href="/favicon.ico" sizes="48x48" />
	<link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />
	<link rel="mask-icon" href="/pwa-512x512.png" color={config.pwa.background_color} />

	<!-- <link rel="alternate" type="application/atom+xml" href="{config.base}/feed.xml" />
	<link rel="alternate" type="application/json" href="{config.base}/feed.json" /> -->
	<link rel="manifest" href="/manifest.webmanifest" type="application/manifest+json" />

	<script type="application/ld+json">
		// generator: https://technicalseo.com/tools/schema-markup-generator/
		// good guide for seo: https://www.danielkcheung.com/learn/
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "realSkyQuest",
			"alternateName": "realSQ",
			"url": "https://realskyquest.pages.dev",
			"logo": "https://realskyquest.pages.dev/favicon.png"
		}
	</script>
</svelte:head>

<MainLayout>
	<slot />
</MainLayout>
