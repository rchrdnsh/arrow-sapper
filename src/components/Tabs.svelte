<script>
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 250),
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === "none" ? "" : style.transform;

			return {
				duration: 0,
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

	export let items = [`Hi`, `Ho`, `Yo`]
</script>

<style>
  ul {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		margin: 0;
		padding: 0.25rem;
		/* width: max-content; */
		/* width: max-content; */
		width: auto;
		height: min-content;
		background: #555;
		background: var(--blue-0);
    border-radius: 64px;
		/* display: grid; */
		/* grid-auto-flow: column; */
		display: flex;
	}

  li {
		margin: 0;
		padding: 0;
		text-decoration: none;
		text-align: center;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 0.5rem 1fr 0.5rem;
    min-width: 5rem;
		max-width: max-content;
		/* width: max-content; */
		height: 3rem;
		/* border: 1px solid white; */
		-webkit-tap-highlight-color: transparent;
		cursor: pointer;
	}

  p {
		grid-row: 1 / 2;
		grid-column: 2 / 3;
		margin: 0;
		padding: 0;
		align-self: stretch;
		justify-self: stretch;
		margin: 0;
		padding: 0;
		line-height: 1;
		z-index: 5;
    color: white;
		pointer-events: none;
		display: flex;
		align-items: center;
		justify-content: center;
		text-shadow: 1px 1px 2px hsla(0, 0%, 0%, 0.25); 
	}

	span {
		grid-row: 1 / 2;
		grid-column: 1 / 4;
		margin: 0;
		padding: 0;
		background: hsla(173, 100%, 30%, 1);
    /* background: #777; */
    box-shadow: 0px 0px 8px hsla(0, 0%, 0%, 0.25);
		z-index: 4;
		align-self: stretch;
		justify-self: stretch;
    border-radius: 64px;
	}
</style>


<ul>
  {#each items as item, index}
    <li class='item' on:click={() => active = index}>
      <p>{item}</p>
      {#if index == active}
        <span in:receive={{ key: 'active' }} out:send={{ key: 'active' }}></span>
      {/if}
    </li>
  {/each}
  </ul>
