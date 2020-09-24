<script>
  export let octaves;
  export let notes;

  let keys = {
    Zone1: {
      WhiteKeys: {
        Note1: [`B#`, `C`],
        Note2: [`D`],
        Note3: [`E`, `Fb`]
      },
      BlackKeys: {
        Note1: [`C#`, `Db`],
        Note2: [`D#`, `Eb`]
      }
    },
    Zone2: {
      WhiteKeys: {
        Note1: [`E#`, `F`],
        Note2: [`G`],
        Note3: [`A`],
        Note4: [`B`, `Cb`]
      },
      'black-keys': {
        'note-1': 'F#/Gb',
        'note-2': 'G#/Ab',
        'note-2': 'A#/Bb',
      }
    }
  }

  let Zone1WhiteKeys = [`C`, `D`, `E`]
  let Zone1BlackKeys = [`Db C#`, `Eb D#`]
  let Zone2WhiteKeys = [`F`, `G`, `A`, `B`]
  let Zone2BlackKeys = [`Gb F#`, `Ab G#`, `Bb Ab`]
</script>


<style>
  .reset {
    margin: 0;
    padding: 0;
  }

  .fill {
    width: 100%;
    height: 100%;
  }

  .container {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 3px;
    border: 3px solid black;
  }

  .octave {
    width: 22rem;
    height: 14rem;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 4fr;
    grid-column-gap: 2px;
    /* border: 1px solid black; */
  }

  @media (orientation: portrait) {
    .octave {
      grid-gap: 2px;
    }
  }

  @media (orientation: landscape) {
    .octave {
      grid-gap: 3px;
    }
  }

  .zone-1-grid {
    background: black;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr;
    /* grid-template-rows: ${props => props.vertical ? `1fr` : `2fr 1fr`}; */
    /* grid-template-columns: ${props => props.vertical ? `2fr 1fr` : `1fr`}; */
  }

  .zone-2-grid {
    background: black;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr;
    /* grid-template-rows: ${props => props.vertical ? `1fr` : `2fr 1fr`}; */
    /* grid-template-columns: ${props => props.vertical ? `2fr 1fr` : `1fr`}; */
  }

  .zone-1-white-key-grid {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    /* grid-row: ${props => props.vertical ? `1 / 2` : `1 / 3`}; */
    /* grid-column: ${props => props.vertical ? `1 / 3` : `1 / 2`}; */
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 35fr);
    /* grid-template-rows: ${props => props.vertical ? `repeat(3, 35fr)` : `1fr`}; */
    /* grid-template-columns: ${props => props.vertical ? `1fr` : `repeat(3, 35fr)`}; */
    z-index: 1;
  }

  @media (orientation: portrait) {
    .zone-1-white-key-grid {
      grid-gap: 2px;
    }
  }

  @media (orientation: landscape) {
    .zone-1-white-key-grid {
      grid-gap: 3px;
    }
  }

.zone-2-white-key-grid {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  /* grid-row: ${props => props.vertical ? `1 / 2` : `1 / 3`}; */
  /* grid-column: ${props => props.vertical ? `1 / 3` : `1 / 2`}; */
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 35fr);
  /* grid-template-rows: ${props => props.vertical ? `repeat(4, 35fr)` : `1fr` }; */
  /* grid-template-columns: ${props => props.vertical ? `1fr` : `repeat(4, 35fr)`}; */
  z-index: 1;
}

@media (orientation: portrait) {
  .zone-2-white-key-grid {
    grid-gap: 2px;
  }
}

@media (orientation: landscape) {
  .zone-2-white-key-grid {
    grid-gap: 3px;
  }
}

.zone-1-black-key-grid {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 21fr);
  /* grid-template-rows: ${props => props.vertical ? `repeat(5, 21fr)` : `1fr`}; */
  /* grid-template-columns: ${props => props.vertical ? `1fr` : `repeat(5, 21fr)`}; */
  align-items: center;
  justify-items: center;
  z-index: 2;
}

.zone-2-black-key-grid {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(7, 20fr);
  /* grid-template-rows: ${props => props.vertical ? `repeat(7, 20fr)` : `1fr`}; */
  /* grid-template-columns: ${props => props.vertical ? `1fr` : `repeat(7, 20fr)`}; */
  align-items: center;
  justify-items: center;
  z-index: 2;
}

.white-key {
  margin: 0;
  padding: 0 0 0.1rem 0;
  background: white;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: end;
  justify-items: center;
  color: black;
  /* font-family: 'Share Tech', 'odachi', sans-serif; */
  font-size: 24px;
}

@media (orientation: portrait) {
  .white-key {
    padding: 0 0 0.1rem 0;
    /* border-radius: ${props => props.vertical ? `0 2px 2px 0` : `0 0 2px 2px` }; */
    /* font-size: 16px; */
  }
}

@media (orientation: landscape) {
  .white-key {
    padding: 0 0 0.1rem 0;
    /* border-radius: ${props => props.vertical ? `0 2px 2px 0` : `0 0 4px 4px` }; */
    /* font-size: 40px; */
  }
}

.black-key {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: end;
  justify-items: center;
  color: white;
  /* font-family: 'Share Tech', 'Odachi', 'Avenir Next Condensed', sans-serif; */
  font-size: 12px;
}

.black-key:nth-child(1) {
  grid-column: 2/3;
}

.black-key:nth-child(2) {
  grid-column: 4/5;
}

.black-key:nth-child(3) {
  grid-column: 6/7;
}

.black-key > p {
  margin: 0;
  padding: 0;
  font-family: 'Share Tech', 'Odachi', 'Avenir Next Condensed';
  writing-mode: vertical-lr;
  -webkit-text-orientation: upright;
  text-orientation: upright;
}

@media(orientation: portrait) {
  .black-key {
    border: 2px solid black;
    border-top: 0;
    font-size: 8px;
    line-height: 1;
    letter-spacing: 0px;
  }
}

  @media(orientation: landscape) {
    .black-key {
    border: 3px solid black;
    border-top: 0;
    }

    .black-key > p {
      writing-mode: horizontal-tb;
      letter-spacing: 0px;
      text-align: center;
      line-height: 1.25;
      font-size: 14px;
      padding: 0 0 0.25rem 0;
    }

    /* padding: 0; */
    /* padding: 0; */
    /* border: 0.25rem solid black; */
    /* border: 4px solid black;
    border-top: ${props => props.vertical ? `4px` : `none`};
    border-left: ${props => props.vertical ? `none` : `4px`}; */
    /* font-size: 24px; */
  }

.unselected-white-key {
  background: white;
  color: black;
  text-shadow: none;
}

.unselected-black-key {
  background: black;
  /* border-top: ${props => props.vertical ? `4px solid black` : `none`};
  border-right: ${props => props.vertical ? `4px solid black` : `5px solid black`};
  border-bottom: ${props => props.vertical ? `4px solid black` : `5px solid black`};
  border-left: ${props => props.vertical ? `none` : `5px solid black`}; */
  /* background-image: ${props => props.vertical ? `url(${VBK})` : `url(${HBK})`}; */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  /* background-position: top center; */
  /* background-size: stretch stretch; */
  /* color: white; */
  /* text-shadow: none; */
  /* align-self: stretch; */
  /* transition: background-image 0.1s; */
  /* border: 8px solid black; */
}

.augmented-key {
  background: #ffa600;
  color: white;
  text-shadow: 0px 0px 4px black;
  /* border: 2px solid black; */
}

.perfect-key {
  background: red;
  color: white;
  text-shadow: 0px 0px 4px black;
  /* border: 2px solid black; */
}

.major-key {
  background: #ff7700;
  color: white;
  text-shadow: 0px 0px 4px black;
  /* border: 2px solid black; */
}

.minor-key {
  background: blue;
  color: white;
  text-shadow: 0px 0px 4px black;
  /* border: 2px solid black; */
}

.diminished-key {
  background: purple;
  color: white;
  text-shadow: 0px 0px 4px black;
  /* border: 2px solid black; */
}

.midi-note {
  background: red;
  color: white;
  text-shadow: 0px 0px 2px black;
}

.octave-number {
  margin: 0;
  font-family: 'Share Tech', 'Odachi', 'Avenir Next Condensed';
  color: #ccc;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  z-index: 0;
  /* opacity: ${props =>
    props.noteNumbers.includes(24 + (12 * props.octave)) ||
    props.notes.includes(`c${props.octave}dim`) ||
    props.notes.includes(`c${props.octave}mi`) ||
    props.notes.includes(`c${props.octave}ma`) ||
    props.notes.includes(`c${props.octave}p`) ||
    props.notes.includes(`c${props.octave}aug`) ||
    props.notes.includes(`b#${props.octave}dim`) ||
    props.notes.includes(`b#${props.octave}mi`) ||
    props.notes.includes(`b#${props.octave}ma`) ||
    props.notes.includes(`b#${props.octave}p`) ||
    props.notes.includes(`b#${props.octave}aug`)
    ?
      `0`
    :
      `1`
  }; */
}

@media(orientation: portrait) {
  .octave-number {
    font-size: 12px;
    padding: 0 0 0.25rem 0;
  }
}

@media(orientation: landscape) {
  .octave-number {
    font-size: 24px;
    padding: 0 0 0.5rem 0;
  }
}
</style>

<div class='container'>
  {#each octaves as octave}
    <div class='octave reset'>
      <div class='zone-1-grid reset fill'>
        <div class='zone-1-white-key-grid reset fill'>
          {#each Zone1WhiteKeys as key}
            <div
              class='white-key'
              class:augmented-key={notes.includes(`${key}${octave}aug`)}
              class:major-key={notes.includes(`${key}${octave}ma`)}
              class:perfect-key={notes.includes(`${key}${octave}P`)}
              class:minor-key={notes.includes(`${key}${octave}mi`)}
              class:diminished-key={notes.includes(`${key}${octave}dim`)}
            >
              {key}
            </div>
          {/each}
        </div>
        <div class='zone-1-black-key-grid reset fill'>
          {#each Zone1BlackKeys as key}
            <div
              class='black-key'
              class:augmented-key={notes.includes(`${key}${octave}aug`)}
              class:major-key={notes.includes(`${key}${octave}ma`)}
              class:perfect-key={notes.includes(`${key}${octave}P`)}
              class:minor-key={notes.includes(`${key}${octave}mi`)}
              class:diminished-key={notes.includes(`${key}${octave}dim`)}
            >
              {key}
            </div>
          {/each}
        </div>
      </div>
      <div class='zone-2-grid reset fill'>
        <div class='zone-2-white-key-grid reset fill'>
          {#each Zone2WhiteKeys as key}
            <div
              class='white-key'
              class:augmented-key={notes.includes(`${key}${octave}aug`)}
              class:major-key={notes.includes(`${key}${octave}ma`)}
              class:perfect-key={notes.includes(`${key}${octave}P`)}
              class:minor-key={notes.includes(`${key}${octave}mi`)}
              class:diminished-key={notes.includes(`${key}${octave}dim`)}
            >
              {key}
            </div>
          {/each}
        </div>
        <div class='zone-2-black-key-grid reset fill'>
          {#each Zone2BlackKeys as key}
            <div
              class='black-key'
              class:augmented-key={notes.includes(`${key}${octave}aug`)}
              class:major-key={notes.includes(`${key}${octave}ma`)}
              class:perfect-key={notes.includes(`${key}${octave}P`)}
              class:minor-key={notes.includes(`${key}${octave}mi`)}
              class:diminished-key={notes.includes(`${key}${octave}dim`)}
            >
              {key}
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>