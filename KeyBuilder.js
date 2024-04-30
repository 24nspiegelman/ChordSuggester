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
const C = new Note("B#/C");
const CSharpDFlat = new Note("C#/D♭");
const D = new Note("D")
const DSharpEFlat = new Note("D#/E♭");
const E = new Note ("E");
const F = new Note("E#/F");
const FSharpGFlat = new Note("F#/G♭");
let noteArray = [A, ASharpBFlat, B, C, CSharpDFlat, D, DSharpEFlat, E, F, FSharpGFlat, G, GSharpAFlat];
export default function keyBuilder(key, scale) {
    let keyArray = new Array(7);
    let steps = [];
    console.log("key: " + key);
    console.log("scale: " + scale);
    if(scale === "Major"){
        steps = majStep;
    }
    else if(scale === "Minor"){
        steps = minStep
    }
    let noteIndex = 0;
    while (!noteArray[noteIndex].name.includes(key)){
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
        console.log("noteArray[noteIndex]: " + noteArray[noteIndex].name);
        noteIndex += steps[stepsIndex];
        stepsIndex++;
    }

    console.log("0: " + keyArray[0].name);
    console.log("1: " + keyArray[1].name);
    console.log("2: " + keyArray[2].name);
    console.log("3: " + keyArray[3].name);
    console.log("4: " + keyArray[4].name);
    console.log("5: " + keyArray[5].name);
    console.log("6: " + keyArray[6].name);
    return keyArray;
}


const majStep = [2, 2, 1, 2, 2, 2];
const minStep = [2, 1, 2 ,2, 1, 2];