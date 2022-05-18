import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { pipe, takeWhile } from 'rxjs';

import { EventInterface } from 'src/app/core/interfaces/Event.interface';
import { LocalizationInterface } from 'src/app/core/interfaces/Localization.interface';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-event-layout',
  templateUrl: './event-layout.component.html',
  styleUrls: ['./event-layout.component.scss'],
})
export class EventLayoutComponent implements OnInit {
  event!: EventInterface;
  role!: string;

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const eventId = +this.route.snapshot.params['id'];
    this.eventService.getEvent$(eventId).subscribe((event: EventInterface) => {
      const { title, description, eventDate, address } = event;
      this.subscribeTitle(title);
      this.subscribeDescription(description);
      this.subscribeDate(eventDate);
      this.subscribeAddress(address);

      pipe(takeWhile(() => !this.event));
      this.authService.checkIfOrganizer(event.organizerAuthId);
      this.event = event;
    });
  }

  subscribeTitle(title: string) {
    this.eventService.title.next(title);
  }
  subscribeDescription(description: string) {
    this.eventService.description.next(description);
  }
  subscribeDate(eventDate: Date) {
    this.eventService.eventDate.next(eventDate);
  }
  subscribeAddress(address: LocalizationInterface) {
    this.eventService.address.next(address);
  }
}
