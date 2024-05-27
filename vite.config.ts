import { defineConfig } from "vite"
import { Mode, plugin as markdown } from "vite-plugin-markdown"
import marko from "@marko/run/vite"
import staticAdapter from "@marko/run-adapter-static"

export default defineConfig({
	plugins: [
		marko({ adapter: staticAdapter() }),
		markdown({
			mode: [Mode.HTML],
		}),
	],
})
