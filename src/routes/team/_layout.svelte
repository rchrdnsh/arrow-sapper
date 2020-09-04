<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`team.json`);
    const team = await res.json();
    return { team };
  }
</script>

<script>
  export let team;
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
		box-sizing: border-box;
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
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style-type: none;	
	}

	li {
		color: black;
	}

	/* [aria-current] {
		position: relative;
		display: inline-block;
	} */

	/* [aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	} */

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
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
	<nav>
		<ul>
      {#each team as member}
        <li>
          <a rel="prefetch" href="team/{member.slug}">{member.name}</a>
        </li>
      {/each}
		</ul>
  </nav>
	<main>
		<slot></slot>
	</main>
</div>
