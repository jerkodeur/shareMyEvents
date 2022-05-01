import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-event-localization-form',
  templateUrl: './event-localization-form.component.html',
  styleUrls: ['./event-localization-form.component.scss'],
})
export class EventLocalizationFormComponent implements OnInit {
  @Output() hideForm = new EventEmitter();
  @Input() eventId!: number;
  @Input() eventAddress!: string;
  @Input() eventZipCode!: number;
  @Input() eventLocality!: string;
  @Input() eventAdditional!: string;

  localizationForm!: FormGroup;
  submitted = false;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.localizationForm = this.fb.group({
      address: this.eventAddress,
      zipCode: [this.eventZipCode, Validators.pattern(/^[0-9]{5}$/)],
      locality: this.eventLocality,
      additional: this.eventAdditional,
    });
  }
  cancelForm(): void {
    this.localizationForm.reset();
    this.hideForm.emit();
  }

  checkIfchanged(): boolean {
    return (
      this.localizationForm.value['address'] == this.eventAddress &&
      this.localizationForm.value['zipCode'] == this.eventZipCode &&
      this.localizationForm.value['locality'] == this.eventLocality &&
      this.localizationForm.value['additional'] == this.eventAdditional
    );
  }

  onSubmitForm(): void {
    this.submitted = true;
    if (this.localizationForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger'
      );
    }
    if (!this.checkIfchanged()) {
      this.eventService
        .updateLocalization$({ ...this.localizationForm.value }, this.eventId)
        .subscribe();
    }
    this.cancelForm();
  }
}
