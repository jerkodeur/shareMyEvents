import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, pipe, Subject, take, tap } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { LocalizationInterface } from '../core/interfaces/Localization.interface';
import { NotificationService } from './notification.service';

import { Event } from '../core/models/Event.model';
import { ErrorHandlerService } from './error-handler.service';
import { EventInterface } from '../core/interfaces/Event.interface';

import '../data/db.json';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  title = new Subject<string>();
  description = new Subject<string>();
  eventDate = new Subject<Date>();
  address = new Subject<LocalizationInterface>();

  constructor(
    private errorHandler: ErrorHandlerService,
    private httpService: HttpClient,
    private notify: NotificationService,
    private router: Router
  ) {}

  getEvent$(eventId: number): Observable<EventInterface | any> {
    return this.httpService
      .get<EventInterface>(`${environment.apiUrl}/events/${eventId}`)
      .pipe(
        tap({
          next: (data: any) => {
            data.eventDate = new Date(data.eventDate);
            return data;
          },
          error: async (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }

  createEvent$(event: Event): Observable<any> {
    return this.httpService
      .post(`${environment.apiUrl}/events/new`, {
        ...event,
      })
      .pipe(
        tap({
          next: (res: any) => {
            this.notify.showSuccess(
              "L'event a été crée avec succès, n'oubliez pas d'y ajouter des invités !"
            );
            this.router.navigate([`/events/${res.id}`]);
          },
          error: async (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }

  updateTitle$(title: string, eventId: number): Observable<any> {
    return this.httpService
      .patch(`${environment.apiUrl}/events/update/${eventId}/title`, {
        title,
      })
      .pipe(
        tap({
          next: (res: any) => {
            this.title.next(res.title);
            this.notify.showSuccess('Le titre a été modifié avec succès');
          },
          error: async (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }

  updateDescription$(description: string, eventId: number): Observable<any> {
    return this.httpService
      .patch(`${environment.apiUrl}/events/update/${eventId}/description`, {
        description,
      })
      .pipe(
        tap({
          next: (res: any) => {
            this.description.next(res.description);
            this.notify.showSuccess('La description a été modifié avec succès');
          },
          error: async (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }

  updateDate$(eventDate: Date, eventId: number): Observable<any> {
    return this.httpService
      .patch(`${environment.apiUrl}/events/update/${eventId}/date`, {
        eventDate,
      })
      .pipe(
        tap({
          next: (res: any) => {
            this.eventDate.next(new Date(res.eventDate));
            this.notify.showSuccess('La date a été modifié avec succès');
          },
          error: (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }

  updateLocalization$(
    localization: LocalizationInterface,
    eventId: number
  ): Observable<any> {
    return this.httpService
      .patch(`${environment.apiUrl}/events/update/${eventId}/address`, {
        ...localization,
      })
      .pipe(
        tap({
          next: (address: any) => {
            this.address.next(address);
            this.notify.showSuccess("L'addresse a été modifiée avec succès");
          },
          error: async (err) => {
            this.errorHandler.notifyHttpError(err).subscribe();
          },
        })
      );
  }

  deleteEvent$(eventId: number): any {
    return this.httpService
      .delete(`${environment.apiUrl}/events/${eventId}`)
      .pipe(
        tap(() =>
          this.notify.showSuccess("L'event a été supprimé avec succès")
        ),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }
}
