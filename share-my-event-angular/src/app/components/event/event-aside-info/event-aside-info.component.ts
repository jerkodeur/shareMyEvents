import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { DateHandler } from 'src/app/handlers/date-handler';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-aside-info',
  templateUrl: './event-aside-info.component.html',
  styleUrls: ['./event-aside-info.component.scss'],
})
export class EventAsideInfoComponent implements OnInit {
  @Input() eventId!: number;
  @Input() organizerMail!: string;
  @Input() organizerFirstname!: string;
  @Input() organizerLastname!: string;
  @Input() title!: string;
  @Input() eventDate!: Date;

  date!: string;
  time!: string;
  edited = false;

  isOrganizer!: boolean;

  constructor(
    private authService: AuthenticationService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.splitDate(this.eventDate);

    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));
    this.eventService.eventDate.subscribe((eventDate: Date) => {
      this.splitDate(eventDate);
      this.eventDate = eventDate;
    });
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
