<style>
  .container {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
	}

  model-viewer {
    width: 100%;
    height: 100%;
    /* border: 8px solid var(--blue-2); */
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(158,188,208,1) 100%);
  }
</style>


<div class='container'>

  <model-viewer
    src='models/DamagedHelmet/DamagedHelmet.gltf'
    alt='A 3D model.'
    auto-rotate
    camera-controls
  ></model-viewer>

</div>