import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { imagetools } from 'vite-imagetools';
import delegateEvents from "svelte-preprocess-delegate-events/preprocess";

export default defineConfig({
	plugins: [imagetools(), delegateEvents(), sveltekit()]
});
