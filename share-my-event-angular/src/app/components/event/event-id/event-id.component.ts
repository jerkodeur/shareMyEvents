import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-id',
  templateUrl: './event-id.component.html',
  styleUrls: ['./event-id.component.scss'],
})
export class EventIdComponent implements OnInit {
  @Input() eventCode!: string;
  @Input() eventId!: number;
  isOrganizer!: boolean;

  constructor(
    private authService: AuthenticationService,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));
  }

  cancelEvent() {
    if (window.confirm('Êtes-vous sur de vouloir supprimer cet event ?')) {
      this.eventService
        .deleteEvent$(this.eventId)
        .subscribe(() => this.router.navigate(['/home']));
    }
  }
}
