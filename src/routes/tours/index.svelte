<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`tours.json`);
    const tours = await res.json();
    return { tours };
  }
</script>

<script>
  export let tours;
</script>

<svelte:head>
  <title>Virtual Tours</title>
</svelte:head>

<div>

  <h1>All the Virtual Tours you could ask for.</h1>

  <ul>
    {#each tours as tour}
      <li>
        <a rel="prefetch" href="tours/{tour.slug}">{tour.title}</a>
      </li>
    {/each}
  </ul>

</div>
