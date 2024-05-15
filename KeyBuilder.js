import LinkedNote from "./LinkedNotes";

class Note {
    constructor(name) {
        this.name = name;
    }
}


let G = new Note("G");
let GSharpAFlat = new Note("G#/A♭");
let AFlat = new Note("A♭");
let A = new Note("A");
let ASharpBFlat = new Note("A#/B♭");
let BFlat = new Note("B♭")
let B = new Note("B");
let C = new Note("C");
let CSharpDFlat = new Note("C#/D♭");
let DFlat = new Note("D♭")
let D = new Note("D");
let DSharpEFlat = new Note("D#/E♭");
let EFlat = new Note("E♭");
let E = new Note ("E");
let F = new Note("F");
let FSharpGFlat = new Note("F#/G♭");
let GFlat = new Note("G♭");

let noteArray = [A, ASharpBFlat, B, C, CSharpDFlat, D, DSharpEFlat, E, F, FSharpGFlat, G, GSharpAFlat];

const majStep = [2, 2, 1, 2, 2, 2];
const minStep = [2, 1, 2 ,2, 1, 2];


function sharpsToFlats(){
    GSharpAFlat = AFlat;
    ASharpBFlat = BFlat;
    CSharpDFlat = DFlat;
    DSharpEFlat = EFlat;
    FSharpGFlat = GFlat;
}
export default function keyBuilder(key, scale){
    let keyArray = new Array(7);
    let steps = [];
    if(key === 'G#' || key === 'A♭'){
        key = 'A♭';
        sharpsToFlats();
    }
    if(key === 'A#' || key === 'B♭'){
        key = 'B♭';
        sharpsToFlats();
    }
    if(key === 'C#' ||  key === 'D♭'){
        key = 'D♭';
        sharpsToFlats();
    }
    if(key === 'D#' || key === 'E♭'){
        key = 'E♭';
        sharpsToFlats();
    }
    if(key === 'F#' || key === 'G♭'){
        key = 'G♭';
        sharpsToFlats();
    }

    
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
    console.log("\n");
    


    return keyArray;
}