import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EventService } from 'src/app/services/event.service';
import { NotificationService } from 'src/app/services/notification.service';

import { LocalizationInterface } from 'src/app/core/interfaces/Localization.interface';

@Component({
  selector: 'app-event-localization-form',
  templateUrl: './event-localization-form.component.html',
  styleUrls: ['./event-localization-form.component.scss'],
})
export class EventLocalizationFormComponent implements OnInit {
  @Output() hideForm = new EventEmitter();
  @Input() eventId!: number;
  @Input() address!: LocalizationInterface;

  localizationForm!: FormGroup;
  submitted = false;
  hasChange = false;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.localizationForm = this.fb.group({
      street: this.address.street,
      zipCode: this.address.zipCode,
      locality: this.address.locality,
      additional: this.address.additional,
    });

    this.onCreateGroupFormValueChange();
  }
  cancelForm(): void {
    this.localizationForm.reset();
    this.hideForm.emit();
  }

  onCreateGroupFormValueChange() {
    const initialValue = this.localizationForm.value;
    this.localizationForm.valueChanges.subscribe((value) => {
      this.hasChange = Object.keys(initialValue).some(
        (key) => this.localizationForm.value[key] != initialValue[key]
      );
    });
  }

  onSubmitForm(): void {
    this.submitted = true;
    if (this.localizationForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger'
      );
    }
    let { street, zipCode, locality, additional } = this.localizationForm.value;

    if (street == '') street = null;
    if (zipCode == '') zipCode = null;
    if (locality == '') locality = null;
    if (additional == '') additional = null;

    if (this.hasChange) {
      this.eventService
        .updateLocalization$(
          { street, zipCode, locality, additional },
          this.eventId
        )
        .subscribe();
    }
    this.cancelForm();
  }
}
