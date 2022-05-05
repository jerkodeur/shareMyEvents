import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from './error-handler.service';
import { LocalizationInterface } from '../core/interfaces/Localization.interface';
import { NotificationService } from './notification.service';

import { Event } from '../core/models/Event.model';
import { EventInterface } from '../core/interfaces/Event.interface';

import '../data/db.json';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  _event = new BehaviorSubject<any>(null);

  @Input()
  public set event(value: EventInterface) {
    this._event.next(value);
  }

  public get event(): EventInterface {
    return this._event.getValue();
  }

  constructor(
    private errorHandler: ErrorHandlerService,
    private httpService: HttpClient,
    private notify: NotificationService
  ) {}

  getEvent$(eventId: number): Observable<EventInterface | any> {
    return this.httpService
      .get<EventInterface>(`${environment.apiTestBaseUrl}/events/${eventId}`)
      .pipe(
        tap((data: any) => (data.date = new Date(data.date))),
        tap((data: EventInterface) => this._event.next(data)),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }

  createEvent$(event: Event): Observable<any> {
    return this.httpService
      .post(`${environment.apiTestBaseUrl}/events`, { ...event })
      .pipe(
        tap(() =>
          this.notify.showSuccess(
            "L'event a été crée avec succès, n'oubliez pas d'y ajouter des invités !"
          )
        ),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }

  updateTitle$(title: string, eventId: number): Observable<any> {
    return this.httpService
      .patch(`${environment.apiTestBaseUrl}/events/${eventId}`, {
        title,
      })
      .pipe(
        tap(() =>
          this.notify.showSuccess('Le titre a été modifié avec succès')
        ),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }

  updateDescription$(description: string, eventId: number): Observable<any> {
    return this.httpService
      .patch(`${environment.apiTestBaseUrl}/events/${eventId}`, {
        description,
      })
      .pipe(
        tap(() =>
          this.notify.showSuccess('La description a été modifié avec succès')
        ),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }

  updateDate$(date: Date, eventId: number): Observable<any> {
    return this.httpService
      .patch(`${environment.apiTestBaseUrl}/events/${eventId}`, {
        date,
      })
      .pipe(
        tap(() => this.notify.showSuccess('La date a été modifié avec succès')),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }

  updateLocalization$(
    localization: LocalizationInterface,
    eventId: number
  ): Observable<any> {
    return this.httpService
      .patch(`${environment.apiTestBaseUrl}/event/${eventId}`, {
        ...localization,
      })
      .pipe(
        tap(() =>
          this.notify.showSuccess("L'addresse a été modifiée avec succès")
        ),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }

  deleteEvent$(eventId: number): any {
    return this.httpService
      .delete(`${environment.apiTestBaseUrl}/events/${eventId}`)
      .pipe(
        tap(() =>
          this.notify.showSuccess("L'event a été supprimé avec succès")
        ),
        tap(() => this._event.next(null)),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }
}
