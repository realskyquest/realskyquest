<script lang="ts">
	import Theme from '$lib/components/Theme.svelte';
	import { page } from '$app/stores';
	import { RippleEffect } from '$lib/utils/ripple';
</script>

<div class="drawer lg:drawer-open">
	<input id="main-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content bg-gradient-to-tl from-secondary to-primary">
		<!-- Page content here -->
		<div class="navbar shadow-sm backdrop-blur bg-opacity-70 bg-neutral text-neutral-content sticky top-0 z-30">
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
			<li><a href="/" class="{$page ? ($page.url.hash === '' ? 'active': '') : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Home</a></li>
			<li><a href="#skills" class="{$page ? ($page.url.hash === '#skills' ? 'active': '') : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-projector"><path d="M5 7 3 5"/><path d="M9 6V3"/><path d="m13 7 2-2"/><circle cx="9" cy="13" r="3"/><path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"/><path d="M16 16h2"/></svg>Skills</a></li>
			<li><a href="#education" class="{$page ? ($page.url.hash === '#education' ? 'active': '') : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Education</a></li>
			<li><a href="#contact" class="{$page ? ($page.url.hash === '#contact' ? 'active': '') : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg>Contact</a></li>
		</ul>
	</div>
</div>
