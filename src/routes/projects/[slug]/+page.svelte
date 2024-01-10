<script lang="ts">
	// Svelte
	import Metatags from '$lib/seo/Metatags.svelte';
	import { site } from '$lib/site.js';
	import { formatDate } from '$lib/utils';
	import { readingTime } from 'reading-time-estimator';

	// Ts
	export let data;

	// Handle reading time
	let postReadingTime: readingTimeJSON;
	let postReadingTimeString: string;

	interface readingTimeJSON {
		minutes: number;
		text: string;
		words: number;
	}

	$: if (postReadingTimeString) {
		postReadingTime = readingTime(postReadingTimeString);
	}
</script>

<Metatags
	websiteOrArticle="article"
	canonical={data.url === '/'
		? site.url
		: `${site.url.substring(0, site.url.length - 1)}${data.url}`}
	title={data.meta.title + ' | realSkyQuest'}
	description={data.meta.description}
	keywords={data.meta.categories}
	robots="index, follow"
	image={data.meta.image}
/>

<!-- Breadcrumbs navigation -->
<div class="ml-8">
	<div class="max-w-xs text-sm breadcrumbs">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/projects">Projects</a></li>
			<li>{data.meta.title}</li>
		</ul>
	</div>
</div>

<section class="m-4">
	<article class="prose mx-auto">
		<h1 class="text-center">{data.meta.title}</h1>
		<p>
			{postReadingTime ? postReadingTime.text : ''}
			- {formatDate(data.meta.date)}
		</p>
		<div class="prose mx-auto" contenteditable="false" bind:innerText={postReadingTimeString}>
			<svelte:component this={data.content} />
		</div>
	</article>
</section>
