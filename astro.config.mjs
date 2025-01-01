// @ts-check
import { defineConfig } from "astro/config"
import monospaceDark from "./src/monospace-dark.json"
import monospaceLight from "./src/monospace-light.json"

// https://astro.build/config
export default defineConfig({
	site: "https://jack.cab",
	markdown: {
		shikiConfig: {
			themes: {
				dark: monospaceDark,
				light: monospaceLight
			}
		}
	}
})
