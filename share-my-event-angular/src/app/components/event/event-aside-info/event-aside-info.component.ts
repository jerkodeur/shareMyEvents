import { Component, Input, OnInit } from '@angular/core';
import { DateHandler } from 'src/app/handlers/date-handler';

@Component({
  selector: 'app-event-aside-info',
  templateUrl: './event-aside-info.component.html',
  styleUrls: ['./event-aside-info.component.scss'],
})
export class EventAsideInfoComponent implements OnInit {
  @Input() organizer!: string;
  @Input() organizerMail!: string;
  @Input() title!: string;
  @Input() eventDate!: Date;
  date!: string;
  time!: string;

  constructor() {}

  ngOnInit(): void {
    const splitDate = DateHandler.splitDateObject(this.eventDate);
    this.date = splitDate[0];
    this.time = splitDate[1];
  }
}
