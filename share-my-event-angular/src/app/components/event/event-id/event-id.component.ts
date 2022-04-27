import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-id',
  templateUrl: './event-id.component.html',
  styleUrls: ['./event-id.component.scss'],
})
export class EventIdComponent implements OnInit {
  @Input() eventId!: string;
  @Input() id!: number;
  constructor() {}

  ngOnInit(): void {}
}
