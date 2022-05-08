import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/core/models/Participant.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-event-participant-list',
  templateUrl: './event-participant-list.component.html',
  styleUrls: ['./event-participant-list.component.scss'],
})
export class EventParticipantListComponent implements OnInit {
  @Input() eventId!: number;
  @Input() title!: string;

  participantList!: Participant[];
  isDisplayForm = false;
  isOrganizer!: boolean;

  constructor(
    private authService: AuthenticationService,
    private participantService: ParticipantService
  ) {}

  ngOnInit(): void {
    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));

    this.participantService
      .getEventParticipants$(this.eventId)
      .subscribe((participants) => (this.participantList = participants));
  }

  toggleForm() {
    this.isDisplayForm = !this.isDisplayForm;
  }

  removeParticipant(participant: Participant) {
    const accept = window.confirm(
      `Etes vous sur de vouloir supprimer ${participant.name} ?`
    );
    accept &&
      this.participantService.deleteParticipantToEvent$(
        this.eventId,
        participant.id
      );
    if (accept) this.participantService.getEventParticipants$(this.eventId);
  }
}
