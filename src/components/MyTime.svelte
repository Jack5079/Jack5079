<script>
	import { onMount } from "svelte"

	let browser = false
	let time
	onMount(() => {
		time = new Date().toLocaleString("en-US", {
			timeZone: "America/New_York",
			hour12: true,
			hour: "numeric",
			minute: "numeric",
		})
		const id = setInterval(() => {
			time = new Date().toLocaleString("en-US", {
				timeZone: "America/New_York",
				hour12: true,
				hour: "numeric",
				minute: "numeric",
			})
		}, 1000)
		browser = true
		return () => clearInterval(id)
	})
</script>

<span>
	{#if browser}
		({time})
	{/if}
</span>
