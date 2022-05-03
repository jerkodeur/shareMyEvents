import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private token!: any;
  authenticated = new Subject<boolean>();

  constructor(private jwtService: JwtHelperService) {}

  setIfAuthenticated() {
    this.token = sessionStorage.getItem('access_token');
    this.authenticated.next(!this.jwtService.isTokenExpired(this.token));
  }
}
