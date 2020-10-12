<!-- <div class='container'>
  {#each octaves as octave}
    <div class='octave reset'>
      <div class='zone-1-grid reset fill'>
        <div class='zone-1-white-key-grid reset fill'>
          {#each Zone1WhiteKeys as key (key.id)}
            <div
              class='white-key'
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
                {@html
                  notes.includes(`${key.name[0]}${octave}aug`) ||
                  notes.includes(`${key.name[0]}${octave}P`) ||
                  notes.includes(`${key.name[0]}${octave}ma`) ||
                  notes.includes(`${key.name[0]}${octave}mi`) ||
                  notes.includes(`${key.name[0]}${octave}dim`)
                  ?
                  `<p transition:fade>${key.name[0]}</p>`
                  :
                  notes.includes(`${key.name[1]}${octave}aug`) ||
                  notes.includes(`${key.name[1]}${octave}P`) ||
                  notes.includes(`${key.name[1]}${octave}ma`) ||
                  notes.includes(`${key.name[1]}${octave}mi`) ||
                  notes.includes(`${key.name[1]}${octave}dim`)
                  ? 
                  `<p transition:fade>${key.name[1]}</p>`
                  :
                  notes.includes(`${key.name[2]}${octave}aug`) ||
                  notes.includes(`${key.name[2]}${octave}P`) ||
                  notes.includes(`${key.name[2]}${octave}ma`) ||
                  notes.includes(`${key.name[2]}${octave}mi`) ||
                  notes.includes(`${key.name[2]}${octave}dim`)
                  ?
                  `<p transition:fade>${key.name[2]}</p>`
                  :
                  toggleNotes === true
                  ?
                  `<p transition:fade>${key.name[0]}</p>`
                  :
                  ``
                }
            </div>
          {/each}
        </div>
        <div class='zone-1-black-key-grid reset fill'>
          {#each Zone1BlackKeys as key (key.id)}
            <div
              class='black-key'
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
              {
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
              }
            </div>
          {/each}
        </div>
      </div>
      <div class='zone-2-grid reset fill'>
        <div class='zone-2-white-key-grid reset fill'>
          {#each Zone2WhiteKeys as key (key.id)}
            <div
              class='white-key'
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
              {
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
              }
            </div>
          {/each}
        </div>
        <div class='zone-2-black-key-grid reset fill'>
          {#each Zone2BlackKeys as key (key.id)}
            <div
              class='black-key'
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
              {
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
              }
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div> -->

<!-- <div class='container'>
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
                  {
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
                  }
                </div>
              {/each}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</div> -->