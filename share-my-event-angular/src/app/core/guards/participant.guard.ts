import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, timeout } from 'rxjs';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from '../models/Participant.model';
@Injectable({
  providedIn: 'root',
})
export class ParticipantGuard implements CanActivate {
  participantId!: number;

  constructor(
    private participantService: ParticipantService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.participantService
      .getEventParticipants$(route.params['id'])
      .pipe(
        timeout(10000),
        map((participants: Participant[]) => {
          const isAuthorized =
            participants.filter(
              (participant) => participant.id == route.params['participant']
            ).length > 0;
          if (!isAuthorized) this.router.navigate(['home']);
          return isAuthorized;
        })
      );
  }
}
