import Chord from './ChordClass.js';
import Note from './NotesClass.js';

const G = Note.G;
const GSharpAFlat = Note.GSharpAFlat;
const A = Note.A;
const ASharpBFlat = Note.ASharpBFlat;
const B = Note.B;
const C = Note.C;
const CSharpDFlat = new Note("C#/D♭");
const D = new Note("D")
const DSharpEFlat = new Note("D#/E♭");
const E = new Note ("E");
// const F = new Note("F");
const FSharpGFlat = new Note("F#/G♭");

const CMaj = new Chord(C, E, G);
const DMaj = new Chord(D, FSharpGFlat, A);
const EMaj = new Chord(E, GSharpAFlat, B);
const FMaj = new Chord(F, A, C);
const GMaj = new Chord(G, B, D);
const AMaj = new Chord(A, CSharpDFlat, E);
const BMaj = new Chord(B, DSharpEFlat, FSharpGFlat);

const CMin = new Chord(C, DSharpEFlat, G);
const DMin = new Chord(D, F, A);
const EMin = new Chord(E, G, B);
const FMin = new Chord(F, GSharpAFlat);
const GMin = new Chord(G, ASharpBFlat, D);
const AMin = new Chord(A, C, E);
const BMin = new Chord(B, D, FSharpGFlat);