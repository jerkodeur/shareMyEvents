import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate, OnInit {
  token!: any;

  constructor(
    private auth: AuthenticationService,
    private jwtService: JwtHelperService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const invalidToken = this.jwtService.isTokenExpired(this.token);
    if (invalidToken) {
      this.auth.authenticated.next(false);
      if (this.token) this.userService.logout();
      else this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
