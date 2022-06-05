import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrganizerService } from 'src/app/services/organizer.service';

import { DateHandler } from 'src/app/handlers/date-handler';
import { EventInterface } from 'src/app/core/interfaces/Event.interface';
import { NextEvent } from 'src/app/core/interfaces/NextEvent.interface';

@Component({
  selector: 'app-organizer-next-events',
  templateUrl: './organizer-next-events.component.html',
  styleUrls: ['./organizer-next-events.component.scss'],
})
export class OrganizerNextEventsComponent implements OnInit {
  @Input() nextEvent$!: Observable<NextEvent>;
  event!: any;
  participants!: number;
  formattedDate!: string;

  constructor(
    private authService: AuthenticationService,
    private organizerService: OrganizerService
  ) {}

  ngOnInit(): void {
    if (this.authService.authenticated) {
      this.organizerService
        .getNextOrganizerEvent()
        .subscribe((event: NextEvent) => {
          if (event) {
            const { eventDate, ...nextEvent } = event;
            this.event = nextEvent;
            const { date, time } = DateHandler.splitDateObject(eventDate);
            this.formattedDate = `${date} ${time}`;
          } else {
            this.event = null;
          }
        });
    }
  }
}
