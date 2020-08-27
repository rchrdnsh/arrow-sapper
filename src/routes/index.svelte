<script>
	import { fadeIn, fadeOut } from "../animate";
</script>

<style>
	.container {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	img {
		width: 32vw;
		margin: 0;
		padding: 0;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class='container' in:fadeIn out:fadeOut>
	<h1>Great success!</h1>
	<img src='great-success.png' alt='Borat!'>
	<p>Very nice.</p>
</div>


