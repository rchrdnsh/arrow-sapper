<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`work.json`);
    const work = await res.json();
    return { work };
  }
</script>

<script>
	import { fadeIn, fadeOut } from "../../animate";
	import Navigation from '../../components/Navigation.svelte'

	export let segment;
  export let work;

	let links = work.map(article => article.slug);
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

	<Navigation {segment} primary={`work`} secondary links={links}/>

	<main>
		<slot></slot>
	</main>
</div>
