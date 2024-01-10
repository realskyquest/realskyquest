<script lang="ts">
	import './picture.css';

	export let alt: string;
	export let loading: 'eager' | 'lazy' = 'eager';
	export let fetchpriority: 'high' | 'low' | 'auto' = 'auto';
	export let image: OutputMetadata;
	export let blurImage: string;
	export let srcsetAvif: string;
	export let srcsetWebp: string;
	export let css: string;
	export let size: string;

	let width: string = size.split(';')[0];
	let height: string = size.split(';')[1];

	interface OutputMetadata {
		src: string; // URL of the generated image
		width: number; // Width of the image
		height: number; // Height of the image
		format: string; // Format of the generated image

		// The following options are the same as sharps input options
		space: string; // Name of colour space interpretation
		channels: number; // Number of bands e.g. 3 for sRGB, 4 for CMYK
		density: number; //  Number of pixels per inch
		depth: string; // Name of pixel depth format
		hasAlpha: boolean; // presence of an alpha transparency channel
		hasProfile: boolean; // presence of an embedded ICC profile
		isProgressive: boolean; // indicating whether the image is interlaced using a progressive scan
	}

	let blurredImagePic: HTMLPictureElement;
	let img: HTMLImageElement;

	function loaded() {
		blurredImagePic.classList.remove('animate-pulse');
		blurredImagePic.style.backgroundImage = '';
		blurredImagePic.classList.add('loaded');
	}

	$: if (blurredImagePic && img) {
		if (img.complete) {
			loaded();
		} else {
			img.addEventListener('load', loaded);
		}
	}
</script>

{#if size === 'auto'}
	<picture
		bind:this={blurredImagePic}
		class="blurred-img animate-pulse"
		style="background-image: url({blurImage});"
	>
		<source srcset={srcsetAvif} type="image/avif" />
		<source srcset={srcsetWebp} type="image/webp" />
		<img
			bind:this={img}
			{alt}
			{loading}
			{fetchpriority}
			src={image.src}
			width={image.width}
			height={image.height}
			class={css}
		/>
	</picture>
{:else if width && height}
	<picture
		bind:this={blurredImagePic}
		class="blurred-img animate-pulse"
		style="background-image: url({blurImage});"
	>
		<source srcset={srcsetAvif} type="image/avif" />
		<source srcset={srcsetWebp} type="image/webp" />
		<img
			bind:this={img}
			{alt}
			{loading}
			{fetchpriority}
			src={image.src}
			{width}
			{height}
			class={css}
		/>
	</picture>
{/if}
