import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/core/models/Event.model';
import { EventService } from 'src/app/services/event.service';
import { pipe, takeWhile } from 'rxjs';
import { EventInterface } from 'src/app/core/interfaces/Event.interface';

@Component({
  selector: 'app-event-layout',
  templateUrl: './event-layout.component.html',
  styleUrls: ['./event-layout.component.scss'],
})
export class EventLayoutComponent implements OnInit {
  event!: EventInterface;

  constructor(
    private activeRoute: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const eventId = +this.activeRoute.snapshot.params['id'];
    this.eventService.getEvent$(eventId).subscribe();
    this.eventService._event.subscribe((data: EventInterface) => {
      pipe(takeWhile(() => !this.event));
      this.event = data;
    });
  }
}
