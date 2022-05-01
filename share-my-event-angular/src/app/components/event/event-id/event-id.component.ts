import { Component, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-id',
  templateUrl: './event-id.component.html',
  styleUrls: ['./event-id.component.scss'],
})
export class EventIdComponent {
  @Input() eventId!: string;
  @Input() id!: number;

  constructor(private eventService: EventService) {}

  cancelEvent() {
    if (window.confirm('Êtes-vous sur de vouloir supprimer cet event ?')) {
      this.eventService.deleteEvent$(this.id);
    }
  }
}
