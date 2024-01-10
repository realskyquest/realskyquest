<script lang="ts">
	// Svelte
	import { fade } from 'svelte/transition';
	import { site } from '$lib/site.js';
	import Metatags from '$lib/seo/Metatags.svelte';
	import Picture from '$lib/components/Picture.svelte';
	import Typewriter from 'svelte-typewriter';

	// Ts
	export let data;

	let viewCard: number;

	// Banner Image
	import bannerAvif from '$lib/images/banner.jpg?format=avif&as=metadata';
	import bannerAvifM from '$lib/images/banner-m.jpg?format=avif&as=metadata';
	import bannerAvifS from '$lib/images/banner-s.jpg?format=avif&as=metadata';

	import bannerWebp from '$lib/images/banner.jpg?format=webp&as=metadata';
	import bannerWebpM from '$lib/images/banner-m.jpg?format=webp&as=metadata';
	import bannerWebpS from '$lib/images/banner-s.jpg?format=webp&as=metadata';

	const bannerAvifSrcset: string = `${bannerAvif.src} ${bannerAvif.width}w, ${bannerAvifM.src} ${bannerAvifM.width}w, ${bannerAvifS.src} ${bannerAvifS.width}w`;
	const bannerWebpSrcset: string = `${bannerWebp.src} ${bannerWebp.width}w, ${bannerWebpM.src} ${bannerWebpM.width}w, ${bannerWebpS.src} ${bannerWebpS.width}w`;

	import banner from '$lib/images/banner.jpg?as=metadata';
</script>

<Metatags
	canonical={data.url === '/'
		? site.url
		: `${site.url.substring(0, site.url.length - 1)}${data.url}`}
	title="Home | realSkyQuest"
	description="I am a young software engineer called realSkyQuest, welcome to my website."
	keywords="home, web developer, about me, technologies, tools, frameworks, contact"
	robots="index, follow"
	image="/banner.jpg"
/>

<section>
	<div class="hero min-h-[50vh] bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<Picture
				alt="banner"
				loading="eager"
				fetchpriority="high"
				image={banner}
				srcsetAvif={bannerAvifSrcset}
				srcsetWebp={bannerWebpSrcset}
				css="max-w-sm rounded-lg shadow-2xl"
				size="auto"
			/>
			<div>
				<h1 class="text-5xl font-bold">About me!</h1>
				<div class="py-6">
					<Typewriter>
						<p>
							Hello! I'm realSkyQuest, a young programmer with 5 years of experience. I specialize
							in programming and has some experience in user interface, currently expanding my
							skills and knowledge. Also welcome to my website
						</p>
					</Typewriter>
				</div>

				<div class="join join-vertical lg:join-horizontal">
					<a
						type="button"
						href="#technologies"
						class="btn btn-primary join-item"
						title="Technologies"
						on:click={() => (viewCard = crypto.getRandomValues(new Uint32Array(1))[0])}
					>
						Technologies
					</a>
					<a
						type="button"
						href="#tools-and-frameworks"
						class="btn btn-secondary join-item"
						title="Tools and Frameworks"
						on:click={() => (viewCard = crypto.getRandomValues(new Uint32Array(1))[0])}
					>
						Tools and Frameworks
					</a>
					<a type="button" href="/blog" class="btn btn-accent join-item" title="blog">Blog</a>
					<a type="button" href="/projects" class="btn btn-info join-item" title="projects"
						>Projects</a
					>
				</div>

				<article class="prose">
					<a
						href="https://github.com/realskyquest/realskyquest/"
						target="_blank"
						title="source code"
					>
						<p>Website source code</p>
					</a>
				</article>
			</div>
		</div>
	</div>
</section>

<div class="divider"></div>

{#key viewCard}
	<div class="transition" in:fade>
		<!-- Technologies that I have confidence on using -->
		<section class="m-4">
			<div class="mockup-browser border bg-base-300">
				<div class="mockup-browser-toolbar">
					<div id="technologies" class="input">{site.url}technologies</div>
				</div>
				<div class="flex justify-center px-4 py-16 bg-base-200">
					<article class="prose mx-auto">
						<h1 class="text-center">Technologies</h1>
						<blockquote class="text-center">
							<p>Technologies that I have confidence on using</p>
						</blockquote>
						<div class="flex flex-col gap-y-4">
							<div class="card mx-auto bg-base-100 shadow-xl border-2">
								<div class="card-body py-0">
									<h2 class="card-title">HTML</h2>
									<p>
										First programming(<i>I guess?</i>) language, I was introduced to in 2019.<br />
										Later started using css(<i>Not that good at it, but it works!!!</i>)
									</p>
								</div>
							</div>
							<div class="card mx-auto bg-base-100 shadow-xl border-2">
								<div class="card-body py-0">
									<h2 class="card-title">Javascript</h2>
									<p>
										Started to use it around 2021, now I use TypeScript to make debugging easier.
									</p>
								</div>
							</div>
							<div class="card mx-auto bg-base-100 shadow-xl border-2">
								<div class="card-body py-0">
									<h2 class="card-title">Python & Lua</h2>
									<p>
										Started messing around with those two around mid 2021.<br /> Used Roblox Studio and
										Love2d to make games with Lua, although not that much experience with python.
									</p>
								</div>
							</div>
							<div class="card mx-auto bg-base-100 shadow-xl border-2">
								<div class="card-body py-0">
									<h2 class="card-title">Other languages</h2>
									<p>
										Played around with C#, C++, GDscript and Visual programming. Just have some
										basic experience
									</p>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>

		<!-- Tools and frameworks that I have confidence on using -->
		<section class="m-4">
			<div class="mockup-browser border bg-base-300">
				<div class="mockup-browser-toolbar">
					<div id="tools-and-frameworks" class="input">{site.url}tools-and-frameworks</div>
				</div>
				<div class="flex justify-center px-4 py-16 bg-base-200">
					<article class="prose mx-auto">
						<h1 class="text-center">Tools and Frameworks</h1>
						<blockquote class="text-center">
							<p>Tools and frameworks that I have confidence on using</p>
						</blockquote>
						<div class="flex flex-col gap-y-4">
							<div class="card mx-auto bg-base-100 shadow-xl border-2">
								<div class="card-body py-0">
									<h2 class="card-title">Svelte/Sveltekit</h2>
									<p>I use this powerful framework to make my web apps.</p>
								</div>
							</div>
							<div class="card mx-auto bg-base-100 shadow-xl border-2">
								<div class="card-body py-0">
									<h2 class="card-title">Cloudflare & Appwrite</h2>
									<p>
										I use cloudflare to handle hosting and managing my web apps,<br />and appwrite
										is used to handle CRUD operations for the web app.
									</p>
								</div>
							</div>
							<div class="card mx-auto bg-base-100 shadow-xl border-2">
								<div class="card-body py-0">
									<h2 class="card-title">Github & VScode & others</h2>
									<p>
										I use github to store my repositories and VScode as my primary IDE. <br /> Also have
										experience in using other services like Wordpress, npm for Javascript packages.
									</p>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	</div>
{/key}
