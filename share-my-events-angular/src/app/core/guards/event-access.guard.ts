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
  private isOrganizer!: boolean;
  private isParticipant!: boolean;

  constructor(
    private authService: AuthenticationService,
    private eventService: EventService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | any {
    this.subscriptions();

    return this.eventService.getEvent$(route.params['id']).pipe(
      map((event: EventInterface) => {
        this.authService.checkIfOrganizer(event.organizerAuthId);
        const participantId = Number(sessionStorage.getItem('participantId'));
        this.authService.checkIfParticipant(participantId, event.participants);
        const isAuthorized = this.isOrganizer || this.isParticipant;
        if (!isAuthorized) {
          this.router.navigateByUrl('/home');
        }
        return isAuthorized;
      })
    );
  }

  subscriptions() {
    this.authService.isOrganizer.subscribe(
      (bool: boolean) => (this.isOrganizer = bool)
    );
    this.authService.isParticipant.subscribe(
      (bool: boolean) => (this.isParticipant = bool)
    );
  }
}
