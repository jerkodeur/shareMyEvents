import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/core/models/Event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-layout',
  templateUrl: './event-layout.component.html',
  styleUrls: ['./event-layout.component.scss'],
})
export class EventLayoutComponent implements OnInit {
  event!: Event;

  constructor(
    private activeRoute: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const eventId = this.activeRoute.snapshot.params['id'];

    this.eventService.getEvent$(eventId).subscribe((data) => {
      this.event = data;
    });
  }
}
