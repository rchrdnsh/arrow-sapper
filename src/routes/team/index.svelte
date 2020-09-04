<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`team.json`);
    const team = await res.json();
    return { team };
  }
</script>

<script>
  import { fadeIn, fadeOut } from "../../animate";
  export let team;
</script>

<style>
  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8vw;
    padding: 8vw;
  }

  .title {
    color: black;
  }

  .content-card {
    /* border: 1px solid #ddd; */
    
    /* box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1); */
    margin: 0;
    padding: 0;
    border-radius: 8px;
    height: auto;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.056),
      0 6.7px 5.3px rgba(0, 0, 0, 0.081),
      0 12.5px 10px rgba(0, 0, 0, 0.1),
      0 22.3px 17.9px rgba(0, 0, 0, 0.119),
      0 41.8px 33.4px rgba(0, 0, 0, 0.144),
      0 100px 80px rgba(0, 0, 0, 0.2)
    ;
  }

  .text {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: end;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    z-index: 3;
  }

  h1 {
    font-size: calc(20px + (32 - 20) * ((100vw - 300px) / (1600 - 300)));
    line-height: 1;
    padding: 0;
    margin: 0;
    color: white;
  }

  h2 {
    font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
    line-height: 1;
    text-align: left;
    padding-top: calc(12px + (20 - 12) * ((100vw - 300px) / (1600 - 300)));
    padding-bottom: calc(12px + (20 - 12) * ((100vw - 300px) / (1600 - 300)));
    margin: 0;
    margin-bottom: calc(6px + (12 - 6) * ((100vw - 300px) / (1600 - 300)));
    color: white;
  }

  /* p {
    box-sizing: border-box;
    font-size: calc(14px + (14 - 14) * ((100vw - 300px) / (1600 - 300)));
    padding: 0 0.5rem;
    color: white;
  } */

  button {
    flex: 0 1 auto;
    margin-bottom: calc(20px + (40 - 30) * ((100vw - 300px) / (1600 - 300)));
    padding: calc(14px + (32 - 14) * ((100vw - 300px) / (1600 - 300)));
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: rgba(0,0,0,0.5);
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
    font-family: 'montserrat', sans-serif;
    font-size: calc(12px + (28 - 12) * ((100vw - 300px) / (1600 - 300)));
    line-height: 1;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    transition: background-color 500ms ease, color 500ms ease;
  }

  button:hover {
    background-color: white;
    color: black
  }

  @media screen and (min-width: 400px) {
    .content-grid {
      grid-template-columns: 1fr 1fr;
      grid-gap: 4vw;
      padding: 4vw;
    }

    h1 {
      font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
    }

    h2 {
      font-size: calc(10px + (20 - 10) * ((100vw - 300px) / (1600 - 300)));
      padding-top: calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)));
      padding-bottom: calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)));
    }

    /* p {
      font-size: calc(14px + (14 - 14) * ((100vw - 300px) / (1600 - 300)));
    } */

    button {
      font-size: calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)));
      padding: calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)));
    }

  }

  @media screen and (min-width: 1200px) {
    .content-grid {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3vw;
      padding: 3vw;
    }

    h1 {
      font-size: calc(14px + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
    }

    h2 {
      font-size: calc(14px + (14 - 14) * ((100vw - 300px) / (1600 - 300)));
      padding-top: calc(6px + (16 - 6) * ((100vw - 300px) / (1600 - 300)));
      padding-bottom: calc(6px + (16 - 6) * ((100vw - 300px) / (1600 - 300)));
    }

    /* p {
      font-size: calc(14px + (14 - 14) * ((100vw - 300px) / (1600 - 300)));
    } */

    button {
      font-size: calc(10px + (14 - 10) * ((100vw - 300px) / (1600 - 300)));
      padding: calc(10px + (18 - 10) * ((100vw - 300px) / (1600 - 300)));
      margin-bottom: calc(16px + (30 - 16) * ((100vw - 300px) / (1600 - 300)));
    }

  }

  @media screen and (min-width: 1600px) {
    .content-grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    h1 {
      font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
    }

    h2 {
      font-size: calc(14px + (14 - 14) * ((100vw - 300px) / (1600 - 300)));
    }

    /* p {
      font-size: calc(14px + (14 - 14) * ((100vw - 300px) / (1600 - 300)));
    } */

    button {
      font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
    }

  }

  .scrim {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    margin: 0;
    padding: 0;
    background: linear-gradient(
      to top,
      hsl(0, 0%, 0%) 0%,
      hsla(0, 0%, 0%, 0.738) 19%,
      hsla(0, 0%, 0%, 0.541) 34%,
      hsla(0, 0%, 0%, 0.382) 47%,
      hsla(0, 0%, 0%, 0.278) 56.5%,
      hsla(0, 0%, 0%, 0.194) 65%,
      hsla(0, 0%, 0%, 0.126) 73%,
      hsla(0, 0%, 0%, 0.075) 80.2%,
      hsla(0, 0%, 0%, 0.042) 86.1%,
      hsla(0, 0%, 0%, 0.021) 91%,
      hsla(0, 0%, 0%, 0.008) 95.2%,
      hsla(0, 0%, 0%, 0.002) 98.2%,
      hsla(0, 0%, 0%, 0) 100%
    );
    border-radius: 8px;
    z-index: 2;
  }

  .picture {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: block;
    width: 100%;
    height: auto;
    border-radius: 8px;
    z-index: 1;
  }
</style>

<svelte:head>
  <title>Team</title>
</svelte:head>

<div class='container' in:fadeIn out:fadeOut>

  <h1 class='title'>here are the people that do the stuff for you.</h1>

  <div class="content-grid">

    {#each team as member}
      <a rel='prefetch' href="team/{member.slug}" class="content-card">
        <img class="picture" src={member.picture} alt={member.alt}/>
        <div class="scrim"/>
        <div class="text">
          <h1 class="name">{member.name}</h1>
          <h2 class="position">{member.position}</h2>
          <button>More...</button>
        </div>
      </a>
    {/each}

  </div>

</div>

