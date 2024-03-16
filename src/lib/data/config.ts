import { dev } from '$app/environment';

export default {
	title: 'realSkyQuest',
	description: `Hello there, I'm a software engineer called realSkyQuest`,
	base: dev ? 'http://localhost:5173' : 'https://realskyquest.pages.dev',
	pwa: {	
		// https://web.dev/learn/pwa - Learn more | https://www.pwabuilder.com/ - Use to ship PWA to app stores | https://webboard.app/manifest.json - Example
		name: "realSkyQuest",
		short_name: "realSQ",
		start_url: '/',
		id: '/',
		display: 'standalone',
		background_color: '#17191c',
		theme_color: '#ff3f20',
		description: "Download realSkyQuest's website.",
		icons: [
			{
				src: 'pwa-64x64.png',
				sizes: '64x64',
				type: 'image/png'
			},
			{
				src: 'pwa-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: 'pwa-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			},
			{
				src: 'maskable-icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable'
			}
		]
	}
};
