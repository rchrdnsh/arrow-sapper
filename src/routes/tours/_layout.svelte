<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`tours.json`);
    const tours = await res.json();
    return { tours };
  }
</script>

<script>
	import Navigation from '../../components/Navigation.svelte'
	import { fadeIn, fadeOut } from "../../animate";
	// import { quintOut } from 'svelte/easing';
	// import { crossfade } from 'svelte/transition';

	// const [send, receive] = crossfade({
	// 	duration: d => Math.sqrt(d * 500),
	// 	fallback(node, params) {
	// 		const style = getComputedStyle(node);
	// 		const transform = style.transform === "none" ? "" : style.transform;

	// 		return {
	// 			duration: 500,
	// 			easing: quintOut,
	// 			css: (t) => `
	// 				transform: ${transform} scale(${t});
	// 				opacity: ${t};
	// 			`,
	// 		};
	// 	},
	// });

	export let segment;
	export let tours;
	
	let links = tours.map(tour => tour.slug);

	// console.log(links);
</script>

<style>
	.app {
    box-sizing: border-box;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 6rem 1fr;
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
		padding: 0;
		width: 100%;
		height: 100%;
		border: var(--thickness) solid var(--blue-2);
		display: flex;
		flex-direction: column;
		align-items: center;
	} */

	/* @media screen and (orientation: portrait) {
		nav {
			grid-row: 2 / 3;
			grid-column: 1 / 2;
			flex-direction: row;
		}
	} */

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
		align-items: stretch;
		justify-content: stretch;
		list-style-type: none;	
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
		padding: 0.25rem;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		align-items: stretch;
		justify-items: stretch;
	} */

	/* a {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		text-decoration: none;
		text-align: center;
		display: grid;
		align-self: stretch;
		justify-self: stretch;
		-webkit-tap-highlight-color: transparent;
	} */

	/* @media screen and (orientation: landscape) {
		a {
			height: 4rem;
		}
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

	/* .selected {
		background: var(--blue-2);
		color: white;
	} */

	main {
		box-sizing: border-box;
		margin: 0;
		padding: 2rem;
		border: var(--thickness) solid var(--blue-2);
    width: 60vw;
    width: 100%;
    overflow-y: auto;
  	-webkit-overflow-scrolling: touch;

	}

	@media screen and (orientation: portrait) {
		main {
			grid-row: 1 / 2;
			grid-column: 1 / 2;
			height: 82vh;
			height: calc(100vh - ((var(--thickness) * 3) + 6rem));
			height: calc( calc(var(--vh, 1vh) * 80) - ( (var(--thickness) * 3) + 6rem ) );
		}
	}
</style>

<div class='app' in:fadeIn out:fadeOut>

	<Navigation {segment} primary={`tours`} secondary links={links}/>

	<!-- <nav>
		{#each tours as tour, index}
			<a
				rel='prefetch'
				class={segment === `${tour.slug}` ? `selected` : ``}
				href='tours/{tour.slug}'
			>
				<p>{tour.title}</p>
				{#if segment == tour.slug}
					<span in:receive={{ key: 'active' }} out:send={{ key: 'active' }}></span>
				{/if}
			</a>
		{/each}
	</nav> -->

	<!-- <nav>
		<ul>
      {#each tours as tour}
        <li>
					<a
						rel='prefetch'
						class={segment === `${tour.slug}` ? `selected` : ``}
						href='tours/{tour.slug}'
					>
						{tour.title}
					</a>
        </li>
      {/each}
		</ul>
	</nav> -->
	
	<main>
		<slot></slot>
	</main>

</div>
