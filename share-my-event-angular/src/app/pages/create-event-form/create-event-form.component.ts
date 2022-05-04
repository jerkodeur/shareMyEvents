import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FullDate } from 'src/app/core/models/Date.model';
import { ValidateDate } from 'src/app/shared/ValidateFutureDate';
import { Event } from 'src/app/core/models/Event.model';
import { User } from 'src/app/core/models/User.model';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { EventService } from 'src/app/services/event.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DateHandler } from 'src/app/handlers/date-handler';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss'],
})
export class CreateEventFormComponent implements OnInit {
  submitted = false;
  currentDate = FullDate.getCurrentDate();

  constructor(
    private authService: AuthenticationService,
    private eventService: EventService,
    private formBuilder: FormBuilder,
    private notify: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  eventForm = this.formBuilder.group(
    {
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required]],
      date: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
      time: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
        ],
      ],
      addressForm: this.formBuilder.group({
        address: null,
        zipCode: [null, Validators.pattern(/^[0-9]{5}$/)],
        locality: null,
        additional: null,
      }),
    },
    { validator: ValidateDate.isFuture }
  );

  get formValues() {
    return this.eventForm.controls;
  }

  onSubmit = (): void => {
    this.submitted = true;
    if (this.eventForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger.'
      );
    }
    const { title, description, date, time } = this.eventForm.value;
    const { address, zipCode, locality, additional } =
      this.eventForm.value.addressForm;
    const eventDate = DateHandler.createDatebyDateAndTime(date, time);

    this.authService.getAuthUser().subscribe((organizer: User) => {
      const newEvent = new Event(
        title,
        description,
        eventDate,
        `${organizer.firstname} ${organizer.lastname}`,
        organizer.email,
        organizer.id,
        address,
        zipCode,
        locality,
        additional
      );

      this.eventService
        .createEvent$(newEvent)
        .subscribe((event) => this.router.navigate([`/events/${event.id}`]));
    });
  };
}
