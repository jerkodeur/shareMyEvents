import { Component, OnInit, Input } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

import { LocalizationInterface } from 'src/app/core/interfaces/Localization.interface';

@Component({
  selector: 'app-event-localization',
  templateUrl: './event-localization.component.html',
  styleUrls: ['./event-localization.component.scss'],
})
export class EventLocalizationComponent implements OnInit {
  @Input() eventId!: number;
  @Input() address!: LocalizationInterface;

  isOrganizer!: boolean;
  edited = false;

  constructor(
    private authService: AuthenticationService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));
    this.eventService.address.subscribe((address: LocalizationInterface) => {
      this.address = address;
    });
  }

  toggleEdition() {
    this.edited = !this.edited;
  }
}
