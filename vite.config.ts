import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from "node:path";

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	server: {
		fs: {
			allow: [
				// Add the path to your static folder
				path.resolve(__dirname, 'static')
			]
		}
	},
	// Optionally, you can also add this to ensure all assets are treated correctly
	assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
});