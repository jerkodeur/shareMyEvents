import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, tap, timeout } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';
import { EventInterface } from '../interfaces/Event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventAccessGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | any {
    return this.eventService.getEvent$(route.params['id']).pipe(
      map((event: EventInterface) => {
        const isAuthorized =
          this.authService.getAuthUserId() == event.organizerAuthId;
        if (!isAuthorized) {
          this.router.navigate(['']);
        }
        return isAuthorized;
      })
    );
  }
}
