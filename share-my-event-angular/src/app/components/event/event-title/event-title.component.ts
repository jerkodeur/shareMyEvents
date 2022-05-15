import { Component, Input, OnInit } from '@angular/core';

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

  constructor(
    private authService: AuthenticationService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));
    this.eventService.title.subscribe((title: string) => (this.title = title));
  }

  toggleEdition() {
    this.edited = !this.edited;
  }
}
