import { Component, Input, OnInit } from '@angular/core';
import { GuestList } from 'src/app/core/models/GestList.model';
import { Guest } from 'src/app/core/models/Guest.model';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-event-guest-list',
  templateUrl: './event-guest-list.component.html',
  styleUrls: ['./event-guest-list.component.scss'],
})
export class EventGuestListComponent implements OnInit {
  @Input() eventId!: number;
  @Input() title!: string;

  guestList!: Guest[];
  isDisplayForm = false;

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {
    this.guestService.addGuest(new Guest('Jérôme', 'jerome.potie@gmail.com'));
    this.guestService.addGuest(new Guest('Jérémy', 'jeremy.test@gmail.com'));
    this.guestService.addGuest(new Guest('Frank', 'frank.test@gmail.com'));
    this.guestList = this.guestService.getGuestList();
  }

  toggleForm() {
    this.isDisplayForm = !this.isDisplayForm;
  }

  removeGuest(guest: Guest) {
    const accept = window.confirm(
      `Etes vous sur de vouloir supprimer ${guest.name} ?`
    );
    accept && this.guestService.removeGuest(guest);
    if (accept) this.guestList = this.guestService.getGuestList();
  }
}
