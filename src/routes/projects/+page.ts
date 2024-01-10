import type { Post } from '$lib/blog/types';

export async function load({ fetch }) {
	const response = await fetch('api/projects');
	const posts: Post[] = await response.json();
	return { posts };
}
