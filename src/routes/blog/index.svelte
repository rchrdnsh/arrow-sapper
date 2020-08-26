<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog.json`);
    const posts = await res.json();
    return { posts };
    console.log(posts);
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div>

  <h1>Home Page of Posts and stuff :-)</h1>

  <ul>
    {#each posts as post}
      <li>
        <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      </li>
    {/each}
  </ul>

</div>
