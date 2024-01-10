import { readable, type Readable } from 'svelte/store';

export const systemTheme: Readable<string> = readable('', function start(set) {
	const getSystemTheme: MediaQueryList = matchMedia('(prefers-color-scheme: dark)');

	function Init() {
		// Get current system theme && Get saved theme
		const currentSystemTheme: MediaQueryList = matchMedia('(prefers-color-scheme: dark)');
		const dataTheme = localStorage.getItem('data-theme');

		if (!dataTheme) {
			if (currentSystemTheme.matches) {
				set('dark');
			} else {
				set('light');
			}
		}
	}

	Init();
	getSystemTheme.addEventListener('change', Init);
});
