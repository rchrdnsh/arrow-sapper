<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`tours.json`);
    const tours = await res.json();
    return { tours };
  }
</script>

<script>
	export let segment;
  export let tours;
	import { fadeIn, fadeOut } from "../../animate";
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
		box-sizing: border-box;
		margin: 0;
		padding: 2rem;
		border: var(--thickness) solid var(--blue-2);
    width: 60vw;
    width: 100%;
    overflow-y: auto;
  	-webkit-overflow-scrolling: touch;

	}
</style>

<div class='app' in:fadeIn out:fadeOut>

	<nav>
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
	</nav>
	
	<main>
		<slot></slot>
	</main>

</div>
