<script lang="ts">
	import config from '$lib/data/config';
	import Seo from '$lib/components/Seo.svelte';

	import Lorem from './Lorem.svelte';
	import Image from '$lib/page/Image.svelte';
	import { page } from '$app/stores';

	let title = 'Home';

	$: if ($page.url.hash === '') {
		title = 'Home';
	} else if ($page.url.hash === '#technologies') {
		title = 'Technologies';
	} else if ($page.url.hash === '#tools-and-frameworks') {
		title = 'Tools and Frameworks';
	}
</script>

<svelte:head>
	<title>{title} | {config.title}</title>
	<link rel="canonical" href="{config.base}/" />
	<meta name="description" content={config.description} />
</svelte:head>

<Seo title="Home" />

<section>
	<div class="card lg:card-side w-[80%] mx-auto bg-base-100 shadow-xl mt-8 mb-8 glass">
		<figure>
			<Image />
		</figure>
		<div class="card-body">
			<div class="flex lg:flex-row flex-col gap-x-2">
				<h2 class="card-title">Hello there, I'm</h2>
				<h2 class="card-title text-accent">realSkyQuest</h2>
			</div>
			<p>
				I have been programming for around <span class="text-accent">5 years</span>, and primarily
				work on <span class="text-success">front-end</span> web development.<br /> With some
				experience in <span class="text-error">back-end</span> web development.
			</p>
		</div>
	</div>
</section>

<section id="technologies">
	<div class="mockup-browser bg-base-300 m-8 mt-[5rem]">
		<div class="mockup-browser-toolbar">
			<div class="input">{config.base}/#technologies</div>
		</div>
		<div class="flex py-4 bg-base-200">
			<article class="typography mx-auto px-2">
				<h2 class="text-primary">Technologies</h2>
				<blockquote class="bg-base-300">Technologies that I have confidence on using</blockquote>
				<Lorem />
			</article>
		</div>
	</div>
</section>

<section id="tools-and-frameworks">
	<div class="mockup-browser bg-base-300 m-8 mt-[5rem] mb-[8rem]">
		<div class="mockup-browser-toolbar">
			<div class="input">{config.base}/#tools-and-frameworks</div>
		</div>
		<div class="flex py-4 bg-base-200">
			<article class="typography mx-auto px-2">
				<h2 class="text-primary">Tools and Frameworks</h2>
				<blockquote class="bg-base-300">Tools and Frameworks that I have confidence on using</blockquote>
				<Lorem />
			</article>
		</div>
	</div>
</section>
