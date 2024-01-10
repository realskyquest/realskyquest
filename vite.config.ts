import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { imagetools } from 'vite-imagetools';
import { splitVendorChunkPlugin } from 'vite';

function includes(str1: string, str2: string): boolean {
	return str1.indexOf(str2) !== -1;
}

export default defineConfig({
	plugins: [imagetools(), sveltekit(), splitVendorChunkPlugin()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id: string) => {
					if (includes(id, 'node_modules')) {
						return 'vendor';
					}
				}
			}
		}
	}
});
