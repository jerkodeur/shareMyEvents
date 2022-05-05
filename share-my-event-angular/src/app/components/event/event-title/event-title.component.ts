import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-title',
  templateUrl: './event-title.component.html',
  styleUrls: ['./event-title.component.scss'],
})
export class EventTitleComponent {
  @Input() title!: string;
  @Input() eventId!: number;

  edited = false;

  constructor() {}

  toggleEdition() {
    this.edited = !this.edited;
  }
}
