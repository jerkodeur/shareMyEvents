import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-guest-list',
  templateUrl: './event-guest-list.component.html',
  styleUrls: ['./event-guest-list.component.scss'],
})
export class EventGuestListComponent implements OnInit {
  @Input() eventId!: number;

  constructor() {}

  ngOnInit(): void {}
}
