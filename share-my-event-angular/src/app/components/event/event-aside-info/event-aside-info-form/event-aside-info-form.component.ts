import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EventService } from 'src/app/services/event.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DateHandler } from 'src/app/handlers/date-handler';
import { FullDate } from 'src/app/core/models/Date.model';

@Component({
  selector: 'app-event-aside-info-form',
  templateUrl: './event-aside-info-form.component.html',
  styleUrls: ['./event-aside-info-form.component.scss'],
})
export class EventAsideInfoFormComponent implements OnInit {
  @Output() hideForm = new EventEmitter();
  @Input() eventId!: number;
  @Input() eventDate!: Date;

  currentDate = FullDate.getCurrentDate();
  asideInfoForm!: FormGroup;
  submitted = false;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    const splitDate = DateHandler.splitDateObject(this.eventDate);
    this.asideInfoForm = this.fb.group({
      date: [
        splitDate[2],
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
      time: [
        splitDate[3],
        [
          Validators.required,
          Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
        ],
      ],
    });
  }

  cancelForm(): void {
    this.asideInfoForm.reset();
    this.hideForm.emit();
  }

  checkIfchanged(): boolean {
    return this.convertDate().getTime() == this.eventDate.getTime();
  }

  convertDate(
    date: string = this.asideInfoForm.value['date'],
    time: string = this.asideInfoForm.value['time']
  ): Date {
    return DateHandler.createDatebyDateAndTime(date, time);
  }
  onSubmitForm(): void {
    this.submitted = true;
    const { date, time } = this.asideInfoForm.value;
    if (this.asideInfoForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger'
      );
    }
    if (this.convertDate().getTime() < new Date().getTime()) {
      return this.notify.showError(
        "La date de l'event ne peut être inférieur à la date actuelle."
      );
    }
    if (!this.checkIfchanged()) {
      this.eventService
        .updateDate$(this.convertDate(date, time), this.eventId)
        .subscribe();
    }
    this.cancelForm();
  }
}
