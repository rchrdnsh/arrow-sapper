<script>
  import { fade } from 'svelte/transition';

  export let octaves;
  export let notes;
  export let toggleNotes;

  let qualities = [`aug`, `P`, `ma`, `mi`, `dim`];

  let zones = [
    {
      number: 1,
      keys: [
        {
          color: `white`,
          names: [
            {id: 1, name: [`C`, `B#`, `Dbb`]},
            {id: 2, name: [`D`, `Cx`, `Ebb`]},
            {id: 3, name: [`E`, `Dx`, `Fb`]}
          ]
        },
        {
          color: `black`,
          names: [
            {id: 1, name: [`C#`, `Db`]},
            {id: 2, name: [`D#`, `Eb`]}
          ]
        }
      ]
    },
    {
      number: 2,
      keys: [
        {
          color: `white`,
          names: [
            {id: 1, name: [`F`, `E#`, `Gbb`]},
            {id: 2, name: [`G`, `Fx`, `Abb`]},
            {id: 3, name: [`A`, `Gx`, `Bbb`]},
            {id: 4, name: [`B`, `Ax`, `Cb`]}
          ]
        },
        {
          color: `black`,
          names: [
            {id: 1, name: [`F#`, `Gb`, `Ex`]},
            {id: 2, name: [`G#`, `Ab`]},
            {id: 3, name: [`A#`, `Bb`, `Cbb`]}
          ]
        }
      ]
    }
  ]

  let Zone1WhiteKeys = [
    {id: 1, name: [`C`, `B#`]},
    {id: 2, name: [`D`]},
    {id: 3, name: [`E`, `Dx`, `Fb`]}
  ];
  let Zone1BlackKeys = [
    {id: 1, name: [`C#`, `Db`]},
    {id: 2, name: [`D#`, `Eb`]}
  ];
  let Zone2WhiteKeys = [
    {id: 1, name: [`F`, `E#`, `Gbb`]},
    {id: 2, name: [`G`, `Fx`, `Abb`]},
    {id: 3, name: [`A`, `Gx`, `Bbb`]},
    {id: 4, name: [`B`, `Ax`, `Cb`]}
  ];
  let Zone2BlackKeys = [
    {id: 1, name: [`F#`, `Gb`, `Ex`]},
    {id: 2, name: [`G#`, `Ab`]},
    {id: 3, name: [`A#`, `Bb`, `Cbb`]}
  ];
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
  color: #999;
  font-family: 'Share Tech', 'odachi', sans-serif;
  font-size: 24px;
  transition: all 500ms ease;
}

.white-key > p {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Share Tech', 'odachi', sans-serif;
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
  color: #999;
  font-family: 'Share Tech', 'Odachi', 'Avenir Next Condensed', sans-serif;
  font-size: 12px;
  transition: all 500ms ease;
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
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  margin: 0;
  padding: 0;
  font-family: 'Share Tech', 'Odachi', 'Avenir Next Condensed', sans-serif;
  writing-mode: vertical-lr;
  -webkit-text-orientation: upright;
  text-orientation: upright;
}

.black-key > .stack {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
}

.black-key > .stack > p {
  line-height: 1;
  margin: 0;
  padding: 0;
  letter-spacing: 0px;
  text-align: center;
  line-height: 1.25;
  font-size: 14px;
  padding: 0 0 0.25rem 0;
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
      grid-row: 1 / 2;
      grid-column: 1 / 2;
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
    <div class='reset octave'>
      {#each zones as zone}
        <div
          class={
            zone.number === 1 ? `reset fill zone-1-grid` :
            zone.number === 2 ? `reset fill zone-2-grid` :
            ``
          }
        >
          {#each zone.keys as keys}
            <div
              class={
                (zone.number === 1 && keys.color === `white`) ? `reset fill zone-1-white-key-grid` :
                (zone.number === 1 && keys.color === `black`) ? `reset fill zone-1-black-key-grid` :
                (zone.number === 2 && keys.color === `white`) ? `reset fill zone-2-white-key-grid` :
                (zone.number === 2 && keys.color === `black`) ? `reset fill zone-2-black-key-grid` :
                ``
              }
            >
              {#each keys.names as key (key.id)}
                <div
                  class={
                    keys.color === `white` ? `white-key` :
                    keys.color === `black` ? `black-key` :
                    ``
                  }
                  class:augmented-key={
                    notes.includes(`${key.name[0]}${octave}aug`) ||
                    notes.includes(`${key.name[1]}${octave}aug`) ||
                    notes.includes(`${key.name[2]}${octave}aug`)
                  }
                  class:major-key={
                    notes.includes(`${key.name[0]}${octave}ma`) ||
                    notes.includes(`${key.name[1]}${octave}ma`) ||
                    notes.includes(`${key.name[2]}${octave}ma`)
                  }
                  class:perfect-key={
                    notes.includes(`${key.name[0]}${octave}P`) ||
                    notes.includes(`${key.name[1]}${octave}P`) ||
                    notes.includes(`${key.name[2]}${octave}P`)
                  }
                  class:minor-key={
                    notes.includes(`${key.name[0]}${octave}mi`) ||
                    notes.includes(`${key.name[1]}${octave}mi`) ||
                    notes.includes(`${key.name[2]}${octave}mi`)
                  }
                  class:diminished-key={
                    notes.includes(`${key.name[0]}${octave}dim`) ||
                    notes.includes(`${key.name[1]}${octave}dim`) ||
                    notes.includes(`${key.name[2]}${octave}dim`)
                  }
                >
                {#if
                  notes.includes(`${key.name[0]}${octave}aug`) ||
                  notes.includes(`${key.name[0]}${octave}P`) ||
                  notes.includes(`${key.name[0]}${octave}ma`) ||
                  notes.includes(`${key.name[0]}${octave}mi`) ||
                  notes.includes(`${key.name[0]}${octave}dim`)
                }
                  <p transition:fade={{ duration: 500 }}>{key.name[0]}</p>
                {:else if
                  notes.includes(`${key.name[1]}${octave}aug`) ||
                  notes.includes(`${key.name[1]}${octave}P`) ||
                  notes.includes(`${key.name[1]}${octave}ma`) ||
                  notes.includes(`${key.name[1]}${octave}mi`) ||
                  notes.includes(`${key.name[1]}${octave}dim`)
                }
                  <p transition:fade={{ duration: 500 }}>{key.name[1]}</p>
                {:else if
                  notes.includes(`${key.name[2]}${octave}aug`) ||
                  notes.includes(`${key.name[2]}${octave}P`) ||
                  notes.includes(`${key.name[2]}${octave}ma`) ||
                  notes.includes(`${key.name[2]}${octave}mi`) ||
                  notes.includes(`${key.name[2]}${octave}dim`)
                }
                  <p transition:fade={{ duration: 500 }}>{key.name[2]}</p>
                {:else if toggleNotes === true}
                  {#if keys.color === `black`}
                    <div class='stack'>
                      <p transition:fade={{ duration: 500 }}>{key.name[0]}</p>
                      <p transition:fade={{ duration: 500 }}>{key.name[1]}</p>
                    </div>
                  {:else}
                    <p transition:fade={{ duration: 500 }}>{key.name[0]}</p>
                  {/if}
                {/if}

                  <!-- {
                    notes.includes(`${key.name[0]}${octave}aug`) ||
                    notes.includes(`${key.name[0]}${octave}P`) ||
                    notes.includes(`${key.name[0]}${octave}ma`) ||
                    notes.includes(`${key.name[0]}${octave}mi`) ||
                    notes.includes(`${key.name[0]}${octave}dim`)
                    ?
                    `${key.name[0]}`
                    :
                    notes.includes(`${key.name[1]}${octave}aug`) ||
                    notes.includes(`${key.name[1]}${octave}P`) ||
                    notes.includes(`${key.name[1]}${octave}ma`) ||
                    notes.includes(`${key.name[1]}${octave}mi`) ||
                    notes.includes(`${key.name[1]}${octave}dim`)
                    ? 
                    `${key.name[1]}`
                    :
                    notes.includes(`${key.name[2]}${octave}aug`) ||
                    notes.includes(`${key.name[2]}${octave}P`) ||
                    notes.includes(`${key.name[2]}${octave}ma`) ||
                    notes.includes(`${key.name[2]}${octave}mi`) ||
                    notes.includes(`${key.name[2]}${octave}dim`)
                    ?
                    `${key.name[2]}`
                    :
                    toggleNotes === true
                    ?
                    `${key.name[0]}`
                    :
                    ``
                  } -->
                </div>
              {/each}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>