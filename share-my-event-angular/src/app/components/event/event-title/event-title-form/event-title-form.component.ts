import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EventService } from 'src/app/services/event.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-event-title-form',
  templateUrl: './event-title-form.component.html',
  styleUrls: ['./event-title-form.component.scss'],
})
export class EventTitleFormComponent implements OnInit {
  @Input() eventTitle!: string;
  @Input() eventId!: number;
  @Output() hideForm = new EventEmitter();

  eventTitleForm!: FormGroup;
  submitted = false;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.eventTitleForm = this.fb.group({
      title: [this.eventTitle, [Validators.required, Validators.maxLength(50)]],
    });
  }

  cancelForm(): void {
    this.eventTitleForm.reset();
    this.hideForm.emit();
  }

  onSubmitForm(): void {
    this.submitted = true;
    console.log(this.eventTitleForm);
    if (this.eventTitleForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger'
      );
    }
    if (this.eventTitleForm.value['title'] != this.eventTitle) {
      this.eventService
        .updateTitle$(this.eventTitleForm.value['title'], this.eventId)
        .subscribe();
    }
    this.cancelForm();
  }
}
