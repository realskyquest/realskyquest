import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { imagetools } from 'vite-imagetools';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
	plugins: [imagetools(), sveltekit(), splitVendorChunkPlugin()]
});
