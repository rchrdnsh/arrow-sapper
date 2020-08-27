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
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class='container' in:fadeIn out:fadeOut>
	<h1>About this site</h1>
	<p>This is the 'about' page. There's not much here.</p>
</div>
