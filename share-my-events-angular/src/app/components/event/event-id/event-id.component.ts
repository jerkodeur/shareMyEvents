import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

import { ModalComponent } from 'src/app/components/modal/modal.component';

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
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));
  }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent, {
      backdropClass: 'primary-backdrop',
      size: 'sm',
      centered: true,
    });
    modalRef.componentInstance.title = "Suppression d'un event";
    modalRef.componentInstance.message = `Êtes-vous sur de vouloir supprimer l'event ?`;
    modalRef.componentInstance.btnName = 'Valider';
    modalRef.componentInstance.action = () => {
      this.cancelEvent();
      modalRef.dismiss('success');
    };
  }

  cancelEvent() {
    this.eventService
      .deleteEvent$(this.eventId)
      .subscribe(() => this.router.navigate(['/home']));
  }
}
