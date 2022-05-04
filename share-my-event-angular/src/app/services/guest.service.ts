import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GuestList } from '../core/models/GestList.model';
import { Guest } from '../core/models/Guest.model';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private guestList = new GuestList([]);

  constructor(private httpService: HttpClient) {}

  getGuestList(): Guest[] {
    return this.guestList.getGuestList();
  }

  getEventGuests$(eventId: number): Observable<Guest[]> {
    return this.httpService.get<Guest[]>(
      `${environment.apiTestBaseUrl}/guest?eventId=${eventId}`
    );
  }

  addGuest(guest: Guest): void {
    this.guestList.addGuest(guest);
  }

  updateGuest(guest: Guest) {
    this.guestList.updateGuest(guest);
  }

  removeGuest(guest: Guest) {
    this.guestList.removeGuest(guest);
  }
}
