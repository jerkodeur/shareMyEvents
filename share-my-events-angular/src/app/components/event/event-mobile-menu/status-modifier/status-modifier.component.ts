import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participation } from 'src/app/core/interfaces/Participation.interface';
import { Participations } from 'src/app/core/models/Participations.model';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-status-modifier',
  templateUrl: './status-modifier.component.html',
  styleUrls: ['./status-modifier.component.scss'],
})
export class StatusModifierComponent implements OnInit {
  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();
  participantId!: number;
  status = 'Unknown';

  constructor(
    private participationService: ParticipantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('participantId')) {
      this.participantId = Number(sessionStorage.getItem('participantId'));
      this.participationService.participations$.subscribe(
        (participations: Participation[]) => {
          participations.map((participation) => {
            if (participation.participantId == this.participantId) {
              this.status =
                participation.availability && participation.availability.trim();
            }
          });
        }
      );
    }
  }

  updateStatus(status: string) {
    this.route.params.subscribe((params) => {
      this.participationService
        .updateAvailability$(status, params['id'], this.participantId)
        .subscribe();
      this.status = status;
      this.itemSelected.emit(status);
      const newParticipations = this.participationService.participations
        .getAll()
        .map((participation: Participation) => {
          if (participation.participantId == this.participantId) {
            participation.availability = status;
          }
          return participation;
        });
      this.participationService.participations$.next(newParticipations);
    });
  }
}
