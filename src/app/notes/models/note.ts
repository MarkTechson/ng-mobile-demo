export class Note {
    text: string;
    date: Date;

    constructor(noteText: string) {
        this.text = noteText;
        this.date = new Date();
    }
}
