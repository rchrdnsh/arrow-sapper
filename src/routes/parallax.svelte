<script>
	const layers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // let y;
  let y = 0
</script>

<style>
  .container {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
    display: grid;
    overflow-x: hidden;
    overflow-y: scroll;
	}

	.parallax-container {
    grid-row: 1/2;
    width: 70vw;
    width: 200%;
    height: 100vh;
		left: 50%;
		transform: translate(-50%,0);
    position: relative;
	}

	.parallax-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		will-change: transform;
	}

	.parallax-container img:last-child::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgb(45,10,13);
	}

	.text {
    grid-row: 2/3;
		position: relative;
		width: 100%;
		height: 300vh;
		color: rgb(220,113,43);
		text-align: center;
		padding: 4em 0.5em 0.5em 0.5em;
		box-sizing: border-box;
		pointer-events: none;
	}

	span {
		display: block;
		font-size: 1em;
		text-transform: uppercase;
		will-change: transform, opacity;
	}

	.foreground {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100% - 90vh);
		background-color: rgb(32,0,1);
		color: white;
		padding: 100vh 0 0 0;
	}
</style>

<div class='container' on:scroll={(e)=>y=e.target.scrollTop}>

  <a class="parallax-container" href="https://www.firewatchgame.com">
    {#each layers as layer}
      <img
        style="transform: translate3d(0px,{-y * layer / (layers.length - 1)}px, 0px)"
        src="https://www.firewatchgame.com/images/parallax/parallax{layer}.png"
        alt="parallax layer {layer}"
      >
    {/each}
  </a>
  
  <div class="text">

    <span style="opacity: {1 - Math.max(0, y / 40)}">
      scroll down
    </span>
  
    <div class="foreground">
      You have scrolled {y} pixels
    </div>

  </div>

</div>