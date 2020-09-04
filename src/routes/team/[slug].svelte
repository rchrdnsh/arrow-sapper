<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`team/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { member: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { fadeIn, fadeOut } from "../../animate";
  export let member;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{tour.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
  */
  
  .content {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .content :global(.title) {
    font-size: 1.75em;
    font-weight: 500;
    color: #009999;
  }

  /* .content :global(.name) {
    font-size: 1.5em;
    font-weight: 500;
    color: #cf5427;
  } */

  /* .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  } */

  /* .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  } */

  /* .content :global(ul) {
    line-height: 1.5;
  } */

  /* .content :global(li) {
    margin: 0 0 0.5em 0;
  } */

  /* .content :global(p) {
    line-height: 2;
  } */

  img {
    width: 16rem;
    height: auto;
    border-radius: 8px;
    box-shadow:
      0 0.5px 1.2px rgba(0, 0, 0, 0.042),
      0 1.1px 2.7px rgba(0, 0, 0, 0.062),
      0 1.8px 4.6px rgba(0, 0, 0, 0.077),
      0 2.8px 6.9px rgba(0, 0, 0, 0.089),
      0 4px 10px rgba(0, 0, 0, 0.1),
      0 5.7px 14.2px rgba(0, 0, 0, 0.111),
      0 8px 20.1px rgba(0, 0, 0, 0.123),
      0 11.7px 29.2px rgba(0, 0, 0, 0.138),
      0 18px 45px rgba(0, 0, 0, 0.158),
      0 32px 80px rgba(0, 0, 0, 0.2)
    ;
  }

  .content-card {
    margin: 0;
    padding: 0;
    width: 90%;
    height: 84%;
    background: #fff;
    background: hsla(210, 38%, 94%, 1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07)
    ;
  }

.member-image {
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}

.member-text {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  top: -128px;
  z-index: 3;
  margin-bottom: -112px;
}

img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-family: sans-serif;
  color: #2B6BC2;
  z-index: 0;
}

h1 {
  font-size: calc(24px + (32 - 24) * ((100vw - 300px) / (1600 - 300)));
  color: black;
  margin: 1rem 0 0.70rem 0;
  padding: 0;
  line-height: 1;
  /*text-align: center;*/
}

h2 {
  font-size: calc(18px + (20 - 18) * ((100vw - 300px) / (1600 - 300)));
  color: black;
  margin: 0.70rem 0 1rem 0;
  padding: 0;
  line-height: 1;
  /*text-align: center;*/
}

p {
  font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
  /*padding: 0 0.5rem;*/
  width: 100%;
  margin: 1rem;
  padding: 0 1.5rem;
  line-height: 2;
}

button {
  font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
  margin: 0.5rem 0 1rem 0;
  width: 6rem;
  flex: 0 0 auto;
  align-self: center;
}

.horizontal-line {
  height: 8px;
  width: 100%;
  margin: 1rem auto;
  padding: 0;
  z-index: 5;
  background: #2B6BC2;
  border-radius: 8px;
  /*box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.5);*/
  display: none;
}

.vertical-line {
  flex: 0 0 auto;
  height: calc(100px + (500 - 100) * ((100vw - 300px) / (1600 - 300)));
  width: 8px;
  margin: 2rem;
  background: #00ccb7;
  border-radius: 8px;
  z-index: 5;
  display: none;
}

.scrim {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    to top,
    hsl(0, 0%, 97%) 0%,
    hsla(0, 0%, 97%, 0.738) 19%,
    hsla(0, 0%, 97%, 0.541) 34%,
    hsla(0, 0%, 97%, 0.382) 47%,
    hsla(0, 0%, 97%, 0.278) 56.5%,
    hsla(0, 0%, 97%, 0.194) 65%,
    hsla(0, 0%, 97%, 0.126) 73%,
    hsla(0, 0%, 97%, 0.075) 80.2%,
    hsla(0, 0%, 97%, 0.042) 86.1%,
    hsla(0, 0%, 97%, 0.021) 91%,
    hsla(0, 0%, 97%, 0.008) 95.2%,
    hsla(0, 0%, 97%, 0.002) 98.2%,
    hsla(0, 0%, 97%, 0) 100%
  );
  z-index: 1;
}

@media screen and (min-width: 1000px) {
  .content-card {
    margin: 0;
    padding: 0;
    /* background: #fff; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }

  .member-image {
    width: 35%;
    margin: 2rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .member-text {
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 45%;
    position: static;
    align-items: flex-start;
  }

  img {
    width: calc(100px + (400 - 100) * ((100vw - 300px) / (1600 - 300)));
    height: auto;
    margin: 0.5rem 0;
    padding: 0;
    font-size: 10px;
    font-family: sans-serif;
    color: #2B6BC2;
  }

  h1 {
    font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)));
    color: #2B6BC2;
    margin: 1rem 0 0.5rem 0;
    padding: 0;
    line-height: 1;
  }

  h2 {
    font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    margin: 0.5rem 0;
    padding: 0;
    line-height: 1;
  }

  p {
    font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
    padding: 0;
    width: 100%;
    margin: 0.5rem 0 1rem 0;
    line-height: 1.5;
  }

  button {
    margin: 0.5rem 0 1rem 0;
    width: 6rem;
    flex: 0 0 auto;
    align-self: start;
  }

  .horizontal-line {
    display: block;
    height: 8px;
    width: 100%;
    margin: 1rem auto;
    padding: 0;
    z-index: 5;
    background: #2B6BC2;
  }

  .vertical-line {
    display: block;
    flex: 0 0 auto;
    height: calc(100px + (500 - 100) * ((100vw - 300px) / (1600 - 300)));
    width: 8px;
    margin: 2rem;
    background: #00ccb7;
    z-index: 5;
  }

  .scrim {
    display: none;
  }
}

</style>

<svelte:head>
  <title>{member.name}</title>
</svelte:head>

<div class='content' in:fadeIn out:fadeOut>
  <div class="content-card">
    <div class="member-image">
      <div class="vertical-line"/>
      <img class="team-pic" src={member.picture} alt={member.alt}/>
      <div class="scrim"></div>
    </div>
    <div class="member-text">
      <h1 class="name">{member.name}</h1>
      <h2 class="position">{member.position}</h2>
      <div class="horizontal-line"/>
      <p class="bio">{member.bio}</p>
      <button>Back</button>
    </div>
  </div>
</div>

<!-- <Content>
  <ContentCard>
    <MemberImage>
      <VerticalLine/>
      <TeamPic src={member.picture} alt={member.alt}/>
      <Scrim/>
    </MemberImage>
    <MemberText>
      <Name>{member.name}</Name>
      <Position>{member.position}</Position>
      <HorizontalLine/>
      <Bio>{member.bio}</Bio>
      <Button>Back</Button>
    </MemberText>
  </ContentCard>
</Content> -->
