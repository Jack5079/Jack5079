import { $, Glob } from "bun"
import { readFile, writeFile } from "fs/promises"
import subsetFont from "subset-font"
import quotes from "./src/routes/_index/quotes.json"

await $`marko-run build`

// Marko Run outputs a 404/index.html. Cloudflare Pages expects a 404.html. No setting to fix this.
await $`mv ./dist/404/index.html ./dist/404.html`
await $`rmdir ./dist/404`

// Dancing Script is used in the Philosophy section. Not all glyphs are used, so subset the font.
const fonts = new Glob("dancing-script-*.woff*")

for await (const file of fonts.scan({
	absolute: true,
	cwd: "./dist/assets/",
})) {
	writeFile(
		file,
		await subsetFont(
			await readFile(file),
			quotes.join("\n") + "Jack Wavesmiley",
		),
	)
}
