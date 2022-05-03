import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard implements CanActivate {
  token!: any;

  constructor(private jwtService: JwtHelperService, private router: Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('access_token');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const invalidToken = this.jwtService.isTokenExpired(this.token);
    if (!invalidToken) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
