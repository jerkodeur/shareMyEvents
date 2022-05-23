import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
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
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | any {
    return this.eventService.getEvent$(route.params['id']).pipe(
      map((event: EventInterface) => {
        const isAuthorized =
          this.authService.getAuthUserId() == event.organizerAuthId;
        if (!isAuthorized) {
          this.router.navigateByUrl('/home');
        }
        return isAuthorized;
      })
    );
  }
}
