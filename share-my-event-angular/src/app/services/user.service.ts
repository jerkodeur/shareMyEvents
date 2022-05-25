import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of, take } from 'rxjs';
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
      .post(`${environment.apiUrl}/users/sign-up`, {
        ...user,
      })
      .pipe(
        tap({
          next: () => {
            this.notify.showSuccess(
              `Bienvenue ${user.nickname}, ton compte a été crée avec succès`
            );
            this.router.navigate(['/login']);
          },
          error: async (err) => {
            this.errorHandler.notifyHttpError(err).pipe(take(1)).subscribe();
          },
        })
      );
  }

  login$(credentials: { email: string; password: string }) {
    return this.httpService
      .post(`${environment.apiUrl}/users/login`, credentials)
      .pipe(
        tap({
          next: (res: any) => {
            if (res.token) {
              localStorage.setItem('access_token', res.token.token);
              this.authentication.authenticated.next(true);
              this.notify.showSuccess(
                `Bon retour parmi nous ${res.actor.nickname}`
              );
              this.router.navigateByUrl('/home');
            } else {
              throw new Error('Erreur lors de la récupération du token');
            }
          },
          error: async (err) => {
            this.errorHandler.notifyHttpError(err).pipe(take(1)).subscribe();
          },
        })
      );
  }

  logout() {
    localStorage.clear();
    this.authentication.authenticated.next(false);
    this.notify.showSuccess('Déconnexion effectuée avec succès');
    this.router.navigate(['/home']);
  }
}
