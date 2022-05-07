import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventInterface } from 'src/app/core/interfaces/Event.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nextEvent!: Observable<EventInterface>;
  authenticated = false;

  constructor(
    private eventService: EventService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authService.authenticated.subscribe(
      (bool) => (this.authenticated = bool)
    );

    this.authService.setIfAuthenticated();

    if (this.authenticated)
      this.nextEvent = this.eventService.getNextOrganizerEvent();
  }
}
