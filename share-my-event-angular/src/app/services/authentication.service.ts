import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from './error-handler.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private token!: any;
  authenticated = new Subject<boolean>();

  constructor(
    private errorHandler: ErrorHandlerService,
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
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }
}
