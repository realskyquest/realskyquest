import { dev } from '$app/environment';

// Basic site information
const url: string = dev ? 'http://localhost:5173/' : 'https://realskyquest.pages.dev/';
const name: string = 'realSkyQuest';
const description: string =
	'I am a young software engineer called realSkyQuest, welcome to my website.';
const author: string = 'realSkyQuest';

// Export
export const site: siteConfig = {
	name: name,
	description: description,
	url: url,
	author: author
};

// Typescript
interface siteConfig {
	name: string;
	description: string;
	url: string;
	author: string;
}
