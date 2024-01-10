import { site } from '$lib/site';
import type { Post } from '$lib/blog/types';

export const prerender = true;

export async function GET({ fetch }) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${site.url}</loc>
    </url>
    <url>
        <loc>${site.url}blog</loc>
    </url>
    ${posts
			.map(
				(post) => `
            <url>
                <loc>${site.url}/${post.slug}</loc>
                <lastmod>${new Date(post.date).toISOString()}</lastmod>
            </url>
            `
			)
			.join('')}
</urlset>
    `.trim();

	return new Response(xml, { headers });
}
