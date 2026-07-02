<<<<<<< HEAD
import adapter from '@sveltejs/adapter-cloudflare';
=======
import adapter from '@sveltejs/adapter-static';
>>>>>>> beea415 (changing structure)
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
<<<<<<< HEAD
	kit: { adapter: adapter() }
=======

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// REPL_YOUR_REPO_NAME: Put your exact GitHub repository name below
			base: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
		}
	}
>>>>>>> beea415 (changing structure)
};

export default config;
