<script>
  export let background;
  export let description;
</script>

<style>
  .container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc(100vh - (4 * var(--thickness)));
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(12, 1fr);
    background: #aaa;
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
    background: white;
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
      hsla(0, 0%, 100%, 0) 0%,
      hsla(0, 0%, 100%, 0.013) 10%,
      hsla(0, 0%, 100%, 0.049) 19.9%,
      hsla(0, 0%, 100%, 0.104) 29.6%,
      hsla(0, 0%, 100%, 0.175) 39.1%,
      hsla(0, 0%, 100%, 0.259) 48.1%,
      hsla(0, 0%, 100%, 0.352) 56.8%,
      hsla(0, 0%, 100%, 0.45) 64.9%,
      hsla(0, 0%, 100%, 0.55) 72.4%,
      hsla(0, 0%, 100%, 0.648) 79.2%,
      hsla(0, 0%, 100%, 0.741) 85.2%,
      hsla(0, 0%, 100%, 0.825) 90.3%,
      hsla(0, 0%, 100%, 0.896) 94.4%,
      hsla(0, 0%, 100%, 0.951) 97.5%,
      hsla(0, 0%, 100%, 0.987) 99.3%,
      hsl(0, 0%, 100%) 100%
    );
  }

  .image {
    
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
  <div class='scrim'/>
  <img class='background' src={background} alt={description}/>
</div>