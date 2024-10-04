import { $, Glob } from "bun"
import { readFile, writeFile } from "fs/promises"
import subsetFont from "subset-font"
import quotes from "./src/routes/_index/quotes.json"

await $`marko-run build`
await $`cp -r ./public/. ./dist`
await $`mv ./dist/404/index.html ./dist/404.html`
await $`rmdir ./dist/404`

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
