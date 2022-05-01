import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../core/models/User.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user!: User;

  constructor(
    private httpService: HttpClient,
    private notify: NotificationService
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
          sessionStorage.setItem('token', res.accessToken);
          sessionStorage.setItem('firstname', res.user.firstname);
          sessionStorage.setItem('lastname', res.user.lastname);
          sessionStorage.setItem('email', res.user.email);
        }),
        catchError((err) => {
          return of(this.handleError(err));
        })
      );
  }

  private handleError(err: HttpErrorResponse) {
    this.notify.showError('Identifiants incorrects');
    return {
      error: err.statusText,
      status: err.status,
    };
  }
}
