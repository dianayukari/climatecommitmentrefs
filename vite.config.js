import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		watch: {
			// A stray fsevents@1 in ~/node_modules (an orphaned npm project in the
			// home dir) gets resolved by the dev watcher and crashes on Node 24
			// (`fsevents.watch is not a function`). Skip fsevents and use Node's
			// own fs.watch instead — no native build, works everywhere.
			useFsEvents: false
		}
	}
});
