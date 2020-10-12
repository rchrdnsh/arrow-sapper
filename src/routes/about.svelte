<script>
	// import { fadeIn, fadeOut } from "../animate";
	import Tabs from '../components/Tabs.svelte'
	import Compare from '../components/Compare.svelte'
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
		gap: 2rem;
	}

	/* two-up {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		width: 32rem;
		height: auto;
		border: 8px solid var(--blue-0);
		--track-color: var(--blue-0);
		--bar-color: var(--blue-0);
		--thumb-color: white;
		--thumb-background: hsla(173, 100%, 30%, 1);
		--bar-size: 8px;
		overflow: hidden;
	} */

	/* .space {
		height: 2rem;
	} */

	/* img {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		width: 100%;
		height: auto;
		object-fit: cover;
	} */

	.compare {
		margin: 0;
		padding: 0;
		width: 32rem;
		height: 24rem;
		border: 4px solid white;
	}

	h1 {
		margin: 0;
		padding: 0;
		line-height: 1;
	}

	p {
		margin: 0;
		padding: 0;
		line-height: 1;
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class='container'>
	<h1>About this site</h1>
	<p>This is the 'about' page. There's not much here.</p>
	<Tabs items={[ `Ya`, `Ba`, `Che`, `Go` ]}/>
	<div class='compare'>
		<Compare
			before="art-blur.jpg"
			after="art-focus.jpg"
			contain={true}
		/>
	</div>
</div>