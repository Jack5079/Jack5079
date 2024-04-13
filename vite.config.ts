import { defineConfig } from "vite"
import { Mode, plugin as markdown } from "vite-plugin-markdown"

export default defineConfig({
	// plugins: [marko({ adapter: nodeAdapter() })]
	plugins: [
		markdown({
			mode: [Mode.HTML],
		}),
	],
})
