import WebMidi from 'webmidi';

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});

// sapper.prefetchRoutes();

// --------------------------------
// Web MIDI API!
// --------------------------------

WebMidi.enable(function (err) {

  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled!");
  }

  // Viewing available inputs and outputs
  console.log(WebMidi.inputs);
  console.log(WebMidi.outputs);
  
  // Reacting when a new device becomes available
  WebMidi.addListener("connected", function(e) {
    console.log(e);
  });
  
  // Reacting when a device becomes unavailable
  WebMidi.addListener("disconnected", function(e) {
    console.log(e);
  });

  // Display the current time
  console.log(WebMidi.time);

  // Retrieve an input by name, id or index
  var input = WebMidi.getInputByName();
  input = WebMidi.getInputById();
  input = WebMidi.inputs[0];

  // Listen for a 'note on' message on all channels
  input.addListener('noteon', "all",
    function (e) {
      console.log(
        `
          Note ON:
            Name: ${e.note.name},
            Number: ${e.note.number},
            Velcocity: ${e.rawVelocity}
          ...yay!
        `
      );
    }
  );

  // Listen for a 'note on' message on all channels
  input.addListener('noteoff', "all",
    function (e) {
      console.log(
        `
          Note OFF:
            Name: ${e.note.name},
            Number: ${e.note.number}
          ...no!
        `
      );
    }
  );

});

// WebMidi.enable(function (err) {

//   if (err) {
//     console.log("WebMidi could not be enabled.", err);
//   } else {
//     console.log("WebMidi enabled!");
//   }
  
// });

// WebMidi.enable(function (err) {
//   console.log(WebMidi.inputs);
//   console.log(WebMidi.outputs);
// });

//  // Reacting when a new device becomes available
//  WebMidi.addListener("connected", function(e) {
//   console.log(e);
// });

// // Reacting when a device becomes unavailable
// WebMidi.addListener("disconnected", function(e) {
//   console.log(e);
// });

// // Display the current time
// console.log(WebMidi.time);



// if (navigator.requestMIDIAccess) {
// 	console.log('This browser supports WebMIDI!');
// } else {
// 	console.log('WebMIDI is not supported in this browser.');
// }

// navigator.requestMIDIAccess()
//   .then(onMIDISuccess, onMIDIFailure);

// function onMIDISuccess(midiAccess) {
//   console.log(midiAccess);

//   var inputs = midiAccess.inputs;
// 	var outputs = midiAccess.outputs;
	
// 	for (var input of midiAccess.inputs.values()) {
// 		input.onmidimessage = getMIDIMessage;
// 	}
// }

// function onMIDIFailure() {
//   console.log('Could not access your MIDI devices.');
// }

// function getMIDIMessage(midiMessage) {
// 	console.log(midiMessage);
// }

// function getMIDIMessage(midiMessage) {
//   // MIDI commands we care about. See
//   // http://webaudio.github.io/web-midi-api/#a-simple-monophonic-sine-wave-midi-synthesizer.
//   const NOTE_ON = 9;
//   const NOTE_OFF = 8;

//   const cmd = midiMessage.data[0] >> 4;
//   const pitch = midiMessage.data[1];
//   const velocity = (midiMessage.data.length > 2) ? midiMessage.data[2] : 1;
  
//   // You can use the timestamp to figure out the duration of each note.
//   const timestamp = Date.now();
  
//   // Note that not all MIDI controllers send a separate NOTE_OFF command for every NOTE_ON.
//   if (cmd === NOTE_OFF || (cmd === NOTE_ON && velocity === 0)) {
//     console.log(`🎧 from ${midiMessage.srcElement.name} note off: pitch:${pitch}, velocity: ${velocity}`);
  
//     // Complete the note!
//     const note = notesOn.get(pitch);
//     if (note) {
//       console.log(`🎵 pitch:${pitch}, duration:${timestamp - note} ms.`);
//       notesOn.delete(pitch);
//     }
//   } else if (cmd === NOTE_ON) {
//     console.log(`🎧 from ${midiMessage.srcElement.name} note off: pitch:${pitch}, velocity: {velocity}`);
    
//     // One note can only be on at once.
//     notesOn.set(pitch, timestamp);
//   }
// }