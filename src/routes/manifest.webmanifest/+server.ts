import config from '$lib/data/config';
import type { RequestHandler } from '@sveltejs/kit';
import { Hono } from 'hono';

export const prerender: boolean = true;

const app = new Hono();

app.get('/', (c) => {
	return c.body(JSON.stringify(config.pwa, null, 2), 200, {
		'Content-Type': 'application/manifest+json'
	});
});

const api = new Hono().route('/manifest.webmanifest', app);

export const GET: RequestHandler = ({ request }) => api.fetch(request);
