import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-cancel',
  templateUrl: './event-cancel.component.html',
  styleUrls: ['./event-cancel.component.scss'],
})
export class EventCancelComponent implements OnInit {
  @Input() eventId!: number;
  constructor() {}

  ngOnInit(): void {}
}
