import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-id',
  templateUrl: './event-id.component.html',
  styleUrls: ['./event-id.component.scss'],
})
export class EventIdComponent implements OnInit {
  @Input() eventId!: string;
  @Input() event_id!: number;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.event_id);
  }

  cancelEvent() {
    if (window.confirm('Êtes-vous sur de vouloir supprimer cet event ?')) {
      this.eventService
        .deleteEvent$(this.event_id)
        .subscribe(() => this.router.navigate(['/home']));
    }
  }
}
