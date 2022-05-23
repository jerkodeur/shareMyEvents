import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Participant } from 'src/app/core/models/Participant.model';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-add-participant-form',
  templateUrl: './add-participant-form.component.html',
  styleUrls: ['./add-participant-form.component.scss'],
})
export class AddParticipantFormComponent {
  @Output() newParticipant: EventEmitter<Participant> =
    new EventEmitter<Participant>();
  @Input() eventId!: number;
  participant = { name: '', email: '' };
  submitted = false;

  constructor(private participantService: ParticipantService) {}

  onSubmit(form: NgForm) {
    this.submitted = true;
    const { name, email } = form.value;
    const newParticipant = new Participant(name, email, this.eventId);
    // this.participantService
    //   .addParticipantToEvent$(newParticipant)
    //   .subscribe(() =>
    //     this.participantService.getEventParticipants$(this.eventId)
    //   );
    form.resetForm();
  }
}
