<script>
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

  export let segment;
  export let primary = ``;
  export let secondary = false;

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

  function humanize(str) {
    var i, frags = str.split('-');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }

	// let active = 0;

	// let links = [
	// 	{ path: undefined},
	// 	{ path: `about`},
	// 	{ path: `services`},
	// 	{ path: `tours`},
	// 	{ path: `team`}		
  // ]
  
  export let links;
</script>

<style>
  nav {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		border: var(--thickness) solid var(--blue-1);
		border: var(--thickness-2) solid var(--blue-1);
		border: none;
		/* background: white; */
		background: var(--background-1);
		box-shadow: inset 0px 0px 16px hsla(0,0%,0%,0.1);
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-items: stretch;
		display: grid;
		grid-auto-flow: row;
	}

	@media screen and (orientation: portrait) {
		nav {
			grid-row: 2 / 3;
			grid-column: 1 / 2;
			grid-auto-flow: column;
		}
	}

	@media screen and (orientation: landscape) {
		nav {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			justify-content: center;
		}
	}

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

	a {
		/* grid-row: 1 / 2; */
		/* grid-column: 1 / 2; */
		margin: 0;
		padding: 0;
		text-decoration: none;
		text-align: center;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		-webkit-tap-highlight-color: transparent;
	}

	@media screen and (orientation: landscape) {
		a {
			height: 4rem;
		}
	}

	/* .selected {
		background: var(--blue-1);
		color: white;
	} */

	p {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		align-self: center;
		justify-self: center;
		margin: 0;
		padding: 0;
		line-height: 1;
		z-index: 5;
		/* border: 1px solid green; */
	}

	span {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		background: hsla(173, 100%, 40%, 1);
		z-index: 4;
		align-self: stretch;
		justify-self: stretch;
		/* border-radius: 12px; */
	}
</style>

<nav>
  {#each links as link, index}
    {#if secondary === true}
      <a
        rel='prefetch'
        class={segment === link ? `selected` : ``}
        href={`${primary}/${link}`}
      >
        <p>{link === undefined ? `Home` : humanize(link)}</p>
        {#if segment == link}
          <span in:receive={{ key: 'active' }} out:send={{ key: 'active' }}></span>
        {/if}
      </a>
    {:else}
      <a
        rel='prefetch'
        class={segment === link ? `selected` : ``}
        href={link === undefined ? `` : link}
      >
        <p>{link === undefined ? `Home` : humanize(link)}</p>
        {#if segment == link}
          <span in:receive={{ key: 'active' }} out:send={{ key: 'active' }}></span>
        {/if}
      </a>
    {/if}
  {/each}
</nav>