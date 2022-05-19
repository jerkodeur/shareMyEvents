import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

import { DateHandler } from 'src/app/handlers/date-handler';

@Component({
  selector: 'app-event-aside-info',
  templateUrl: './event-aside-info.component.html',
  styleUrls: ['./event-aside-info.component.scss'],
})
export class EventAsideInfoComponent implements OnInit, OnDestroy {
  @Input() eventId!: number;
  @Input() organizerMail!: string;
  @Input() organizerFirstname!: string;
  @Input() organizerLastname!: string;
  @Input() title!: string;
  @Input() eventDate!: Date;

  date!: string;
  time!: string;
  edited = false;

  readonly destroy$: Subject<void> = new Subject<void>();

  isOrganizer!: boolean;

  constructor(
    private authService: AuthenticationService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.splitDate(this.eventDate);

    this.authService.isOrganizer
      .pipe(takeUntil(this.destroy$))
      .subscribe((bool) => (this.isOrganizer = bool));
    this.eventService.eventDate
      .pipe(takeUntil(this.destroy$))
      .subscribe((eventDate: Date) => {
        this.splitDate(eventDate);
        this.eventDate = eventDate;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  splitDate(date: Date) {
    const splitDate = DateHandler.splitDateObject(date);
    this.date = splitDate[0];
    this.time = splitDate[1];
  }

  toggleEdition() {
    this.edited = !this.edited;
  }
}
