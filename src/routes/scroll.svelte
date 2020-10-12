<script>
	let realName = 'world'
	let y = 0
	$: name = `${realName} ${y}`;
</script>

<p>
	{y}
</p>

<div class="s" on:scroll={(e)=>y=e.target.scrollTop}>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
	<h1>Hello {name}!</h1>
</div>

<style>
	.s {
		margin: 0;
		padding: 1rem;
		box-shadow: inset 0px 0px 8px hsla(0, 0%, 0%, 0.1);
		overflow: scroll;
		width: 24rem;
		height: 24rem;
		background: #eee;
		border: 1px solid #ccc;
		border-radius: 16px;
	}
</style>