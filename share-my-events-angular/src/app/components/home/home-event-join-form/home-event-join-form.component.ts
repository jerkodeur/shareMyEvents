import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-home-event-join-form',
  templateUrl: './home-event-join-form.component.html',
  styleUrls: ['./home-event-join-form.component.scss'],
})
export class HomeEventJoinFormComponent implements OnInit {
  joinEventForm!: FormGroup;
  authenticated!: boolean;

  submitted = false;

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private notify: NotificationService,
    private participantService: ParticipantService
  ) {}

  ngOnInit(): void {
    this.authService.authenticated.subscribe((bool: boolean) => {
      this.authenticated = bool;
    });
    this.authService.setIfAuthenticated();

    this.joinEventForm = !this.authenticated
      ? this.fb.group({
          email: [
            null,
            [
              Validators.required,
              Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
            ],
          ],
          eventCode: ['', Validators.required],
        })
      : this.fb.group({
          eventCode: ['', Validators.required],
        });
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.joinEventForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger'
      );
    }
    this.participantService.access$(this.joinEventForm.value).subscribe();
  }
}
