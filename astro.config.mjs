// @ts-check
import { defineConfig } from "astro/config"
import monospaceDark from "./src/monospace-dark.json"
import monospaceLight from "./src/monospace-light.json"

import sitemap from "@astrojs/sitemap";

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
	},

  integrations: [sitemap()]
})