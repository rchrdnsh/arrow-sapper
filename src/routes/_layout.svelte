<script>
	export let segment;
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
		grid-template-columns: 6rem calc(100vw - 6rem);
		grid-template-columns: 6rem 1fr;
		grid-template-rows: 1fr;
		column-gap: var(--thickness);
		border: var(--thickness) solid var(--background-1);
	}

	nav {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		border: var(--thickness) solid var(--blue-1);
		/* border-radius: 4px; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style-type: none;	
	}

	li {
		color: black;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: hsla(171, 100%, 38%, 1);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

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
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}
</style>

<div class='app'>
	<nav>
		<ul>
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
			<li><a rel=prefetch aria-current="{segment === 'tours' ? 'page' : undefined}" href="tours">Tours</a></li>
			<li><a aria-current="{segment === 'team' ? 'page' : undefined}" href="team">Team</a></li>
			<li><a aria-current="{segment === 'test' ? 'page' : undefined}" href="test">Test</a></li>
			<li><a aria-current="{segment === 'buttons' ? 'page' : undefined}" href="buttons">Buttons</a></li>
		</ul>
	</nav>
	<main>
		<slot></slot>
	</main>
</div>
