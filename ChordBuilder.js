let rootNote = '';
let thirdNote = '';
let fifthNote = '';

export default function chordBuilder(key, scale, keyArray, degree){
    
    rootNote = keyArray[degree];
    degree += 2;
    if(degree > 6){
        degree = degree % 6 - 1;
    }
    thirdNote = keyArray[degree];
    if(degree > 6){
        degree = degree % 6 - 1;
    }
    fifthNote = keyArray[degree + 4];

    return(
        
    )

};