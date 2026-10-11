import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Template-driven ngModel connects a local input to its signal-backed value.
@Component({ selector: 'app-practice-note', standalone: true, imports: [FormsModule], template: `
  <form class="note-form" (ngSubmit)="save()">
    <label for="practice-note">Practice note</label>
    <input id="practice-note" name="note" [ngModel]="note()" (ngModelChange)="note.set($event)"
      placeholder="Try Gift wrap please" />
    <button type="submit" [disabled]="note().trim().length === 0">Save note</button>
    @if (savedNote()) { <p role="status">Saved note: {{ savedNote() }}</p> }
    <p class="stock-note">This local note resets on reload.</p>
  </form>` })
export class PracticeNoteComponent {
  readonly note = signal(''); readonly savedNote = signal('');
  save() { this.savedNote.set(this.note().trim()); }
}
