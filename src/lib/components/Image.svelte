<script lang="ts">
	import { imagesJSON } from '$lib/data/images';
	const image = imagesJSON['/src/images/banner.jpg'];

	const sizesSTR: string = '1000px';
	const widthSTR: string = '1000px';
	const heightSTR: string = '800px';
</script>

<picture>
	<source sizes={sizesSTR} srcset={image.avif} type="image/avif" />
	<source sizes={sizesSTR} srcset={image.webp} type="image/webp" />
	<img
		alt="Banner of author"
		fetchpriority="high"
		loading="eager"
		decoding="async"
		sizes={sizesSTR}
		width={widthSTR}
		height={heightSTR}
		class="rounded-box px-2 mt-2 lg:rounded-none lg:px-0 lg:mt-0 object-cover h-[200px] lg:h-[530px] min-[1100px]:h-[490px] min-[1200px]:h-[440px] min-[1300px]:h-[390px]"
		style="width: {widthSTR};"
		src={image.src}
		srcset={image.jpeg}
	/>
</picture>
