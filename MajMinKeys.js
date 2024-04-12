import majChordArray from './ChordClass.js';
import minChordArray from './ChordClass.js';
import noteArray from './NotesClass.js';
import Key from './KeyClass.js';


const CMajNotes = new Array;
const DMajNotes = new Array;
const EMajNotes = new Array;
const FMajNotes = new Array;
const GMajNotes = new Array;
const AMajNotes = new Array;
const BMajNotes = new Array;

const input = prompt("Enter a key:");
let j = 0;
let s = 0;
    for(let k = 0; k < noteArray.length; k++){
        if (input.toUpperCase === noteArray[k]){
            j = k;
            break;
        }
    }

for (let i = 0; i < noteArray.length; i++){
    

}
const majStep = [2, 2, 1, 2, 2, 2, 1];
