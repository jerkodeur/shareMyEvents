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
    const newParticipant = new Participant(form.value);
    this.participantService.add$(newParticipant, this.eventId).subscribe({
      next: () => form.resetForm(),
    });
  }
}
