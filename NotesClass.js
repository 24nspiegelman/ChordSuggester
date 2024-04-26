export default class Note {
    constructor(name) {
        this.name = name;
    }

    constructor(name, note1, note2){
        this.name = name;
        this.note1 = note1;
        this.note2 = note2;
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