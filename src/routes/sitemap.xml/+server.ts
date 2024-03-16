import config from '$lib/data/config';
import type { RequestHandler } from '@sveltejs/kit';
import { Hono } from 'hono';

export const prerender: boolean = true;

const app = new Hono();

app.get('/', (c) => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${config.base}/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <url>
        <loc>${config.base}/</loc>
        <image:image>
            <image:loc>/assets/banner.jpg</image:loc>
        </image:image>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
</urlset>
    `;

	return c.body(xml, 200, {
		'Content-Type': 'application/xml'
	});
});

const api = new Hono().route('/sitemap.xml', app);

export const GET: RequestHandler = ({ request }) => api.fetch(request);
