import { writable, type Writable } from 'svelte/store';
import { systemTheme } from './systemTheme';

const CreateThemeHandler = () => {
	const store: Writable<string> = writable();

	// Checked if theme is saved ? use saved theme : use system theme
	function Init() {
		const savedTheme: string | null = localStorage.getItem('data-theme');

		if (savedTheme) {
			store.set(savedTheme);
		} else {
			systemTheme.subscribe((value) => {
				if (value) {
					store.set(value);
				}
			});
		}
	}

	// Change theme ? save to local storage && set theme
	function ChangeTheme(newTheme: string) {
		localStorage.setItem('data-theme', newTheme);
		store.set(newTheme);
	}

	// Return current theme
	function GetTheme() {
		let theme: string = '';
		store.update((value) => (theme = value));
		return theme;
	}

	return {
		subscribe: store.subscribe,
		Init,
		ChangeTheme,
		GetTheme
	};
};

// Creates a new handler
export const themeHandler = CreateThemeHandler();
