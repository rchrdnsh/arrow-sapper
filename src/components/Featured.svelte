<script>
  export let title = `Title`;
  export let description = `Description`;
  export let image;
  export let imageAlt = 'A nice image.';
  export let background;
  export let backgroundAlt = 'A nice image.';
  export let reverse = false;
</script>

<div class='container'>
  <h1 class='title blue-header' class:title-reverse={reverse}>{title}</h1>
  <div class='content'>
    <div class='description' class:description-reverse={reverse}>{description}</div>
    <button class='link' class:link-reverse={reverse}>Link to somewhere</button>
  </div>
  <img src={image} alt={imageAlt} class='image-1' class:image-1-reverse={reverse}/>
  <img src={background} alt={backgroundAlt} class='image-2' class:image-2-reverse={reverse}/>
  <div class="horizontal-line" class:horizontal-line-reverse={reverse}></div>
  <div class="vertical-line" class:vertical-line-reverse={reverse}></div>
  <div class="square one"></div>
  <div class="square two"></div>
  <div class="square three"></div>
  <div class="square four"></div>
  <div class="square five"></div>
  <div class="circle six"></div>
  <div class="circle seven"></div>
  <div class="circle eight"></div>
  <div class="circle nine"></div>
  <div class="circle ten"></div>
</div>

<style>
  .title,
  .description,
  .image-1,
  .circle,
  .horizontal-line,
  .vertical-line,
  .title-reverse,
  .description-reverse,
  .image-1-reverse,
  .image-2-reverse,
  .horizontal-line-reverse,
  .vertical-line-reverse,
  .link {
    /* box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.25); */
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07)
    ;
  }

  .container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(12, 1fr);
    background: url('../../assets/images/logos/arrow-favicon-blue-10-percent.svg') no-repeat center center;
    background-size: 100%;
    background: var(--background-1);
  }

  .title,
  .title-reverse {
    font-size: calc(20px + (32 - 20) * ((100vw - 300px) / (1600 - 300)));
    margin: 0;
    padding: 1rem 1.5rem;
    align-self: center;
    background: rgba(255,255,255,0.9);
    z-index: 3;
    position: relative;
    bottom: 20px;
    /* width: min-content;
    white-space: no-wrap; */
    width: max-content;
    border-radius: 4px;
  }

  .title {
    grid-column: 2 / 7;
    grid-row: 3 / 4;
  }

  .title-reverse {
    grid-column: 6 / 12;
    grid-row: 3 / 4;
    text-align: right;
  }

  @media screen and (min-width: 800px) {
    .title {
      grid-column: 2 / 7;
      grid-row: 4 / 5;
      position: static;
    }

    .title-reverse {
      grid-column: 6 / 11;
      grid-row: 4 / 5;
      position: static;
    }
  }

  .blue-header {
    font-family: 'montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    color: #2B6BC2;
  }

  .content {
    grid-column: 4 / 10;
    grid-row: 6 / 13;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .description,
  .description-reverse {
    font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
    margin: 0;
    padding: 1rem 1.5rem;
    z-index: 3;
    align-self: start;
    background: rgba(255,255,255,0.90);
    position: relative;
    top: -20px;
    border-radius: 4px;
    font-weight: 300;
    line-height: 2;
  }

  @media screen and (min-width: 800px) {
    .description {
      font-size: calc(10px + (18 - 10) * ((100vw - 300px) / (1600 - 300)));
      position: static;
    }

    .description-reverse {
      font-size: calc(10px + (18 - 10) * ((100vw - 300px) / (1600 - 300)));
      position: static;
    }
  }

  .link,
  .link-reverse {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
  }

  button {
    font-family: 'montserrat', sans-serif;
    text-transform: uppercase;
    font-size: calc(8px + (28 - 8) * ((100vw - 300px) / (1600 - 300)));;
    border: none;
    border-radius: 8px;
    background-color: #2B6BC2;
    color: #eee;
    padding: 1rem 2rem;
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.25);
    transition: background-color 250ms;
  }

  button:hover {
    background-color: #1f4f93;
  }

  .image-1,
  .image-1-reverse {
    height: auto;
    margin: 0;
    padding: 0;
    z-index: 2;
    border-radius: 4px;
  }

  .image-1 {
    /* width: calc(200px + (450 - 200) * ((100vw - 300px) / (1600 - 300))); */
    grid-column: 5 / 12;
    grid-row: 3 / 8;
  }

  .image-1-reverse {
    /* width: calc(250px + (400 - 250) * ((100vw - 300px) / (1600 - 300))); */
    grid-column: 2 / 12;
    grid-row: 3 / 8;
  }

  @media screen and (min-width: 900px) {
    .image-1 {
      /* width: calc(125px + (475 - 125) * ((100vw - 300px) / (1600 - 300))); */
      grid-column: 6 / 12;
      grid-row: 3 / 10;
    }

    .image-1-reverse {
      /* width: calc(300px + (400 - 300) * ((100vw - 300px) / (1600 - 300))); */
      grid-column: 2 / 9;
      grid-row: 3 / 10;
    }
  }

  .image-2,
  .image-2-reverse {
    /* height: auto; */
    margin: 0;
    padding: 0;
    z-index: 1;
    opacity: 0.25;
    width: 75 vw;
    height: 75vh;
    place-self: center;
    border-radius: 4px;
  }

  .image-2 {
    /* width: calc(250px + (450 - 250) * ((100vw - 300px) / (1600 - 300))); */
    grid-column: 1 / 13;
    grid-row: 1 / 13;
  }

  .horizontal-line,
  .horizontal-line-reverse {
    height: 8px;
    width: 100%;
    align-self: center;
    z-index: 3;
    background: #2B6BC2;
    border-radius: 8px;
  }

  .horizontal-line {
    grid-column: 3/ 9;
    grid-row: 4 / 5;
  }

  .horizontal-line-reverse {
    grid-column: 5/ 12;
    grid-row: 4 / 5;
  }

  @media screen and (min-width: 800px) {
    .horizontal-line {
      grid-column: 3/ 9;
      grid-row: 5 / 6;
    }

    .horizontal-line-reverse {
      grid-column: 5/ 10;
      grid-row: 5 / 6;
    }
  }

  .vertical-line,
  .vertical-line-reverse {
    height: 100%;
    width: 8px;
    z-index: 3;
    background: #00ccb7;
    border-radius: 8px;
  }

  .vertical-line {
    grid-column: 11/ 12;
    grid-row: 5 / 11;
    align-self: center;
    justify-self: start;
  }

  .vertical-line-reverse {
    grid-column: 3 / 4;
    grid-row: 5 / 11;
    align-self: center;
    justify-self: start;
  }

  @media screen and (min-width: 800px) {
    .vertical-line {
      grid-column: 10/ 11;
      grid-row: 5 / 11;
      justify-self: center;
    }

    .vertical-line-reverse {
      grid-column: 2/ 3;
      grid-row: 5 / 11;
      justify-self: center;
    }
  }

  .square {
    width: 8px;
    height: 8px;
    align-self: center;
    justify-self: center;
  }

  .one {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background: #aaa;
  }

  .two {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background: #bbb;
  }

  .three {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    background: #ccc;
  }

  .four {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
    background: #ddd;
  }

  .five {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    background: #eee;
  }

  .circle {
    width: 8px;
    height: 8px;
    align-self: center;
    justify-self: center;
    border-radius: 50%;
  }

  .six {
    grid-column: 8 / 9;
    grid-row: 12 / 13;
    background: #eee;
  }

  .seven {
    grid-column: 9 / 10;
    grid-row: 12 / 13;
    background: #ddd;
  }

  .eight {
    grid-column: 10 / 11;
    grid-row: 12 / 13;
    background: #ccc;
  }

  .nine {
    grid-column: 11 / 12;
    grid-row: 12 / 13;
    background: #bbb;
  }

  .ten {
    grid-column: 12 / 13;
    grid-row: 12 / 13;
    background: #aaa;
  }
</style>