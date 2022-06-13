import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from './error-handler.service';
import { NotificationService } from './notification.service';

import { Participant } from '../core/models/Participant.model';
import { Participation } from '../core/interfaces/Participation.interface';
import { Participations } from '../core/models/Participations.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  participations$ = new BehaviorSubject<Participation[]>([]);
  participations!: Participations;

  constructor(
    private errorHandler: ErrorHandlerService,
    private httpService: HttpClient,
    private notify: NotificationService,
    private router: Router
  ) {}

  getParticipants$(eventId: number): Observable<any> {
    return this.httpService
      .get<Participation[]>(`${environment.apiUrl}/participations/${eventId}`)
      .pipe(
        tap({
          next: (res: Participation[]) => {
            this.participations = new Participations(res);
            this.participations$.next(this.participations.getAll());
          },
          error: (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }

  add$(participant: Participant, eventId: number): any {
    return this.httpService
      .post<any>(`${environment.apiUrl}/participations/new`, {
        ...participant,
        eventId,
      })
      .pipe(
        tap({
          next: (participation: Participation) => {
            this.participations.addParticipation(participation);
            this.participations$.next(this.participations.getAll());
            this.notify.showSuccess(
              `${participant.name} a bien été ajouté à la liste`
            );
          },
          error: (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }

  updateAvailability$(
    availability: string,
    eventId: number,
    participatantId: number
  ) {
    return this.httpService
      .patch<any>(
        `${environment.apiUrl}/participations/availability/${participatantId}`,
        {
          eventId,
          availability,
        }
      )
      .pipe(
        tap({
          next: () => {
            this.notify.showSuccess(
              'Votre disponibilité a bien été bien prise en compte'
            );
          },
          error: (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }

  delete$(participation: Participation): Observable<any> {
    return this.httpService
      .delete(`${environment.apiUrl}/participations/delete/${participation.id}`)
      .pipe(
        tap({
          next: () => {
            this.participations.removeParticipation(participation);
            this.participations$.next(this.participations.getAll());
            this.notify.showSuccess(
              `Vous avez bien retiré ${participation.name} de l'event`
            );
          },
          error: (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }

  access$(accessForm: {
    eventCode: string;
    email: string | null;
  }): Observable<any> {
    return this.httpService
      .post(`${environment.apiUrl}/events/participant-access`, accessForm)
      .pipe(
        tap({
          next: (res: any) => {
            sessionStorage.setItem('participantId', res.participantId);
            this.router.navigateByUrl(`/events/${res.eventId}`);
          },
          error: (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }
}
