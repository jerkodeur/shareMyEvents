import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss'],
})
export class EventDescriptionComponent implements OnInit, OnDestroy {
  @Input() eventId!: number;
  @Input() description!: string;

  isOrganizer!: boolean;
  safeDescription!: SafeHtml;
  edited = false;

  readonly destroy$: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthenticationService,
    private domSanitizer: DomSanitizer,
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
    this.eventService.description
      .pipe(takeUntil(this.destroy$))
      .subscribe((description: string) => {
        this.description = description;
        this.safeDescription =
          this.domSanitizer.bypassSecurityTrustHtml(description);
      });

    this.safeDescription = this.domSanitizer.bypassSecurityTrustHtml(
      this.description
    );
  }

  toggleEdition() {
    this.edited = !this.edited;
  }
}
