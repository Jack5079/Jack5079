// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content"

// 2. Import loader(s)
import { glob } from "astro/loaders"

// 3. Define your collection(s)
const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.optional(z.string()),
			image: z.optional(
				z.object({
					src: image(),
					alt: z.string(),
					pixelated: z.boolean().optional(),
				})
			),
			bluesky: z.string().optional(),
			date: z.date(),
			blinding: z.boolean().optional()
		}),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog }
