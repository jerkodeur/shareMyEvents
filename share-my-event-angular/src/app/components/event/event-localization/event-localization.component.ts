import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-localization',
  templateUrl: './event-localization.component.html',
  styleUrls: ['./event-localization.component.scss'],
})
export class EventLocalizationComponent {
  @Input() eventId!: number;
  @Input() address!: string;
  @Input() zipCode!: number;
  @Input() locality!: string;
  @Input() additional!: string;

  edited = false;

  constructor() {}

  toggleEdition() {
    this.edited = !this.edited;
  }
}
