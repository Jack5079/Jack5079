import rss from "@astrojs/rss"

import type { APIContext } from "astro"
import { getCollection } from "astro:content"

export async function GET(context: APIContext) {
	const blog = await getCollection("blog")
	return rss({
		title: "jack.cab/blog/",
		description: "Decompressed posting",
		// I WANT TRAILING SLASH ON JACK.CAB/BLOG/ BUT NOT TRAILING SLASH ON JACK.CAB/BLOG/ARTICLE
		site: new URL("/blog/", context.site!),
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			// Compute RSS link from post `id`
			// This example assumes all posts are rendered as `/blog/[id]` routes
			link: `/blog/${post.id}`,
			content: post.rendered!.html,
		})),
		trailingSlash: false,
		customData: `<language>en-us</language>`,
		stylesheet: "/feed.xsl",
	})
}
