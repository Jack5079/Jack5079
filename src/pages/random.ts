export const prerender = false

export async function GET() {
	let number = Math.random()
	return new Response(
		JSON.stringify({
			number,
			message: `Here's a random number: ${number}`,
		})
	)
}
