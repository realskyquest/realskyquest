<script lang="ts">
	import config from '$lib/data/config';
	import { page } from '$app/stores';
	import Seo from '$lib/components/Seo.svelte';

	import Image from '$lib/components/image/Image.svelte';

	import Skills from '$lib/page/Skills.svelte';
	import Education from '$lib/page/Education.svelte';

	let title = 'Home';

	$: if ($page.url.hash === '') {
		title = 'Home';
	} else if ($page.url.hash === '#skills') {
		title = 'Skills';
	} else if ($page.url.hash === '#education') {
		title = 'Education';
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
				<br />
				<br />
				I first started programming in 2019, using Roblox (Lua) to create mini-games. After that, I started
				using Python to do niche tasks and QB64 (basic) to play around with 2D graphics.
				<br />
				<br />
				Eventually, I started exploring other languages such as C, C++, C#, Godot (GDscript), Rust, and
				VBasic. Soon, I went into web development with the support of my friends and other developers
				who helped me on various issues and tasks.
			</p>
		</div>
	</div>
</section>

<Skills />
<Education />

<section>
	<div class="mockup-browser bg-base-300 m-8 mb-[5rem]">
		<div class="mockup-browser-toolbar">
			<div class="input">{config.base}/#contact</div>
		</div>
		<div class="flex flex-col py-4 bg-base-200">
			<article class="typography mx-auto px-2">
				<h2 class="text-primary px-8">CONTACT</h2>
			</article>
			<div class="flex justify-center gap-x-4 mt-6 mb-4">
				<a href="https://github.com/realskyquest/" target="_blank"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="48"
						height="48"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-github"
						><path
							d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
						/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
					></a
				>
				<a href="mailto:connectSkyQuest@outlook.com"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="48"
						height="48"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-mail"
						><rect width="20" height="16" x="2" y="4" rx="2" /><path
							d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
						/></svg
					></a
				>
			</div>
		</div>
	</div>
</section>
