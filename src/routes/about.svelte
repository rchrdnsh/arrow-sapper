<script>
	// import { fadeIn, fadeOut } from "../animate";
	import Tabs from '../components/Tabs.svelte'
</script>

<style>
.container {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		/* display: grid; */
		/* grid-auto-flow: row; */
		/* place-items: center; */
		/* align-items: center; */
		/* justify-content: center; */
		/* row-gap: 1rem; */
		display: flex;
		flex-direction: column;
		/* place-items: center; */
		align-items: center;
		/* justify-items: center; */
		justify-content: center;
		gap: 2rem;
	}

	.demo {
		background: #fff;
		height: 300px;
		width: 400px;
		margin: 0 auto 50px;
		padding: 0;
		display: flex;
	}
	two-up {
		flex: 1;
	}
	.light, .dark {
		text-align: center;
		padding: 10px 0 0;
	}
	.dark {
		background: #555;
		color: #ccc;
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class='container'>

	<h1>About this site</h1>

	<p>This is the 'about' page. There's not much here.</p>

	<Tabs items={[ `Ya`, `Ba`, `Che`, `Go` ]}/>

	<div class="demo">
		<two-up>
			<div class="light">
				<h1>The Light Side</h1>
			</div>
			<div class="dark">
				<h1>The Dark Side</h1>
			</div>
		</two-up>
	</div>

</div>

