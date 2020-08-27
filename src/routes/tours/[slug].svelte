<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`tours/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { tour: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let tour;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{tour.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
    .content :global(.title) {
    font-size: 1.75em;
    font-weight: 500;
    color: #009999;
  }

  .content :global(h1) {
    font-size: 1.5em;
    font-weight: 500;
    color: #cf5427;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .content :global(p) {
    line-height: 2;
  }
</style>

<svelte:head>
  <title>{tour.title}</title>
</svelte:head>

<div class="content">
  <h1 class='title'>{tour.title}</h1>
  {@html tour.html}
</div>
