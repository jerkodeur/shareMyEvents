import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { AuthenticationService } from './authentication.service';
import { ErrorHandlerService } from './error-handler.service';
import { NotificationService } from './notification.service';

import { User } from '../core/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private authentication: AuthenticationService,
    private errorHandler: ErrorHandlerService,
    private httpService: HttpClient,
    private notify: NotificationService,
    private router: Router
  ) {}

  signup$(user: User): Observable<any> {
    return this.httpService
      .post(`${environment.apiBaseUrl}/users/sign-up`, { ...user })
      .pipe(
        tap(() =>
          this.notify.showSuccess(
            `Bienvenue ${user.firstname}, ton compte a été crée avec succès`
          )
        ),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }

  login$(email: string, password: string) {
    return this.httpService
      .post(`${environment.apiBaseUrl}/users/login`, { email, password })
      .pipe(
        tap((res: any) => {
          if (res.token) {
            sessionStorage.setItem('access_token', res.token.token);
            this.authentication.authenticated.next(true);
          } else {
            throw new Error('Erreur lors de la récupération du token');
          }
        }),
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }

  logout() {
    sessionStorage.clear();
    this.authentication.authenticated.next(false);
    this.notify.showSuccess('Déconnexion effectuée avec succès');
    this.router.navigate(['/home']);
  }
}
