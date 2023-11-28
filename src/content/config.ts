import { defineCollection, z } from "astro:content"

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform(val => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform(str => (str ? new Date(str) : undefined)),
			image: z
				.tuple([
					image(),
					z.string({
						description: "Alt text for image",
					}),
				])
				.optional(),
		}),
})

export const collections = { blog }
