import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { NotificationService } from './notification.service';
import { environment } from 'src/environments/environment';
import { User } from '../core/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private authentication: AuthenticationService,
    private httpService: HttpClient,
    private notify: NotificationService,
    private router: Router
  ) {}

  signup$(user: User): Observable<any> {
    return this.httpService
      .post(`${environment.apiTestBaseUrl}/register`, { ...user })
      .pipe(
        catchError((err) => {
          return of(this.handleError(err));
        }),
        tap(() =>
          this.notify.showSuccess(
            `Bienvenue ${user.firstname}, ton compte a été crée avec succès`
          )
        )
      );
  }

  login$(email: string, password: string) {
    return this.httpService
      .post(`${environment.apiTestBaseUrl}/login`, { email, password })
      .pipe(
        tap((res: any) => {
          sessionStorage.setItem('access_token', res.accessToken);
          sessionStorage.setItem('firstname', res.user.firstname);
          sessionStorage.setItem('lastname', res.user.lastname);
          sessionStorage.setItem('email', res.user.email);
        }),
        tap(() => this.authentication.authenticated.next(true)),
        catchError((err) => {
          return of(this.handleError(err));
        })
      );
  }

  logout() {
    sessionStorage.clear();
    this.authentication.authenticated.next(false);
    this.notify.showSuccess('Déconnexion effectuée avec succès');

    this.router.navigate(['/home']);
  }

  private handleError(err: HttpErrorResponse) {
    this.notify.showError('Identifiants incorrects');
    return {
      error: err.statusText,
      status: err.status,
    };
  }
}
