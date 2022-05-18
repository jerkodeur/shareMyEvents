import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ValidateDate } from 'src/app/core/validations/ValidateFutureDate';

import { Event } from 'src/app/core/models/Event.model';

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
  currentDate = '16-12-1977';

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
        street: null,
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
    const eventDate = DateHandler.createDatebyDateAndTime(date, time);
    let { street, zipCode, locality, additional } =
      this.eventForm.value.addressForm;

    if (street == '') street = null;
    if (zipCode == '') zipCode = null;
    if (locality == '') locality = null;
    if (additional == '') additional = null;

    const newEvent = new Event(
      title,
      description,
      eventDate,
      this.authService.getAuthUserId(),
      { street, zipCode, locality, additional }
    );

    this.eventService.createEvent$(newEvent).subscribe((event) => {
      next: () => this.router.navigate([`/events/${event.id}`]);
    });
  };
}
