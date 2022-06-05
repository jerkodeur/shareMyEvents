import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from './error-handler.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../core/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private token!: any;
  authenticated = new Subject<boolean>();
  isOrganizer = new BehaviorSubject<boolean>(false);
  isParticipant = new BehaviorSubject<boolean>(false);

  constructor(
    private errorHandler: ErrorHandlerService,
    private jwtService: JwtHelperService,
    private httpService: HttpClient
  ) {}

  setIfAuthenticated() {
    this.token = localStorage.getItem('access_token');
    this.authenticated.next(!this.jwtService.isTokenExpired(this.token));
  }

  getAuthUser(): Observable<any> {
    this.setIfAuthenticated();
    return this.httpService
      .get<User>(`${environment.apiTestBaseUrl}/users/${this.getAuthUserId}`)
      .pipe(
        catchError(async (err) =>
          this.errorHandler.notifyHttpError(err).subscribe()
        )
      );
  }

  getAuthUserId(): any {
    this.setIfAuthenticated();
    return this.jwtService.decodeToken(this.token).sub ?? null;
  }

  checkIfOrganizer(eventOrganizerId: string): void {
    this.isOrganizer.next(this.getAuthUserId() == eventOrganizerId);
  }

  checkIfParticipant(participantsId: number, participants: number[]): void {
    this.isParticipant.next(participants.indexOf(participantsId) != -1);
  }
}
