<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`team.json`);
    const team = await res.json();
    return { team };
  }
</script>

<script>
  export let team;
</script>

<svelte:head>
  <title>Team</title>
</svelte:head>

<div>
  <h1>here are the people that do the stuff for you.</h1>
  <ul>
    {#each team as member}
      <li>
        <a rel="prefetch" href="team/{member.slug}">{member.name}</a>
      </li>
    {/each}
  </ul>
</div>
