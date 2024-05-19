import { Chord, Interval, Note, Scale } from "tonal";

export default function TonalKeyBuilder(key, scale){
    keyScale = key + " " + scale;

    return(
        Scale.get(keyScale)
    )

}