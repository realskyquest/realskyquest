<script lang="ts">
	import { imagesJSON } from '$lib/data/images';
	const image = imagesJSON['/src/images/banner.jpg'];
	const sizes = `${500}px`;
</script>

<picture>
	<source {sizes} srcset={image.avif} type="image/avif" />
	<source {sizes} srcset={image.webp} type="image/webp" />
	<img
		alt="Banner for website"
		loading="eager"
		decoding="async"
		{sizes}
		src={image.src}
		srcset={image.jpeg}
		width="{500}px"
		height="{250}px"
		style="object-fit: cover; width: {500}px; height: {250}px;"
		class="rounded-box px-2 mt-2 lg:rounded-none lg:px-0 lg:mt-0"
	/>
</picture>
