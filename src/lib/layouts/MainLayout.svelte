<script lang="ts">
	import Theme from '$lib/components/Theme.svelte';
	import { page } from '$app/stores';
	import { RippleEffect } from '$lib/utils/ripple';

	let link1: HTMLAnchorElement;
	let link2: HTMLAnchorElement;
	let link3: HTMLAnchorElement;

	$: if (link1 && link2 && link3) {
		link1.addEventListener('click', (event: MouseEvent) =>
			RippleEffect(event as MouseEvent, false)
		);
		link2.addEventListener('click', (event: MouseEvent) =>
			RippleEffect(event as MouseEvent, false)
		);
		link3.addEventListener('click', (event: MouseEvent) =>
			RippleEffect(event as MouseEvent, false)
		);
	}
</script>

<div class="drawer lg:drawer-open">
	<input id="main-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content bg-gradient-to-tl from-secondary to-primary">
		<!-- Page content here -->
		<div class="navbar bg-neutral text-neutral-content sticky top-0 z-30">
			<div class="flex-none">
				<label for="main-drawer" class="btn btn-ghost drawer-button lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-5 h-5 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path></svg
					>
				</label>
			</div>
			<div class="flex-1">
				<a class="btn btn-ghost text-xl" href="/">realSkyQuest</a>
			</div>
			<div class="flex-none">
				<Theme />
			</div>
		</div>

		<slot />

		<footer class="footer footer-center p-4 bg-base-300 text-base-content">
			<aside>
				<p>Copyright © 2024 - realSkyQuest</p>
			</aside>
		</footer>
	</div>
	<div class="drawer-side z-40">
		<label for="main-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<li><a bind:this={link1} href="/" class="ripple {$page ? ($page.url.hash === '' ? 'active': '') : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Home</a></li>
			<li><a bind:this={link2} href="#skills" class="ripple {$page ? ($page.url.hash === '#skills' ? 'active': '') : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-projector"><path d="M5 7 3 5"/><path d="M9 6V3"/><path d="m13 7 2-2"/><circle cx="9" cy="13" r="3"/><path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"/><path d="M16 16h2"/></svg>Skills</a></li>
			<li><a bind:this={link3} href="#education" class="ripple {$page ? ($page.url.hash === '#education' ? 'active': '') : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Education</a></li>
		</ul>
	</div>
</div>
