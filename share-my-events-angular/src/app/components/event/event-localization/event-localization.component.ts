import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

import { LocalizationInterface } from 'src/app/core/interfaces/Localization.interface';

@Component({
  selector: 'app-event-localization',
  templateUrl: './event-localization.component.html',
  styleUrls: ['./event-localization.component.scss'],
})
export class EventLocalizationComponent implements OnInit, OnDestroy {
  @Input() eventId!: number;
  @Input() address!: LocalizationInterface;

  isOrganizer!: boolean;
  edited = false;

  readonly destroy$: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthenticationService,
    private eventService: EventService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.authService.isOrganizer
      .pipe(takeUntil(this.destroy$))
      .subscribe((bool) => (this.isOrganizer = bool));
    this.eventService.address
      .pipe(takeUntil(this.destroy$))
      .subscribe((address: LocalizationInterface) => {
        this.address = address && address;
      });
  }

  toggleEdition() {
    this.edited = !this.edited;
  }
}
