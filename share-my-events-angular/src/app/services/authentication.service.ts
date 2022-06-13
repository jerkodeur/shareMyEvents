import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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

  getAuthUserId(): any {
    this.setIfAuthenticated();
    return this.token && this.jwtService.decodeToken(this.token).sub;
  }

  checkIfOrganizer(eventOrganizerId: string): void {
    this.isOrganizer.next(this.getAuthUserId() == eventOrganizerId);
  }

  checkIfParticipant(participantId: number, participants: number[]): void {
    const isParticipant = participants.indexOf(participantId) != -1;
    this.isParticipant.next(isParticipant);
  }
}
