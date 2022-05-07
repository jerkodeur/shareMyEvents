import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventInterface } from 'src/app/core/interfaces/Event.interface';
import { DateHandler } from 'src/app/handlers/date-handler';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-organizer-next-events',
  templateUrl: './organizer-next-events.component.html',
  styleUrls: ['./organizer-next-events.component.scss'],
})
export class OrganizerNextEventsComponent implements OnInit {
  @Input() nextEvent$!: Observable<EventInterface>;
  event!: EventInterface;
  formattedDate!: string;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService
      .getNextOrganizerEvent()
      .subscribe((event: EventInterface) => {
        this.event = event;
        const splitDate = DateHandler.splitDateObject(event.date);
        this.formattedDate = `${splitDate[0]} ${splitDate[1]}`;
      });
  }
}
