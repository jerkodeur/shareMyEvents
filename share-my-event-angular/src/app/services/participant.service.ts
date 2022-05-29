import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from './error-handler.service';
import { NotificationService } from './notification.service';

import { Participant } from '../core/models/Participant.model';
import { Participation } from '../core/interfaces/Participation.interface';
import { Participations } from '../core/models/Participations.model';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  participations$ = new BehaviorSubject<Participation[]>([]);
  participations!: Participations;

  constructor(
    private httpService: HttpClient,
    private errorHandler: ErrorHandlerService,
    private notify: NotificationService
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
}
