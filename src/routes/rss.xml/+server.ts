import { site } from '$lib/site';
import type { Post } from '$lib/blog/types';

export const prerender = true;

export async function GET({ fetch }) {
	const response1 = await fetch('api/posts');
	const posts1: Post[] = await response1.json();

	const response2 = await fetch('api/projects');
	const posts2: Post[] = await response2.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
	<channel>
		<title>${site.name}</title>
		<description>${site.description}</description>
		<link>${site.url}</link>
		<atom:link href="${site.url}rss.xml" rel="self" type="application/rss+xml"/>
		${posts1
			.map(
				(post) => `
				<item>
					<title>${post.title}</title>
					<description>${post.description}</description>
					<link>${site.url}${post.slug}</link>
					<guid isPermaLink="true">${site.url}${post.slug}</guid>
					<pubDate>${new Date(post.date).toUTCString()}</pubDate>
				</item>
				`
			)
			.join('')}
		${posts2
			.map(
				(post) => `
				<item>
					<title>${post.title}</title>
					<description>${post.description}</description>
					<link>${site.url}${post.slug}</link>
					<guid isPermaLink="true">${site.url}${post.slug}</guid>
					<pubDate>${new Date(post.date).toUTCString()}</pubDate>
				</item>
				`
			)
			.join('')}
	</channel>
</rss>
	`.trim();

	return new Response(xml, { headers });
}
