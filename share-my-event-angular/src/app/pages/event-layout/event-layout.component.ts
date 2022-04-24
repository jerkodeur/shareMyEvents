import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/core/models/Event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-layout',
  templateUrl: './event-layout.component.html',
  styleUrls: ['./event-layout.component.scss'],
})
export class EventLayoutComponent implements OnInit {
  event!: Event;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent();
    console.log(this.eventService.getEvent());
  }
}
