import { Component, OnInit } from '@angular/core';

import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list-organizer',
  templateUrl: './event-list-organizer.component.html',
  styleUrls: ['./event-list-organizer.component.scss'],
})
export class EventListOrganizerComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getNextEvents$().subscribe((events: any) => {
      this.events = events;
    });
  }
}
