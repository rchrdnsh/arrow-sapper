<script>
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	export let segment;

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 500),
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === "none" ? "" : style.transform;

			return {
				duration: 500,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t};
				`,
			};
		},
	});

	const capitalize = (word) => {
    const lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1)
  }

	let active = 0;

	let links = [
		{ path: undefined},
		{ path: `about`},
		{ path: `tours`},
		{ path: `team`},
		{ path: `test`},
		{ path: `buttons`},
	]
</script>

<div class='app'>

	<nav>

		<ul>
			{#each links as link, index}
				<li>
					<a
						on:click={() => active = index }
						class={segment === link.path ? `selected` : ``}
						href={link.path === undefined ? `` : link.path}
					>
						{link.path === undefined ? `Home` : capitalize(link.path)}
						{#if index == active}
							<span in:receive={{ key: 'active' }} out:send={{ key: 'active' }}></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>


		<!-- <ul>
			<li>
				<a
					on:click={() => active = 1 }
					in:receive={{ key: 'active' }}
					out:send={{ key: 'active' }}
					class={segment === undefined ? `selected` : ``}
					href='.'
				>
					Home
				</a>
			</li>
			<li>
				<a on:click={() => active = 2 } in:receive={{ key: 'active' }} out:send={{ key: 'active' }} class={segment === `about` ? `selected` : ``} href='about'>About</a>
			</li>
			<li>
				<a on:click={() => active = 3 } in:receive={{ key: 'active' }} out:send={{ key: 'active' }} class={segment === 'tours' ? `selected` : ``} href='tours'>Tours</a>
			</li>
			<li>
				<a on:click={() => active = 4 } in:receive={{ key: 'active' }} out:send={{ key: 'active' }} class={segment === `team` ? `selected` : ``} href='team'>Team</a>
			</li>
			<li>
				<a on:click={() => active = 5 } in:receive={{ key: 'active' }} out:send={{ key: 'active' }} class={segment === `test` ? `selected` : ``} href='test'>Test</a>
			</li>
			<li>
				<a on:click={() => active = 6 } in:receive={{ key: 'active' }} out:send={{ key: 'active' }} class={segment === `buttons` ? `selected` : ``} href='buttons'>Buttons</a>
			</li>
		</ul> -->

	</nav>

	<main>
		<slot></slot>
	</main>

</div>

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
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		border: var(--thickness) solid var(--blue-1);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul {
		margin: 0;
		padding: 0;
		width: 100%;
		/* height: 100%; */
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: stretch;
		list-style-type: none;	
	}

	li {
		color: black;
		margin: 0;
		padding: 0.3rem;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		align-items: stretch;
		justify-items: stretch;
	}

	a {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		margin: 0;
		padding: 1rem 0;
		width: 100%;
		height: 100%;
		text-decoration: none;
		text-align: center;
		display: grid;
		align-self: stretch;
		justify-self: stretch;
		border-radius: 12px;
		z-index: 1;
		position: relative;
		transition: color 100ms;
	}

	.selected {
		/* background: var(--blue-1); */
		/* color: white; */
	}

	span {
		/* grid-row: 1 / 2; */
		/* grid-column: 1 / 2; */
		position: absolute;
		pointer-events: none;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: hsla(173, 100%, 40%, 1);
		z-index: -1;
		border-radius: 12px;
		box-shadow: 2px 2px 8px hsla(0,0%,0%,0.25);

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


