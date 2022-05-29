import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrganizerService } from 'src/app/services/organizer.service';

import { EventInterface } from 'src/app/core/interfaces/Event.interface';
import { NextEvent } from 'src/app/core/interfaces/NextEvent.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nextEvent!: Observable<NextEvent>;
  authenticated = false;

  constructor(
    private authService: AuthenticationService,
    private organizerService: OrganizerService
  ) {}

  ngOnInit(): void {
    this.authService.authenticated.subscribe(
      (bool) => (this.authenticated = bool)
    );

    this.authService.setIfAuthenticated();

    if (this.authenticated)
      this.nextEvent = this.organizerService.getNextOrganizerEvent();
  }
}
