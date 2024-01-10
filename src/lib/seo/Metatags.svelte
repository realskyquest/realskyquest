<script lang="ts">
	import { site } from '../site';
	import { serializeSchema } from './serializeSchema';
	import type { Schema } from './serializeSchema';

	export const url: string = site.url;
	export const author: string = site.author;

	export let canonical: string = '';
	export let title: string = '';
	export let description: string = '';
	export let keywords: string = '';
	export let robots: string = '';
	export let image: string = '';

	export let websiteOrArticle: 'website' | 'article' = 'website';

	const JSON_LD: Schema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': `${url}#organization`,
		url: url,
		name: author,
		description: description,
		sameAs: ['https://github.com/realskyquest/'],
		logo: `${url}/favicon.png`
	};

	const metatags: string = `
<title>${title}</title>
<meta name="description" content="${description}"/>
<meta name="keywords" content="${keywords}"/>
<meta name="robots" content="${robots}"/>
<meta name="generator" content="Sveltekit" />
<meta name="author" content="${author}" />
<link rel="canonical" href="${canonical}">

<meta property="og:type" content="${websiteOrArticle}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}"/>
<meta property="og:image" content="${image}" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${canonical}" />
<meta property="twitter:title" content="${title}" />
<meta property="twitter:description" content="${description}"/>
<meta property="twitter:image" content="${image}" />
    `;
</script>

<svelte:head>
	{@html metatags}
	{@html serializeSchema(JSON_LD)}
</svelte:head>
