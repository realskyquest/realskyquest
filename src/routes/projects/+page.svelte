<script lang="ts">
	import Metatags from '$lib/seo/Metatags.svelte';
	import { formatDate } from '$lib/utils';
	import { site } from '$lib/site.js';

	export let data;
</script>

<Metatags
	canonical={data.url === '/'
		? site.url
		: `${site.url.substring(0, site.url.length - 1)}${data.url}`}
	title="Blog | realSkyQuest"
	description="Welcome to my Projects."
	keywords="projects"
	robots="index, follow"
	image="/banner.jpg"
/>

<!-- Breadcrumbs navigation -->
<div class="ml-8">
	<div class="max-w-xs text-sm breadcrumbs">
		<ul>
			<li><a href="/">Home</a></li>
			<li>Projects</li>
		</ul>
	</div>
</div>

<!-- Projects -->
<section class="m-4">
	<div class="mockup-browser border bg-base-300">
		<div class="mockup-browser-toolbar">
			<div id="tools-and-frameworks" class="input">{site.url}projects</div>
		</div>
		<div class="px-4 py-16 bg-base-200">
			<div>
				<article class="prose mx-auto">
					<h1 class="text-center">Welcome to my Projects!</h1>
					<blockquote class="text-center">
						<p>Projects are listed down there.</p>
					</blockquote>
				</article>
				<div class="flex flex-col gap-y-4">
					{#each data.posts as post}
						<div class="mockup-code">
							<pre data-prefix="$" class="bg-success text-success-content"><code
									><a href={post.slug}>{post.title}</a></code
								></pre>
							<pre data-prefix=">" class="text-warning"><code>{formatDate(post.date)}</code></pre>
							<pre data-prefix=">"><code>{post.description}</code></pre>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
