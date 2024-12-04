import { $ } from "bun"
await $`marko-run build`

// Marko Run outputs a 404/index.html. Cloudflare Pages expects a 404.html. No setting to fix this.
await $`mv ./dist/404/index.html ./dist/404.html`
await $`rmdir ./dist/404`