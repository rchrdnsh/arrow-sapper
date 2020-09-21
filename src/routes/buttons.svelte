<script>
  import { fadeIn, fadeOut } from '../animate'
  
  let notes = [`C`, `C#/Db`, `D`, `D#/Eb`, `E`, `F`, `F#/Gb`, `G`, `G#/Ab`, `A`, `A#/Bb`, `B`]
  let currentNote = ``

  let chords = [`diminished`, `minor`, `major`, `augmented`]
  let currentChord = ``

  let extensions = [`triad`, `7th`]
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
    background: hsla(0, 0%, 7.5%, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div {
    margin: 0;
    padding: 2rem;
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;
  }

	button {
    display: block;
    outline: none;
    border: none;
    transition: none;
    text-transform: capitalize;
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

  .diminished {
    background: hsla(var(--dim-hue), var(--keep-it-100), 20%, 1);
    border: 1px solid hsla(var(--dim-hue), var(--keep-it-100), 50%, 1);
    z-index: 1;
  }

  .minor {
    background: hsla(var(--min-hue), var(--keep-it-100), 25%, 1);
    border: 1px solid hsla(var(--min-hue), var(--keep-it-100), 50%, 1);
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

  .active.minor {
    background: hsla(var(--min-hue), var(--keep-it-100), 50%, 1);
  }

  .active.major {
    background: hsla(var(--maj-hue), var(--keep-it-100), 45%, 1);
  }

  .active.augmented {
    background: hsla(var(--aug-hue), var(--keep-it-100), 45%, 1);
  }
</style>

<div class='container' in:fadeIn out:fadeOut>

  <div>
      <p>{capitalize(currentNote)} {capitalize(currentChord)} {capitalize(currentExtension)}</p>
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
        class:diminished={currentChord === `diminished`}
        class:minor={currentChord === `minor`}
        class:major={currentChord === `major`}
        class:augmented={currentChord === `augmented`}
        class:active={currentNote === note}
        on:click={() => currentNote = note}
      >
        {note}
      </button>
    {/each}
  </div>

  <div>
    {#each chords as chord}
      <button
        class="chord"
        class:diminished={chord === `diminished`}
        class:minor={chord === `minor`}
        class:major={chord === `major`}
        class:augmented={chord === `augmented`}
        class:active={currentChord === chord}
        on:click={() => currentChord = chord}
      >
        {chord}
      </button>
    {/each}
  </div>

  <div>
    {#each chords as chord}
      <button
        class="chord"
        class:diminished={chord === `diminished`}
        class:minor={chord === `minor`}
        class:major={chord === `major`}
        class:augmented={chord === `augmented`}
        class:active={currentChord === chord}
        on:click={() => currentChord = chord}
        on:click={() => currentExtension = `triad`}
      >
        {chord} Triad
      </button>
    {/each}
  </div>

  <div>
    {#each extensions as extension}
      <button
        class:diminished={currentChord === `diminished`}
        class:minor={currentChord === `minor`}
        class:major={currentChord === `major`}
        class:augmented={currentChord === `augmented`}
        class:active={currentExtension === extension}
        on:click={() => currentExtension = extension}
      >
        {extension}
      </button>
    {/each}
  </div>
  
</div>
