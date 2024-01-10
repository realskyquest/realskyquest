<script lang="ts">
	// Svelte
	import { site } from '$lib/site';
	import { themeHandler } from '$lib/theme/theme';

	// Ts
	export let data: any;

	const colorThemes: Array<string> = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasty',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
		'dim',
		'nord',
		'sunset'
	];
	let myTheme: string = themeHandler.GetTheme();

	function handleTheme(theme: string) {
		themeHandler.ChangeTheme(theme);
	}
</script>

<header class={data.url === '/' ? 'fixed top-0 z-30 w-full' : 'top-0 z-30 w-full'}>
	<nav class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden" title="Navbar dropdown">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</div>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a href="/">Home</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="/projects">Projects</a></li>
				</ul>
			</div>
			<a href="/" class="btn btn-ghost text-xl" title="Home">{site.name}</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/">Home</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/projects">Projects</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn m-1" title="Theme controller dropdown">
					Theme
					<svg
						width="12px"
						height="12px"
						class="h-2 w-2 fill-current opacity-60 inline-block"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 2048 2048"
						><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg
					>
				</div>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box h-[28.6rem] max-h-[calc(100vh-10rem)] w-52 overflow-y-scroll"
				>
					{#each colorThemes as theme}
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="theme-controller btn btn-sm btn-block btn-ghost justify-start mr-2 mt-1 border-2 border-primary-content"
								aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
								value={theme}
								bind:group={myTheme}
								on:click={() => handleTheme(theme)}
							/>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
	<div class="mt-0 mb-0 h-0 divider divider-neutral"></div>
</header>

<div class={data.url === '/' ? 'h-[4.4rem]' : 'h-0'} />
