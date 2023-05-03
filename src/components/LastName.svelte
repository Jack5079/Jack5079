<script>
	import { onMount } from "svelte"
	import { slide } from "svelte/transition"

	const names = [
		"W.",
		"wins",
		".wasm",
		"W█████",
		"thought this was a good idea",
		"does a little trolling",
		"wrote this in 5 minutes",
	]
	let name = names[0]
	onMount(() => {
		let i = 0
		const id = setInterval(() => {
			i++
			name = names[i % names.length]
		}, 1500)
		return () => clearInterval(id)
	})
</script>

<div aria-hidden>
	{#key name}
		<span aria-hidden transition:slide={{ duration: 500, axis: "x" }}>{name}</span>
	{/key}
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0;
		flex-direction: row-reverse;
	}

	span {
		flex-grow: 1;
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		vertical-align: bottom;
	}
</style>
