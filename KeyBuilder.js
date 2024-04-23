class Note {
    constructor(name) {
        this.name = name;
    }
}

const G = new Note("G");
const GSharpAFlat = new Note("G#/A♭");
const A = new Note("A");
const ASharpBFlat = new Note("A#/B♭");
const B = new Note("B");
const C = new Note("C");
const CSharpDFlat = new Note("C#/D♭");
const D = new Note("D")
const DSharpEFlat = new Note("D#/E♭");
const E = new Note ("E");
const F = new Note("F");
const FSharpGFlat = new Note("F#/G♭");

let noteArray = [A, ASharpBFlat, B, C, CSharpDFlat, D, DSharpEFlat, E, F, FSharpGFlat, G, GSharpAFlat];



export default function keyBuilder(key, scale) {
    let keyArray = new Array(7);
    let steps = [];
    if(scale === "Major"){
        steps = majStep;
    }
    else if(scale === "Minor"){
        steps = minStep
    }
    let noteIndex = 0;
    while (noteArray[noteIndex].name !== key){
        noteIndex++;
        if(noteIndex > 11){
            break;
        }
    }
    let stepsIndex = 0;
    for(let i = 0; i < 7; i++){
        if(noteIndex >11){
            noteIndex = noteIndex%11 - 1;
        }
        keyArray[i] = noteArray[noteIndex];
        console.log("noteArray[noteIndex]: " + noteArray[noteIndex]);
        noteIndex += steps[stepsIndex];
        stepsIndex++;
    }

    return keyArray;
}


const majStep = [2, 2, 1, 2, 2];
const minStep = [2, 1, 2 ,2, 1];
