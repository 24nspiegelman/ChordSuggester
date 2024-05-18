import Chord from './ChordClass.js'; 
let rootNote = '';
let thirdNote = '';
let fifthNote = '';

export default function chordBuilder(key, scale, keyArray, degree){
    degree -= 1;
    rootNote = keyArray[degree];
    degree += 2;
    if(degree > 6){
        degree = degree % 6 - 1;
    }
    thirdNote = keyArray[degree];
    if(degree > 6){
        degree = degree % 6 - 1;
    }
    degree += 2;
    if(degree > 6){
        degree = degree % 6 - 1;
    }
    fifthNote = keyArray[degree];

    let chord = new Chord(rootNote, thirdNote, fifthNote);
    return(
        chord;
    )

};