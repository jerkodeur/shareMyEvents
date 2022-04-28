import { Guest } from './Guest.model';

export class GuestList {
  private guestList: Guest[];

  constructor(guestList: Guest[]) {
    this.guestList = guestList;
  }

  getGuestList(): Guest[] {
    return this.guestList;
  }

  addGuest(guest: Guest): void {
    this.guestList.push(guest);
  }

  updateGuest(guest: Guest): void {
    this.guestList.map((item) => {
      if (guest === item) {
        item = guest;
      }
    });
  }

  removeGuest(guest: Guest): void {
    this.guestList = this.guestList.filter((item) => item !== guest);
  }
}
