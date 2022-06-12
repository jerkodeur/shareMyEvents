import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-title',
  templateUrl: './event-title.component.html',
  styleUrls: ['./event-title.component.scss'],
})
export class EventTitleComponent implements OnInit {
  @Input() title!: string;
  @Input() eventId!: number;

  isOrganizer!: boolean;
  edited = false;

  readonly destroy$: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthenticationService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.authService.isOrganizer
      .pipe(takeUntil(this.destroy$))
      .subscribe((bool) => (this.isOrganizer = bool));
    this.eventService.title
      .pipe(takeUntil(this.destroy$))
      .subscribe((title: string) => (this.title = title));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleEdition() {
    this.edited = !this.edited;
  }
}
