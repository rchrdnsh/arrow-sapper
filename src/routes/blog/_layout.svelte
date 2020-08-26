<!-- <script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/recentPosts.json`);
    const posts = await res.json();
    return { posts };
  }
</script> -->

<!-- <script>
  // import { fly } from "svelte/transition";

  // export let segment;
  // export let posts;
</script> -->

<!-- <div> -->
  <!-- {#if segment}
    <aside>
      <h4>Post Archive</h4>
      <ul>
        {#each posts as post}
          <li>
            <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if} -->
  <!-- <slot /> -->
<!-- </div> -->


<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog.json`);
    const posts = await res.json();
    return { posts };
  }
</script>

<script>
  export let posts;
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
		column-gap: 8px;
		border: 8px solid #fff;
  }
  
  nav {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		border: 8px solid hsla(215, 64%, 65%, 1);
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
		box-sizing: border-box;
		margin: 0;
		padding: 2rem;
		border: 8px solid hsla(215, 64%, 65%, 1);
    width: 60vw;
    width: 100%;
    overflow-y: auto;
  	-webkit-overflow-scrolling: touch;

	}
</style>

<div class='app' in:fadeIn out:fadeOut>
	<nav>
		<ul>
      {#each posts as post}
        <li>
          <!-- <a rel="prefetch" href="blog/{post.slug}">{post.title} - {post.date}</a> -->
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </li>
      {/each}
		</ul>
  </nav>
	<main>
		<slot></slot>
	</main>
</div>
