<script>
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	import Navigation from '../components/Navigation.svelte'

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
		{ path: `services`},
		{ path: `tours`},
		{ path: `team`},
		{path: `contact`}		
	]
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
		border: var(--thickness) solid var(--background-1);
	}

	@media screen and (orientation: portrait) {
		.app {
			grid-template-columns: 1fr;
			grid-template-rows: 6fr 1fr;
			grid-template-rows: 1fr 6rem;
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
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}

	@media screen and (orientation: portrait) {
		main {
			grid-row: 1 / 2;
			grid-column: 1 / 2;
			height: 82vh;
			height: calc(100vh - ((var(--thickness) * 3) + 6rem));
			height: calc( calc(var(--vh, 1vh) * 100) - ( (var(--thickness) * 3) + 6rem ) );
		}
	}
</style>

<div class='app'>

	<!-- <Navigation {segment} links={[undefined, `about`,`services`,`tours`,`team`, `work`, `contact`, `models`]}/> -->

	<Navigation {segment} links={[undefined, `about`,`services`, `contact`, `models`]}/>

	<!-- <nav>
		{#each links as link, index}
			<a
				rel='prefetch'
				class={segment === link.path ? `selected` : ``}
				href={link.path === undefined ? `` : link.path}
			>
				<p>{link.path === undefined ? `Home` : capitalize(link.path)}</p>
				{#if segment == link.path}
					<span in:receive={{ key: 'active' }} out:send={{ key: 'active' }}></span>
				{/if}
			</a>
		{/each}
	</nav> -->

	<!-- <nav>
		<ul>
			{#each links as link, index}
				<li>
					<a
						rel='prefetch'
						on:click={() => active = index }
						class={segment === link.path ? `selected` : ``}
						href={link.path === undefined ? `` : link.path}
					>
						<p>{link.path === undefined ? `Home` : capitalize(link.path)}</p>
						{#if index == active}
							<span in:receive={{ key: 'active' }} out:send={{ key: 'active' }}></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</nav> -->

	<!-- <nav>
		<ul>
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
		</ul>
	</nav> -->

	<main>
		<slot></slot>
	</main>

</div>