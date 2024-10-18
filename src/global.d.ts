declare module "@marko/run" {
	interface Context {
		image?: [image: string, alt: string]
		title?: string
		description?: string
		bodyClass?: Marko.HTMLAttributes["class"]
	}
}
