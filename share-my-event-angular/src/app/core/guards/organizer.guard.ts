import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, timeout } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';

import { EventInterface } from '../interfaces/Event.interface';

@Injectable({
  providedIn: 'root',
})
export class OrganizerGuard implements CanActivate {
  eventOrganizerId!: number;
  authUserId!: number;

  constructor(
    private authService: AuthenticationService,
    private eventService: EventService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | any {
    const authorized = this.isAuthorized(route);
    if (!authorized) {
      this.router.navigate(['home']);
    }

    return authorized;
  }

  isAuthorized(route: ActivatedRouteSnapshot) {
    this.authUserId = +this.authService.getAuthUserId();
    return this.eventService.getEvent$(route.params['id']).pipe(
      timeout(10000),
      map((event: EventInterface) => {
        const isAuthorized = event.organizerId == this.authUserId;
        if (!isAuthorized) this.router.navigate(['home']);
        return isAuthorized;
      })
    );
  }
}
