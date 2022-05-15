import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss'],
})
export class EventDescriptionComponent implements OnInit {
  @Input() eventId!: number;
  @Input() description!: string;

  isOrganizer!: boolean;
  safeDescription!: SafeHtml;
  edited = false;

  constructor(
    private authService: AuthenticationService,
    private domSanitizer: DomSanitizer,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));
    this.eventService.description.subscribe((description: string) => {
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
