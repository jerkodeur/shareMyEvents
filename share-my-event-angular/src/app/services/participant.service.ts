import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, catchError, Observable, pipe, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from './error-handler.service';
import { NotificationService } from './notification.service';

import { Participant } from '../core/models/Participant.model';
import { ParticipantGuard } from '../core/guards/participant.guard';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  participantList = new BehaviorSubject<Participant[]>([]);

  constructor(
    private httpService: HttpClient,
    private handleError: ErrorHandlerService,
    private notify: NotificationService
  ) {}

  getEventParticipants$(eventId: number): Observable<any> {
    return this.httpService
      .get<Participant[]>(
        `${environment.apiTestBaseUrl}/participants?eventId=${eventId}`
      )
      .pipe(
        catchError(async (err) =>
          this.handleError.notifyHttpError(err).subscribe()
        )
      );
  }

  addParticipantToEvent$(participant: Participant): Observable<any> {
    return this.httpService
      .post<Participant>(`${environment.apiTestBaseUrl}/participants`, {
        ...participant,
      })
      .pipe(
        catchError(async (err) =>
          this.handleError.notifyHttpError(err).subscribe()
        )
      );
  }

  deleteParticipantToEvent$(eventId: number, participantId: number): void {
    this.httpService
      .delete(`${environment.apiTestBaseUrl}/participants/${participantId}`)
      .subscribe(() => {
        pipe(
          tap(() =>
            this.notify.showSuccess('Le participant a été supprimé avec succès')
          ),
          tap(() => this.getEventParticipants$(eventId)),
          catchError(async (err) =>
            this.handleError.notifyHttpError(err).subscribe()
          )
        );
      });
  }
}
