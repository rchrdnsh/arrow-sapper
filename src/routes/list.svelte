<script>
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	let uid = 1;

	let todos = [
		{ id: uid++, done: false, description: 'write some docs' },
		{ id: uid++, done: false, description: 'start writing blog post' },
		{ id: uid++, done: true,  description: 'buy some milk' },
		{ id: uid++, done: false, description: 'mow the lawn' },
		{ id: uid++, done: false, description: 'feed the turtle' },
		{ id: uid++, done: false, description: 'fix some bugs' },
	];

	function add(input) {
		const todo = {
			id: uid++,
			done: false,
			description: input.value
		};

		todos = [todo, ...todos];
		input.value = '';
	}

	function remove(todo) {
		todos = todos.filter(t => t !== todo);
	}

	function mark(todo, done) {
		todo.done = done;
		remove(todo);
		todos = todos.concat(todo);
	}
</script>

<style>
	.container {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.board {
		margin: 0;
		padding: 2rem;
		width: 60vw;
		height: 80vh;
		display: grid;
		grid-template-rows: 4rem 1fr;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		background: #ddd;
		border: 1px solid #999;
		border-radius: 16px;
	}

	.board > input {
		grid-column: 1/3;
		margin: 0;
		padding: 1rem;
		height: 3rem;
		font-size: 16px;
		border: 1px solid #999;
		border-radius: 8px;
	}

	.left {
		grid-column: 1/2;
		display: flex;
		flex-direction: column;
	}

	.right {
		grid-column: 2/3;
		display: flex;
		flex-direction: column;
	}

	h2 {
		font-size: 2em;
		font-weight: 200;
		user-select: none;
		margin: 0 0 0.5em 0;
	}

	label {
		padding: 0;
		margin: 0 0 0.5rem 0;
		height: 3rem;
		border-radius: 8px;
		user-select: none;
		border: 1px solid hsl(240, 8%, 70%);
		background-color:hsl(240, 8%, 93%);
		/* background-color: var(--blue-0); */
		color: black;
		display: grid;
		grid-template-columns: 3rem 1fr 3rem;
		align-items: center;
		justify-items: center;
	}

	.done {
		background-color:hsl(240, 8%, 98%);
		color: black;
	}

	input[type="checkbox"] {
		grid-column: 1/2;
		margin: 0;
		padding: 0;
	}

	p {
		grid-column: 2/3;
		margin: 0;
		padding: 0;
		justify-self: start;
	}

	button {
		grid-column: 3/4;
		margin: 0;
		padding: 0;
		width: 2.5rem;
		height: 2.5rem;
		background: no-repeat 50% 50% url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
		background-size: 2rem;
		border: none;
		opacity: 0;
		transition: opacity 0.1s;
		text-indent: -9999px;
		cursor: pointer;
		box-shadow: none;
		/* border: 1px solid #aaa; */
	}

	label:hover button {
		opacity: 1;
	}
</style>

<div class='container'>

  <div class='board'>

    <input
      placeholder="what needs to be done?"
      on:keydown={e => e.key === 'Enter' && add(e.target)}
    >
  
    <div class='left'>
      <h2>todo</h2>
      {#each todos.filter(t => !t.done) as todo (todo.id)}
        <label
          in:receive="{{key: todo.id}}"
          out:send="{{key: todo.id}}"
          animate:flip
        >
          <input type=checkbox on:change={() => mark(todo, true)}>
          <p>{todo.description}</p>
          <button on:click="{() => remove(todo)}">remove</button>
        </label>
      {/each}
    </div>
  
    <div class='right'>
      <h2>done</h2>
      {#each todos.filter(t => t.done) as todo (todo.id)}
        <label
          class="done"
          in:receive="{{key: todo.id}}"
          out:send="{{key: todo.id}}"
          animate:flip
        >
          <input type=checkbox checked on:change={() => mark(todo, false)}>
          <p>{todo.description}</p>
          <button on:click="{() => remove(todo)}">remove</button>
        </label>
      {/each}
		</div>
		
	</div>
	
</div>
