<script>
  // import { fadeIn, fadeOut } from '../animate'

  import Keyboard from '../components/Keyboard.svelte'

  import { chords } from '../data/chords'

  let roots = [
    {number: 1, name: [`B#`, `C`] },
    {number: 2, name: [`C#`, `Db`] },
    {number: 3, name: [`D`] },
    {number: 4, name: [`D#`, `Eb`] },
    {number: 5, name: [`E`, `Fb`] },
    {number: 6, name: [`E#`, `F`] },
    {number: 7, name: [`F#`, `Gb`] },
    {number: 8, name: [`G`] },
    {number: 9, name: [`G#`, `Ab`] },
    {number: 10, name: [`A`] },
    {number: 11, name: [`A#`, `Bb`] },
    {number: 12, name: [`B`, `Cb`] }
  ];
  let currentRoot = ``;

  let qualities = [
    `Augmented`,
    `Major`,
    `Dominant`,
    `Minor`,
    `Half-Diminished`,
    `Diminished`
  ];
  let currentQuality = ``;

  let extensions = [
    `Diad`,
    `Triad`,
    `7th`,
    `9th`,
    `11th`,
    `13th`
  ];
  let currentExtension = ``;

  $: notes = `${currentRoot} ${currentQuality} ${currentExtension}`

  let toggleNotes = false

  function capitalize(word) {
    const lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1)
  }

  function humanize(str) {
    var i, frags = str.split('-');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }
</script>

<style>

  .container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 9%, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* display: grid;
    grid-auto-flow: row;
    place-items: center;
    row-gap: 1rem; */
  }

  div {
    margin: 0;
    padding: 1rem;
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;
  }

  .notes-box {
    margin: 0;
    padding: 1rem;
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;
    place-items: center;
  }

	button {
    /* display: block; */
    outline: none;
    border: none;
    transition: none;
    text-transform: none;
    font-family: 'Share Tech', 'Odachi', 'Avenir Next Condensed', sans-serif;
    margin: 0;
    padding: 0;
    width: 4rem;
    height: 4rem;
    background:hsla(0, 0%, 15%, 1);
    border: 1px solid hsla(0, 0%, 50%, 1);
    transition: all 500ms ease;
  }

  .top {
    border-radius: 8px 8px 0 0;
  }

  .bottom {
    border-radius: 0 0 8px 8px;
  }

  .half {
    height: 2rem;
  }

  .threes {
    height: 2.75rem;
  }

  .single {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .double {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .wide {
    width: 8rem;
  }
  
  p {
    margin: 0;
    padding: 0 0 0 1rem;
    width: 16rem;
    height: 4rem;
    color: white;
    background: hsla(0, 0%, 5%, 1);
    border: 1px solid hsla(0, 0%, 50%, 1);
    border-radius: 8px;
    display: flex;
    align-items: center;
  }

  /* hr {
    width: 50vw;
    border: none;
    height: 4px;
    border-radius: 4px;
    background: #333;
  } */

  .diminished {
    background: hsla(var(--dim-hue), var(--keep-it-100), 20%, 1);
    border: 1px solid hsla(var(--dim-hue), var(--keep-it-100), 50%, 1);
    z-index: 1;
  }

  .half-diminished {
    background: hsla(var(--half-dim-hue), var(--keep-it-100), 20%, 1);
    border: 1px solid hsla(var(--half-dim-hue), var(--keep-it-100), 50%, 1);
    z-index: 1;
  }

  .minor {
    background: hsla(var(--min-hue), var(--keep-it-100), 25%, 1);
    border: 1px solid hsla(var(--min-hue), var(--keep-it-100), 50%, 1);
    z-index: 1;
  }

  .dominant {
    background: hsla(var(--dom-hue), var(--keep-it-100), 25%, 1);
    border: 1px solid hsla(var(--dom-hue), var(--keep-it-100), 50%, 1);
    z-index: 1;
  }

  .major {
    background: hsla(var(--maj-hue), var(--keep-it-100), 20%, 1);
    border: 1px solid hsla(var(--maj-hue), var(--keep-it-100), 45%, 1);
    z-index: 1;
  }

  .augmented {
    background: hsla(var(--aug-hue), var(--keep-it-100), 20%, 1);
    border: 1px solid hsla(var(--aug-hue), var(--keep-it-100), 45%, 1);
    z-index: 1;
  }

  .active {
		background: hsla(0, 0%, 50%, 1);
    color: white;
    z-index: 2;
  }

  .active.diminished {
    background: hsla(var(--dim-hue), var(--keep-it-100), 50%, 1);
  }

  .active.half-diminished {
    background: hsla(var(--half-dim-hue), var(--keep-it-100), 50%, 1);
  }

  .active.minor {
    background: hsla(var(--min-hue), var(--keep-it-100), 50%, 1);
  }

  .active.dominant {
    background: hsla(var(--dom-hue), var(--keep-it-100), 50%, 1);
  }

  .active.major {
    background: hsla(var(--maj-hue), var(--keep-it-100), 45%, 1);
  }

  .active.augmented {
    background: hsla(var(--aug-hue), var(--keep-it-100), 45%, 1);
  }

  .disabled {
    opacity: 0.4;
  }
</style>

<div class='container'>

  <div>
    <p class='threes'>{notes}</p>
    <button
      class='threes'
      on:click={() => currentRoot = ``}
      on:click={() => currentQuality = ``}
      on:click={() => currentExtension = ``}
    >
      Reset
    </button>
  </div>

  <div class='notes-box'>
    {#each roots as root}
      {#if root.name.length > 1}
      <div class='double'>
        <button
          class='top half'
          class:diminished={currentQuality === `Diminished`}
          class:half-diminished={currentQuality === `Half-Diminished`}
          class:minor={currentQuality === `Minor`}
          class:dominant={currentQuality === `Dominant`}
          class:major={currentQuality === `Major`}
          class:augmented={currentQuality === `Augmented`}
          class:active={currentRoot === root.name[0]}
          on:click={() => currentRoot = root.name[0]}
          class:disabled={
            (
              currentQuality === `Major` && (
                root.name[0] === `B#` ||
                root.name[0] === `C#` ||
                root.name[0] === `D#` ||
                root.name[0] === `E#` ||
                root.name[0] === `G#` ||
                root.name[0] === `A#`
              )
            )
            ||
            (
              currentQuality === `Dominant` && (
                root.name[0] === `B#` ||
                root.name[0] === `D#` ||
                root.name[0] === `E#` ||
                root.name[0] === `G#` ||
                root.name[0] === `A#`
              )
            )
            ||
            (
              currentQuality === `Minor` && (
                root.name[0] === `B#` ||
                root.name[0] === `E#` ||
                root.name[0] === `A#`
              )
            )
          }
        >
          {root.name[0]}
        </button>
        <button
          class='bottom half'
          class:diminished={currentQuality === `Diminished`}
          class:half-diminished={currentQuality === `Half-Diminished`}
          class:minor={currentQuality === `Minor`}
          class:dominant={currentQuality === `Dominant`}
          class:major={currentQuality === `Major`}
          class:augmented={currentQuality === `Augmented`}
          class:active={currentRoot === root.name[1]}
          on:click={() => currentRoot = root.name[1]}
          class:disabled={
            (
              currentQuality === `Major` && (
                root.name[1] === `Fb` ||
                root.name[1] === `Cb`
              )
            )
            ||
            (
              currentQuality === `Dominant` && (
                root.name[1] === `Fb` ||
                root.name[1] === `Gb` ||
                root.name[1] === `Cb`
              )
            )
            ||
            (
              currentQuality === `Minor` && (
                root.name[1] === `Db` ||
                root.name[1] === `Fb` ||
                root.name[1] === `Gb` ||
                root.name[1] === `Ab` ||
                root.name[1] === `Cb`
              )
            )
          }
        >
          {root.name[1]}
        </button>
      </div>
      {:else}
        <div class='single'>
          <button
            class:diminished={currentQuality === `Diminished`}
            class:half-diminished={currentQuality === `Half-Diminished`}
            class:minor={currentQuality === `Minor`}
            class:dominant={currentQuality === `Dominant`}
            class:major={currentQuality === `Major`}
            class:augmented={currentQuality === `Augmented`}
            class:active={currentRoot === root.name}
            on:click={() => currentRoot = root.name}
          >
            {root.name}
          </button>
        </div>
      {/if}
    {/each}
  </div>

  <!-- <div>
    {#each roots as root}
      <button
        class:diminished={currentChord === `Diminished`}
        class:half-diminished={currentChord === `Half-Diminished`}
        class:minor={currentChord === `Minor`}
        class:dominant={currentChord === `Dominant`}
        class:major={currentChord === `Major`}
        class:augmented={currentChord === `Augmented`}
        class:active={currentRoot === root}
        on:click={() => currentRoot = root}
      >
        {root}
      </button>
    {/each}
  </div> -->

  <!-- <div>
    {#each chords as chord}
      <button
        class="chord"
        class:diminished={chord === `Diminished`}
        class:minor={chord === `Minor`}
        class:major={chord === `Major`}
        class:augmented={chord === `Augmented`}
        class:active={currentChord === chord}
        on:click={() => currentChord = chord}
        on:click={() => currentExtension = `Triad`}
      >
        {chord} Triad
      </button>
    {/each}
  </div> -->

  <!-- <div>
    {#each chords as chord}
      <button
        class="chord"
        class:diminished={chord === `Diminished`}
        class:minor={chord === `Minor`}
        class:major={chord === `Major`}
        class:augmented={chord === `Augmented`}
        class:active={currentChord === chord}
        on:click={() => currentChord = chord}
        on:click={() => currentExtension = `7th`}
      >
        {chord} 7th
      </button>
    {/each}
  </div> -->

  <div>
    {#each qualities as quality}
      <button
        class='threes wide'
        class:diminished={quality === `Diminished`}
        class:half-diminished={quality === `Half-Diminished`}
        class:minor={quality === `Minor`}
        class:dominant={quality === `Dominant`}
        class:major={quality === `Major`}
        class:augmented={quality === `Augmented`}
        class:active={currentQuality === quality}
        on:click={() => currentQuality = quality}
      >
        {quality}
      </button>
    {/each}
  </div>

  <div>
    {#each extensions as extension}
      <button
        class='threes'
        class:diminished={currentQuality === `Diminished`}
        class:half-diminished={currentQuality === `Half-Diminished`}
        class:minor={currentQuality === `Minor`}
        class:dominant={currentQuality === `Dominant`}
        class:major={currentQuality === `Major`}
        class:augmented={currentQuality === `Augmented`}
        class:active={currentExtension === extension}
        class:disabled={
          (
            (
              extension === `Diad` ||
              extension === `Triad`
            )
            &&
            (
              currentQuality === `Half-Diminished` ||
              currentQuality === `Dominant`
            )
          )
          ||
          (
            (
              extension === `Diad`
            )
            &&
            (
              currentQuality === `Half-Diminished` ||
              currentQuality === `Dominant` ||
              currentQuality === `Diminished` ||
              currentQuality === `Augmented`
            )
          )
        }
        on:click={() => currentExtension = extension}
      >
        {extension}
      </button>
    {/each}
  </div>

  <div>
    <Keyboard
      octaves={[`2`, `3`, `4`]}
      notes={chords[notes] || []}
      toggleNotes={toggleNotes}
    />
  </div>

  <button
    class='threes wide'
    class:active={toggleNotes === true}
    on:click={() => toggleNotes = !toggleNotes}
  >
    Note Names
  </button>
  
</div>
