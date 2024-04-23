export default class Key {
    constructor(notes, chords){
        this.notes = notes;
        this.chords = chords;
    }


    get notes(){
        return this.notes;
    }

    set notes(notes){
        this.notes = notes;
    }

    get chords(){
        return this.chords;
    }

    set chords(chords){
        this.chords = chords;
    }
}