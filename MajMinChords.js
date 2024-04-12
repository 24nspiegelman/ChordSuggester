import Chord from './ChordClass.js';
import noteArray from './NotesClass.js';


const G = noteArray.G;
const GSharpAFlat = noteArray.GSharpAFlat;
const A = noteArray.A;
const ASharpBFlat = noteArray.ASharpBFlat;
const B = noteArray.B;
const C = noteArray.C;
const CSharpDFlat = new noteArray("C#/D♭");
const D = new noteArray("D")
const DSharpEFlat = new noteArray("D#/E♭");
const E = new noteArrayoteArray ("E");
const F = new noteArray("F");
const FSharpGFlat = new noteArray("F#/G♭");

const CMaj = new Chord(C, E, G);
const DMaj = new Chord(D, FSharpGFlat, A);
const EMaj = new Chord(E, GSharpAFlat, B);
const FMaj = new Chord(F, A, C);
const GMaj = new Chord(G, B, D);
const AMaj = new Chord(A, CSharpDFlat, E);
const BMaj = new Chord(B, DSharpEFlat, FSharpGFlat);

let majChordArray = [CMaj, DMaj, EMaj, FMaj, GMaj, AMaj, BMaj];

const CMin = new Chord(C, DSharpEFlat, G);
const DMin = new Chord(D, F, A);
const EMin = new Chord(E, G, B);
const FMin = new Chord(F, GSharpAFlat);
const GMin = new Chord(G, ASharpBFlat, D);
const AMin = new Chord(A, C, E);
const BMin = new Chord(B, D, FSharpGFlat);

let minChordArray = [CMin, DMin, EMin, FMin, GMin, AMin, BMin];