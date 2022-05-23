import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrganizerService } from 'src/app/services/organizer.service';

import { DateHandler } from 'src/app/handlers/date-handler';
import { EventInterface } from 'src/app/core/interfaces/Event.interface';

@Component({
  selector: 'app-organizer-next-events',
  templateUrl: './organizer-next-events.component.html',
  styleUrls: ['./organizer-next-events.component.scss'],
})
export class OrganizerNextEventsComponent implements OnInit {
  @Input() nextEvent$!: Observable<EventInterface>;
  event!: EventInterface;
  formattedDate!: string;

  constructor(
    private authService: AuthenticationService,
    private organizerService: OrganizerService
  ) {}

  ngOnInit(): void {
    if (this.authService.authenticated) {
      this.organizerService
        .getNextOrganizerEvent()
        .subscribe((event: EventInterface) => {
          this.event = event;
          if (event) {
            const { date, time } = DateHandler.splitDateObject(event.eventDate);
            this.formattedDate = `${date} ${time}`;
          }
        });
    }
  }
}
