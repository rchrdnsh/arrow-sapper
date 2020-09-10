<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`team.json`);
    const team = await res.json();
    return { team };
  }
</script>

<script>
	import { fadeIn, fadeOut } from "../../animate";
	import Navigation from '../../components/Navigation.svelte'

	export let segment;
  export let team;

	let links = team.map(member => member.slug);
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
  
  nav {
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
		padding: 0.25rem;
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
	}

	.selected {
		background: var(--blue-2);
		color: white;
	}

	main {
		margin: 0;
		padding: 0;
		border: var(--thickness) solid var(--blue-2);
		width: 100%;
		height: 100%;
    overflow-y: auto;
  	-webkit-overflow-scrolling: touch;
	}
</style>

<div class='app' in:fadeIn out:fadeOut>

	<Navigation {segment} primary={`team`} secondary links={links}/>

	<!-- <nav>
		<ul>
			{#each team as member}
				<li>
					<a
						rel='prefetch'
						class={segment === `${member.slug}` ? `selected` : ``}
						href='team/{member.slug}'
					>
						{member.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav> -->

	<main>
		<slot></slot>
	</main>
</div>
