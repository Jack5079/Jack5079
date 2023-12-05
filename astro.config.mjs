import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	site: "https://jack.cab",
	integrations: [mdx(), sitemap()],
	output: "static",
	server: {
		headers: {
			"Content-Security-Policy": "sandbox allow-scripts allow-popups allow-forms allow-same-origin",
			"Cross-Origin-Opener-Policy": "same-origin",
			"Cross-Origin-Embedder-Policy": "unsafe-none", // `Cross-Origin-Embedder-Policy` is unsafe-none because the Increment badge doesn't have CORS yet
		},
	},
})
