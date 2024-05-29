import { file } from "bun"
const fyle = file(
	`${import.meta.dirname}/node_modules/@marko/run-adapter-static/dist/index.js`,
)
await Bun.write(
	fyle,
	(await fyle.text()).replace(
		`htmlparser2/lib/WritableStream"`,
		`htmlparser2/lib/WritableStream.js"`,
	),
)
