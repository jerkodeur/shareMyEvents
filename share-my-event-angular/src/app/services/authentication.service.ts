import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { NotificationService } from './notification.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private token!: any;
  authenticated = new Subject<boolean>();

  constructor(
    private jwtService: JwtHelperService,
    private httpService: HttpClient,
    private notify: NotificationService
  ) {}

  setIfAuthenticated() {
    this.token = sessionStorage.getItem('access_token');
    this.authenticated.next(!this.jwtService.isTokenExpired(this.token));
  }

  getAuthUser(): Observable<any> {
    this.setIfAuthenticated();
    const decodeToken = this.jwtService.decodeToken(this.token);
    return this.httpService
      .get(`${environment.apiTestBaseUrl}/users/${decodeToken.sub}`)
      .pipe(
        catchError((err) => {
          return of(this.handleError(err, 'Erreur serveur'));
        })
      );
  }

  private handleError(err: HttpErrorResponse, message: string) {
    this.notify.showError(message);
    console.log(err);
    throw new Error(message);
  }
}
