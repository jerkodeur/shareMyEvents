import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-home-event-join-form',
  templateUrl: './home-event-join-form.component.html',
  styleUrls: ['./home-event-join-form.component.scss'],
})
export class HomeEventJoinFormComponent implements OnInit {
  joinEventForm!: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder, private notify: NotificationService) {}

  ngOnInit(): void {
    this.joinEventForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      participantId: ['', Validators.required],
    });
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.joinEventForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger'
      );
    }
    // this.router.navigate(['events/1']);
  }
}
