import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { NextEvent } from '../core/interfaces/NextEvent.interface';

import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class OrganizerService {
  constructor(
    private errorHandler: ErrorHandlerService,
    private httpService: HttpClient
  ) {}

  getNextOrganizerEvent(): Observable<any> {
    return this.httpService
      .get<NextEvent>(`${environment.apiUrl}/organizer/next-event`)
      .pipe(
        map((data: NextEvent) => {
          if (data) {
            data.eventDate = new Date(data.eventDate);
          }
          return data;
        }),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }
}
