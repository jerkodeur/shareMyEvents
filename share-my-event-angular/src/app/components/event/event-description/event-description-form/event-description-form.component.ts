import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { EventService } from 'src/app/services/event.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-event-description-form',
  templateUrl: './event-description-form.component.html',
  styleUrls: ['./event-description-form.component.scss'],
})
export class EventDescriptionFormComponent implements OnInit {
  @Input() eventId!: number;
  @Input() eventDescription!: SafeHtml;
  @Output() hideForm = new EventEmitter();

  eventDescriptionForm!: FormGroup;
  submitted = false;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.eventDescriptionForm = this.fb.group({
      description: [this.eventDescription, [Validators.required]],
    });
  }

  cancelForm(): void {
    this.eventDescriptionForm.reset();
    this.hideForm.emit();
  }

  onSubmitForm(): void {
    this.submitted = true;
    console.log(this.eventDescriptionForm);
    if (this.eventDescriptionForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger'
      );
    }
    if (
      this.eventDescriptionForm.value['description'] != this.eventDescription
    ) {
      this.eventService
        .updateDescription$(
          this.eventDescriptionForm.value['description'],
          this.eventId
        )
        .subscribe();
    }
    this.cancelForm();
  }
}
