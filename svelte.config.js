import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Served from a GitHub Pages project subpath: username.github.io/climatecommitmentrefs
// If this ever moves to a user/org root or a custom domain, set base to ''.
const base = process.env.NODE_ENV === 'production' ? '/climatecommitmentrefs' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base
		}
	}
};

export default config;
