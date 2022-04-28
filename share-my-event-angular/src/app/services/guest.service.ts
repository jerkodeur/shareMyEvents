import { Injectable } from '@angular/core';
import { GuestList } from '../core/models/GestList.model';
import { Guest } from '../core/models/Guest.model';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private guestList = new GuestList([]);

  constructor() {}

  getGuestList(): Guest[] {
    return this.guestList.getGuestList();
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
