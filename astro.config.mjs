// @ts-check
import { defineConfig, passthroughImageService, sharpImageService } from "astro/config"
import monospaceDark from "./src/monospace-dark.json"
import monospaceLight from "./src/monospace-light.json"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	site: "https://jack.cab",
	image: {
		// Astro can't find Sharp when ran with Bun
		service: "Bun" in globalThis ? passthroughImageService() : sharpImageService(),
	},
	build: {
		format: "preserve",
		inlineStylesheets: "always",
	},
	markdown: {
		shikiConfig: {
			themes: {
				dark: monospaceDark,
				light: monospaceLight,
			},
		},
	},

	integrations: [sitemap()],
})
