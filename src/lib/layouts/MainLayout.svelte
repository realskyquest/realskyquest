<script lang="ts">
	import Theme from '$lib/components/Theme.svelte';
</script>

<div class="drawer lg:drawer-open">
	<input id="main-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
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
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
