<script>
  export let image;
  export let alt;
  export let background;
  export let description;
</script>

<style>
  .container {
    grid-column: 1 / 4;
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc(100vh - (4 * var(--thickness)));
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(12, 1fr);
    background: #aaa;
  }

  @media screen and (orientation: portrait) {
    .container {
      height: calc(90vh - (4 * var(--thickness)));
    }
  }

  .text {
    grid-row: 2 / 8;
    grid-column: 7 / 12;
    margin: 0;
    padding: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background: var(--background-2);
    border-radius: 0 8px 8px 0;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.028),
      0 6.7px 5.3px rgba(0, 0, 0, 0.04),
      0 12.5px 10px rgba(0, 0, 0, 0.05),
      0 22.3px 17.9px rgba(0, 0, 0, 0.06),
      0 41.8px 33.4px rgba(0, 0, 0, 0.072),
      0 100px 80px rgba(0, 0, 0, 0.1)
    ;
  }

  h1 {
    color: black;
  }

  .line {
    width: 50%;
    height: 16px;
    border-radius: 32px;
    background: #2B6BC2;
    box-shadow:
      0 0.9px 1.8px rgba(0, 0, 0, 0.076),
      0 2.1px 4.3px rgba(0, 0, 0, 0.109),
      0 4px 8px rgba(0, 0, 0, 0.135),
      0 7.1px 14.3px rgba(0, 0, 0, 0.161),
      0 13.4px 26.7px rgba(0, 0, 0, 0.194),
      0 32px 64px rgba(0, 0, 0, 0.27)
    ;
  }

  p {
    color: black;
  }

  .scrim {
    display: block; 
    grid-row: 1 / 9;
    grid-column: 1 / 13;
    z-index: 2;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: hsla(0, 0%, 0%, 0.25);
    background: linear-gradient(
      to bottom,
      hsla(210, 38%, 90%, 0) 0%,
      hsla(210, 38%, 90%, 0.013) 8.1%,
      hsla(210, 38%, 90%, 0.049) 15.5%,
      hsla(210, 38%, 90%, 0.104) 22.5%,
      hsla(210, 38%, 90%, 0.175) 29%,
      hsla(210, 38%, 90%, 0.259) 35.3%,
      hsla(210, 38%, 90%, 0.352) 41.2%,
      hsla(210, 38%, 90%, 0.45) 47.1%,
      hsla(210, 38%, 90%, 0.55) 52.9%,
      hsla(210, 38%, 90%, 0.648) 58.8%,
      hsla(210, 38%, 90%, 0.741) 64.7%,
      hsla(210, 38%, 90%, 0.825) 71%,
      hsla(210, 38%, 90%, 0.896) 77.5%,
      hsla(210, 38%, 90%, 0.951) 84.5%,
      hsla(210, 38%, 90%, 0.987) 91.9%,
      hsl(210, 38%, 90%) 100%
    );
  }

  .image {
    grid-row: 2 / 8;
    grid-column: 2 / 7;
    z-index: 3;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.028),
      0 6.7px 5.3px rgba(0, 0, 0, 0.04),
      0 12.5px 10px rgba(0, 0, 0, 0.05),
      0 22.3px 17.9px rgba(0, 0, 0, 0.06),
      0 41.8px 33.4px rgba(0, 0, 0, 0.072),
      0 100px 80px rgba(0, 0, 0, 0.1)
    ;
  }

  .background {
    display: block; 
    grid-row: 1 / 9;
    grid-column: 1 / 13;
    z-index: 1;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
  }
</style>

<div class='container'>
  <div class='text'>
    <h1>Hello!</h1>
    <div class='line'/>
    <p>Words and stuff and things and junk and garbage.</p>
  </div>
  <img class='image' src={image} alt={alt}/>
  <div class='scrim'/>
  <img class='background' src={background} alt={description}/>
</div>