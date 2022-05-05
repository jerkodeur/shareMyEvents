import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-participant-status',
  templateUrl: './participant-status.component.html',
  styleUrls: ['./participant-status.component.scss'],
})
export class ParticipantStatusComponent {
  @Input() status!: string;

  constructor() {}
}
