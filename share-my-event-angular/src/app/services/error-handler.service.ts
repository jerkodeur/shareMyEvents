import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private notify: NotificationService) {}

  notifyHttpError(
    err: HttpErrorResponse,
    message: string = 'Erreur lors de la requête HTTP'
  ) {
    console.error(err);
    this.notify.showError(message);
    return throwError(() => new Error(message));
  }
}
