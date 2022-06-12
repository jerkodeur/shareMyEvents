import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participation } from 'src/app/core/interfaces/Participation.interface';

import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-event-participant-list',
  templateUrl: './event-participant-list.component.html',
  styleUrls: ['./event-participant-list.component.scss'],
})
export class EventParticipantListComponent implements OnInit, OnDestroy {
  @Input() eventId!: number;
  @Input() title!: string;

  readonly destroy$: Subject<void> = new Subject<void>();

  participations!: Participation[];
  isDisplayForm = false;
  isOrganizer!: boolean;

  constructor(
    private authService: AuthenticationService,
    private modalService: NgbModal,
    private participantService: ParticipantService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));
    this.participantService.participations$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (participations: Participation[]) =>
          (this.participations = participations)
      );
    this.participantService.getParticipants$(this.eventId).subscribe();
  }

  openModal(participation: Participation) {
    const modalRef = this.modalService.open(ModalComponent, {
      backdropClass: 'primary-backdrop',
      size: 'sm',
      centered: true,
    });
    modalRef.componentInstance.title = "Suppression d'un participant";
    modalRef.componentInstance.message = `Êtes-vous sur de vouloir supprimer ${participation.name} de l'event?`;
    modalRef.componentInstance.btnName = 'Valider';
    modalRef.componentInstance.action = () => {
      this.removeParticipant(participation);
      modalRef.dismiss('success');
    };
  }

  toggleForm() {
    this.isDisplayForm = !this.isDisplayForm;
  }

  removeParticipant(participation: Participation) {
    this.participantService.delete$(participation).subscribe();
  }
}
