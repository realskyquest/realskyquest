import { browser } from '$app/environment';
import { themeHandler } from '$lib/theme/theme';

export const prerender = true;

// Return current page url
export async function load({ url }) {
	if (browser) {
		themeHandler.Init();
	}

	return {
		url: url.pathname
	};
}
