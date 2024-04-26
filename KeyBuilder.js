// class Note {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class accidentalNote extends Note{
//     constructor(name, note1, note2){
//         this.name = name;
//         this.note1 = note1;
//         this.note2 = note2;
//     }
// }

// const G = new Note("G");
// const GSharp = new Note("G#");
// const AFlat = new Note("A♭")
// const GSharpAFlat = new accidentalNote("G#/A♭", "G#", "A♭")
// const A = new Note("A");
// const ASharp = new Note("A#");
// const BFlat = new Note("B♭")
// const ASharpBFlat = new accidentalNote("A#/B♭", "A#", "B♭" )
// const B = new Note("B");
// const C = new Note("C");
// const CSharp = new Note("C#");
// const DFlat = new Note("D♭");
// const CSharpDFlat = new accidentalNote("C#/D♭", "C#", "D♭");
// const D = new Note("D")
// const DSharp = new Note("D#");
// const EFlat = new Note("E♭")
// const DSharpEFlat = new accidentalNote("D#/E♭", "D#", "E♭");
// const E = new Note ("E");
// const F = new Note("F");
// const FSharp = new Note("F#");
// const GFlat = new Note("G♭");
// const FSharpGFlat = new accidentalNote("F#/G♭", "F#", "G♭");

// let sharpNoteArray = [A, ASharp, B, C, CSharp, D, DSharp, E, F, FSharp, G, GSharp];
// let flatNoteArray = [A, BFlat, B, C, DFlat, D, EFlat, E, F, GFlat, G, AFlat];
// let noteArray = [A, ASharpBFlat, B, C, CSharpDFlat, D, DSharpEFlat, E, F, FSharpGFlat, G, GSharpAFlat];



// export default function keyBuilder(key, scale) {
//     let keyArray = new Array(7);
//     let steps = [];
//     let noteArray = [];
//     if(scale === "Major"){
//         steps = majStep;
//     }
//     else if(scale === "Minor"){
//         steps = minStep
//     }
//     let noteIndex = 0;
//     while (noteArray[noteIndex].name !== key){
//         noteIndex++;
//         if(noteIndex > 11){
//             break;
//         }
//     }
//     let stepsIndex = 0;
//     for(let i = 0; i < 7; i++){
//         if(noteIndex >11){
//             noteIndex = noteIndex%11 - 1;
//         }
//         if(noteArray[noteIndex].name.includes(keyArray[i-1].name)){
//                 console.log("noteArray[noteIndex].name: " + noteArray[noteIndex].name)
//                 console.log("keyArray[i].name: " + keyArray[i].name);
//             }
        
//         keyArray[i] = noteArray[noteIndex];
//         noteIndex += steps[stepsIndex];
//         stepsIndex++;
//     }

//     // console.log("0: " + keyArray[0].name);
//     // console.log("1: " + keyArray[1].name);
//     // console.log("2: " + keyArray[2].name);
//     // console.log("3: " + keyArray[3].name);
//     // console.log("4: " + keyArray[4].name);
//     // console.log("5: " + keyArray[5].name);
//     // console.log("6: " + keyArray[6].name);
//     return keyArray;
// }


// const majStep = [2, 2, 1, 2, 2, 2];
// const minStep = [2, 1, 2 ,2, 1, 2];
