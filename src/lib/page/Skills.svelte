<script lang="ts">
	import config from '$lib/data/config';
</script>

<section id="skills">
	<div class="mockup-browser bg-base-300 m-8 mt-[5rem]">
		<div class="mockup-browser-toolbar">
			<div class="input">{config.base}/#skills</div>
		</div>
		<div class="flex flex-col py-4 bg-base-200">
			<article class="typography mx-auto px-2">
				<h2 class="text-primary px-8">SKILLS</h2>
			</article>
			<div class="overflow-x-auto bg-base-100 mr-4 ml-4 mt-6">
				<table class="table">
					<!-- head -->
					<thead>
						<tr>
							<th>Languages & Libraries</th>
							<th>Applications</th>
							<th>Platforms</th>
						</tr>
					</thead>
					<tbody>
						<!-- row 1 -->
						<tr class="hover">
							<td>HTML</td>
                            <td>VSCODE</td>
                            <td>GITHUB</td>
						</tr>
						<!-- row 2 -->
						<tr class="hover">
                            <td>CSS</td>
                            <td>GITHUB DESKTOP</td>
                            <td>CLOUDFLARE</td>
						</tr>
						<!-- row 3 -->
						<tr class="hover">
                            <td>JAVASCRIPT/TYPESCRIPT</td>
                            <td>GIMP/KRITA</td>
						</tr>
                        <!-- row 4 -->
						<tr class="hover">
                            <td>SVELTE</td>
						</tr>
                         <!-- row 5 -->
						<tr class="hover">
                            <td>TAILWINDCSS/DAISYUI</td>
						</tr>
                         <!-- row 6 -->
						<tr class="hover">
                            <td>LUA</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>
