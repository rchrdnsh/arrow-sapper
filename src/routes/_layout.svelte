<script>
	import Navigation from '../components/Navigation.svelte'
	export let segment
</script>

<style>
	.app {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 6rem 1fr;
		/* grid-template-columns: 6rem calc(100vw - 6rem); */
		grid-template-rows: 1fr;
		column-gap: var(--thickness);
		/* column-gap: var(--thickness-2); */
		border: var(--thickness) solid var(--background-1);
		border: var(--thickness) solid hsla(360, 100%, 100%, 1);
	}

	@media screen and (orientation: portrait) {
		.app {
			grid-template-columns: 1fr;
			grid-template-rows: 6fr 1fr;
			grid-template-rows: 1fr 4rem;
		}
	}

	/* nav {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		margin: 0;
		padding: 0.5rem;
		width: 100%;
		height: 100%;
		border: var(--thickness) solid var(--blue-1);
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-items: stretch;
		display: grid;
		grid-auto-flow: row;
	} */

	/* @media screen and (orientation: portrait) {
		nav {
			grid-row: 2 / 3;
			grid-column: 1 / 2;
			grid-auto-flow: column;
		}
	} */

	/* @media screen and (orientation: landscape) {
		nav {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			justify-content: center;
		}
	} */

	/* ul {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		list-style-type: none;
		border: 1px solid rgb(121, 0, 0);
	} */

	/* @media screen and (orientation: portrait) {
		ul {
			flex-direction: row;
			justify-content: space-around;
			padding: 0 0.4rem;
		}
	} */

	/* li {
		color: black;
		margin: 0;
		padding: 0;
		width: 4rem;
		height: 4rem;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	} */

	/* a {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		margin: 0;
		padding: 0;
		text-decoration: none;
		text-align: center;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		-webkit-tap-highlight-color: transparent;
	} */

	/* @media screen and (orientation: landscape) {
		a {
			height: 4rem;
		}
	} */

	/* .selected {
		background: var(--blue-1);
		color: white;
	} */

	/* p {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		align-self: center;
		justify-self: center;
		margin: 0;
		padding: 0;
		line-height: 1;
		z-index: 5;
	} */

	/* span {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		background: hsla(173, 100%, 40%, 1);
		z-index: 4;
		align-self: stretch;
		justify-self: stretch;
	} */

	main {
		box-sizing: border-box;
		grid-row: 1 / 2;
		grid-column: 2 / 3;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 90vh;
		height: calc(100vh - (var(--thickness) * 2));
		border: var(--thickness) solid var(--blue-1);
		height: calc(100vh - (var(--thickness) * 2));
		border: var(--thickness-2) solid var(--blue-1);
		box-shadow: inset 0px 0px 16px hsla(0,0%,0%,0.1);
		background: var(--background-1);
		border: none;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}

	@media screen and (orientation: portrait) {
		main {
			grid-row: 1 / 2;
			grid-column: 1 / 2;
			height: 82vh;
			height: calc(100vh - ((var(--thickness) * 3) + 6rem));
			height: calc( calc(var(--vh, 1vh) * 100) - ( (var(--thickness) * 3) + 4rem ) );
		}
	}
</style>

<div class='app'>

	<Navigation
		{segment}
		links={[
			undefined,
			`about`,
			`team`,
			`tours`,
			`work`,
			`contact`,
		]}
	/>

	<main>
		<slot></slot>
	</main>

</div>