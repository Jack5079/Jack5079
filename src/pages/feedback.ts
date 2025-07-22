export const prerender = false


var spoiler = (text: string) => `||${text}||`
var link = (text: string, url: string) => `[${text}](${url})`
function color(cf: CfProperties) {
	if (cf.country === "T1") return 8210072
	if (cf.asn === 13335) return 15958048
	if (cf.asn === 701 || cf.asn === 6167) return 13435915
	if (cf.asn === 8888) return 16466010
}

function embed(request: Request) {
	const user_agent = request.headers.get("User-Agent")
	return {
		color: color(request.cf!),
		fields: [
			{
				name: "IP",
				value: spoiler(request.headers.get("CF-Connecting-IP")!),
			},
			{
				name: "Coordinates",
				value: spoiler(
					link(
						`${request.cf!.latitude}, ${request.cf!.longitude}`,
						`https://www.google.com/maps/place/${request.cf!.latitude},${request.cf!.longitude}`
					)
				),
			},
			{
				name: "Version",
				value: request.cf!.httpProtocol,
			},
			{
				name: "ASN",
				value: `[AS${request.cf!.asn}](https://bgp.he.net/AS${request.cf!.asn}) (${request.cf!.asOrganization})`,
			},
			user_agent && {
				name: "User agent",
				value: user_agent,
			},
		].filter(Boolean),
	}
}


export async function POST ({ request, locals }) {
	const params = new URLSearchParams(await request.text())
	const content = params.get("text")?.trim()
	const author = params.get("author")?.trim()
	if (params.get("jack") !== "cab") return new Response(null, {status: 400})
	if (!content || content.length > 2e3) return new Response(null, {status: 400})
	if (author && author.length > 64) return new Response(null, {status: 400})

	console.log(
		await fetch(locals.runtime.env.WEBHOOK, {
			body: JSON.stringify({
				username: author || void 0,
				// Discord rejects usernames with empty string
				content,
				embeds: [embed(request)],
				allowed_mentions: {
					parse: [],
				},
			}),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
	)
	return new Response(null, {status: 204})
}