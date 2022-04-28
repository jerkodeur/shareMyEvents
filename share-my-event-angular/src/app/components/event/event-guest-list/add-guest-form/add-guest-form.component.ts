import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guest } from 'src/app/core/models/Guest.model';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-add-guest-form',
  templateUrl: './add-guest-form.component.html',
  styleUrls: ['./add-guest-form.component.scss'],
})
export class AddGuestFormComponent implements OnInit {
  @Output() newGuest: EventEmitter<Guest> = new EventEmitter<Guest>();
  guest = { name: '', email: '' };
  submitted = false;

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.submitted = true;
    const { name, email } = form.value;
    const newGuest = new Guest(name, email);
    this.guestService.addGuest(newGuest);
    form.resetForm();
    console.log(newGuest);
  }
}
