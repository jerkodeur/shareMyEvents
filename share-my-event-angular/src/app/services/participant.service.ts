import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, catchError, Observable, pipe, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from './error-handler.service';
import { NotificationService } from './notification.service';

import { Participant } from '../core/models/Participant.model';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  _participantList = new BehaviorSubject<Participant[]>([]);

  @Input()
  public get participantList() {
    return this._participantList;
  }
  public set participantList(value) {
    this._participantList = value;
  }

  constructor(
    private httpService: HttpClient,
    private handleError: ErrorHandlerService,
    private notify: NotificationService
  ) {}

  getEventParticipants$(eventId: number): void {
    this.httpService
      .get<any>(`${environment.apiTestBaseUrl}/participants?eventId=${eventId}`)
      .pipe(
        catchError(async (err) =>
          this.handleError.notifyHttpError(err).subscribe()
        )
      )
      .subscribe((participants) => {
        this._participantList.next(participants);
      });
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
