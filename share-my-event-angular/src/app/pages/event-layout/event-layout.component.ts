import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { pipe, takeWhile } from 'rxjs';
import { EventInterface } from 'src/app/core/interfaces/Event.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-event-layout',
  templateUrl: './event-layout.component.html',
  styleUrls: ['./event-layout.component.scss'],
})
export class EventLayoutComponent implements OnInit {
  event!: EventInterface;
  role!: string;

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const eventId = +this.route.snapshot.params['id'];
    this.eventService.getEvent$(eventId).subscribe((data: EventInterface) => {
      pipe(takeWhile(() => !this.event));
      this.event = data;
      const isParticipant = this.route.snapshot.routeConfig?.path
        ?.split('/')
        .includes('participant');
      isParticipant && this.authService.isOrganizer.next(!isParticipant);
    });
  }
}
