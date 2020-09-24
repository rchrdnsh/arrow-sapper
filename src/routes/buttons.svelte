<script>
  import { fadeIn, fadeOut } from '../animate'

  import Keyboard from '../components/Keyboard.svelte'
  
  let notes = [`C`, `C#/Db`, `D`, `D#/Eb`, `E`, `F`, `F#/Gb`, `G`, `G#/Ab`, `A`, `A#/Bb`, `B`]
  let currentNote = ``

  let chords = [`Augmented`, `Major`, `Dominant`, `Minor`, `Half-Diminished`, `Diminished`]
  let currentChord = ``

  let extensions = [`Triad`, `7th`, `9th`, `11th`, `13th`]
  let currentExtension = ``

  function capitalize(word) {
    const lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1)
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

	button {
    /* display: block; */
    outline: none;
    border: none;
    transition: none;
    text-transform: none;
    margin: 0;
    padding: 0;
    width: 4rem;
    height: 4rem;
    background:hsla(0, 0%, 15%, 1);
    border: 1px solid hsla(0, 0%, 50%, 1);
  }

  .chord {
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

  hr {
    width: 50vw;
    border: none;
    height: 4px;
    border-radius: 4px;
    background: #333;
  }

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
    opacity: 0.25;
  }
</style>

<div class='container' in:fadeIn out:fadeOut>

  <div>
    <p>{currentNote} {currentChord} {currentExtension}</p>
    <button
      on:click={() => currentNote = ``}
      on:click={() => currentChord = ``}
      on:click={() => currentExtension = ``}
    >
      Reset
    </button>
  </div>

  <div>
    {#each notes as note}
      <button
        class:diminished={currentChord === `Diminished`}
        class:half-diminished={currentChord === `Half-Diminished`}
        class:minor={currentChord === `Minor`}
        class:dominant={currentChord === `Dominant`}
        class:major={currentChord === `Major`}
        class:augmented={currentChord === `Augmented`}
        class:active={currentNote === note}
        on:click={() => currentNote = note}
      >
        {note}
      </button>
    {/each}
  </div>

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
    {#each chords as chord}
      <button
        class="chord"
        class:diminished={chord === `Diminished`}
        class:half-diminished={chord === `Half-Diminished`}
        class:minor={chord === `Minor`}
        class:dominant={chord === `Dominant`}
        class:major={chord === `Major`}
        class:augmented={chord === `Augmented`}
        class:active={currentChord === chord}
        on:click={() => currentChord = chord}
      >
        {chord}
      </button>
    {/each}
  </div>

  <div>
    {#each extensions as extension}
      <button
        class:diminished={currentChord === `Diminished`}
        class:half-diminished={currentChord === `Half-Diminished`}
        class:minor={currentChord === `Minor`}
        class:dominant={currentChord === `Dominant`}
        class:major={currentChord === `Major`}
        class:augmented={currentChord === `Augmented`}
        class:active={currentExtension === extension}
        class:disabled={extension === `Triad` && (currentChord === `Half-Diminished` || currentChord === `Dominant`)}
        on:click={() => currentExtension = extension}
      >
        {extension}
      </button>
    {/each}
  </div>

  <div>
    <Keyboard octaves={[`3`, `4`, `5`]} notes={[`C4P`, `E4ma`, `G4P`, `Bb4mi`]}/>
  </div>
  
</div>
