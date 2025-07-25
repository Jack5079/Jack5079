import button from "../../assets/buttons/jack.png?no-inline"

export const GET = () =>
	Response.json({
		$schema:
			"https://codeberg.org/LunarEclipse/well-known-button/raw/branch/main/drafts/button-2024-06.schema.json",
		default: "jack.cab",
		buttons: [
			{
				id: "jack.cab",
				uri: button,
				alt: "Jack.cab",
				link: "https://jack.cab",
				sha256: "93674850a0e2408ce1e911358cbd58a779d3f7cc9c506fe491db3745684a1e91", // Hardcoded for now
			},
		],
	})
