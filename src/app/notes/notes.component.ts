import { Component, OnInit } from '@angular/core';
import { Note } from './models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];
  note: string;

  constructor() { }

  ngOnInit(): void { }

  saveNote() {
    this.notes.push(new Note(this.note));
    this.note = "";
  }
}
