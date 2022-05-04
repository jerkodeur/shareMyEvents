import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Event } from '../core/models/Event.model';
import { LocalizationInterface } from '../core/interfaces/Localization.interface';
import { NotificationService } from './notification.service';

import '../data/db.json';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private event!: Event;

  constructor(
    private httpService: HttpClient,
    private notify: NotificationService
  ) {}

  getEvent$(eventId: number): Observable<Event> {
    return this.httpService
      .get<Event>(`${environment.apiTestBaseUrl}/events/${eventId}`)
      .pipe(
        map((data: any) => {
          const formattedDate: Date = new Date(data.date);
          return (data = new Event(
            data.title,
            data.description,
            formattedDate,
            data.organizer,
            data.organizerMail,
            data.organizerId,
            data.address,
            data.zipCode,
            data.locality,
            data.additional
          ));
        }),
        tap((data: Event) => (this.event = data))
      );
  }

  createEvent$(event: Event): Observable<any> {
    return this.httpService
      .post(`${environment.apiTestBaseUrl}/events`, { ...event })
      .pipe(
        catchError((err) => {
          return of(this.handleError(err));
        }),
        tap(() =>
          this.notify.showSuccess(
            "L'event a été crée avec succès, n'oubliez pas d'y ajouter des invités !"
          )
        )
      );
  }

  updateTitle$(title: string, eventId: number): Observable<any> {
    return this.httpService
      .patch(`${environment.apiTestBaseUrl}/events/${eventId}`, {
        title,
      })
      .pipe(
        catchError((err) => {
          return of(this.handleError(err));
        }),
        tap(() => (this.event.title = title)),
        tap(() => this.notify.showSuccess('Le titre a été modifié avec succès'))
      );
  }

  updateDescription$(description: string, eventId: number): Observable<any> {
    return this.httpService
      .patch(`${environment.apiTestBaseUrl}/events/${eventId}`, {
        description,
      })
      .pipe(
        catchError((err) => {
          return of(this.handleError(err));
        }),
        tap(() => (this.event.description = description)),
        tap(() =>
          this.notify.showSuccess('La description a été modifié avec succès')
        )
      );
  }

  updateDate$(date: Date, eventId: number): Observable<any> {
    return this.httpService
      .patch(`${environment.apiTestBaseUrl}/events/${eventId}`, {
        date,
      })
      .pipe(
        catchError((err) => {
          return of(this.handleError(err));
        }),
        tap(() => (this.event.date = date)),
        tap(() => this.notify.showSuccess('La date a été modifié avec succès'))
      );
  }

  updateLocalization$(
    localization: LocalizationInterface,
    eventId: number
  ): Observable<any> {
    console.log(this.event);
    return this.httpService
      .patch(`${environment.apiTestBaseUrl}/events/${eventId}`, {
        ...localization,
      })
      .pipe(
        catchError((err) => {
          return of(this.handleError(err));
        }),
        tap(() =>
          this.notify.showSuccess("L'addresse a été modifiée avec succès")
        )
      );
  }

  deleteEvent$(eventId: number): any {
    return this.httpService
      .delete(`${environment.apiTestBaseUrl}/events/${eventId}`)
      .pipe(
        catchError((err) => {
          return of(this.handleError(err));
        }),
        tap(() => this.notify.showSuccess("L'event a été supprimé avec succès"))
      );
  }

  private handleError(err: HttpErrorResponse) {
    this.notify.showError('Erreur serveur', "La requête n'a pas pu aboutir");
    console.error('Erreur requête http', err.status, err);
  }
}
