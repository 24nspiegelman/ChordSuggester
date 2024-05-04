export default class LinkedNote{

    constructor(root, note1, note2, next){
        this.root = root;
        this.note1 = note1;
        this.note2 = note2;
        this.next = next;

    }
}

const A = new LinkedNote('A', 'A♭', 'A#', B);
const B = new LinkedNote('B', 'B♭', null, C);
const C = new LinkedNote('C', null, 'C#', D);
const D = new LinkedNote('D', 'D♭', 'D#', E);
const E = new LinkedNote('E', 'E♭', null, F);
const F = new LinkedNote('F', null, 'F#', G);
const G = new LinkedNote('G', 'G♭', 'G#', A);

const noteArray = [A, B, C, D, E, F, G];