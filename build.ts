import { $, Glob } from "bun"
import { readFile, writeFile } from "fs/promises"
import subsetFont from "subset-font"
import quotes from "./src/quotes.json"

await $`marko-run build`
await $`cp -r ./public/. ./dist`
await $`mv ./dist/404/index.html ./dist/404.html`
await $`rmdir ./dist/404`

const fonts = new Glob("dancing-script-*.woff*")

for await (const file of fonts.scan("./dist/assets/")) {
	writeFile(
		`./dist/assets/${file}`,
		await subsetFont(
			await readFile(`./dist/assets/${file}`),
			quotes.join("\n") + "Jack Wavesmiley",
		),
	)
}
