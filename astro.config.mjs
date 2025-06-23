// @ts-check
import { defineConfig, passthroughImageService, sharpImageService } from "astro/config"
import monospaceDark from "./src/monospace-dark.json"
import monospaceLight from "./src/monospace-light.json"
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { zipSync, strToU8 } from "fflate/node"
import fs from "node:fs/promises"

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

	integrations: [
		sitemap(),
		solidJs(),
		{
			name: "zip polyglot",
			hooks: {
				"astro:build:done": async ({ dir }) => {
					// const sha = (await Bun.$`git rev-parse HEAD`).text().trim()

					// const flakeNixContent = `{outputs=_:builtins.getFlake"github:jack5079/jack5079/${sha}?dir=card";}`
					const flakeNixContent = `{outputs=_:builtins.getFlake"github:jack5079/dotfiles/c518f86921af6b7f5c920a81f1b73e1b41ee91d9";}`
					const files = {
						"flake.nix": strToU8(flakeNixContent),
					}
					const zipBuffer = zipSync(files, {
						level: 0,
					})
					const dirPath = fileURLToPath(dir)
					const htmlPath = path.join(dirPath, "index.html")
					const file = await fs.open(htmlPath, "a")
					await file.appendFile("<!--")
					await file.appendFile(zipBuffer)
					await file.appendFile("-->")
					console.log("Added polyglot")
				},
			},
		},
	],
})
