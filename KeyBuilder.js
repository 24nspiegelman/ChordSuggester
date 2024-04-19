import noteArray from './NotesClass.js';



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
    while (noteArray[noteIndex] !== key){
        noteIndex++;
        if(noteIndex > 5){
            console.log('Too Far');
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

    return keyArray;
}


const majStep = [2, 2, 1, 2, 2];
const minStep = [2, 1, 2 ,2, 1];
