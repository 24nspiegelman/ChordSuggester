export default class Note {
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

let noteArray = [A, ASharpBFlat, B, C, CSharpDFlat, D, DSharpEFlat, E, F, FSharpGFlat, G, GSharpAFlat]