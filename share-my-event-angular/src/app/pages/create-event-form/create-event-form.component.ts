import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FlashService } from 'src/app/services/flash.service';
import { FullDate } from 'src/app/core/models/Date.model';
import { ValidateDate } from 'src/app/shared/ValidateFutureDate';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss'],
})
export class CreateEventFormComponent implements OnInit {
  submitted = false;
  currentDate = FullDate.getCurrentDate();

  constructor(
    private formBuilder: FormBuilder,
    private flashService: FlashService
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
        additionnal: null,
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
      return this.flashService.flash$.next({
        errors: true,
        message: 'Des erreurs ont été détectées, merci de les corriger.',
      });
    }
    const {
      title,
      description,
      date,
      time,
      address,
      zipCode,
      locality,
      additionnal,
    } = this.eventForm.value;
    // Construire la date
    // const newEvent = new Event();
    // console.log(newEvent);
  };
}
