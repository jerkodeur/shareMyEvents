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
  connected = true;

  constructor(
    private fb: FormBuilder,
    private notify: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.joinEventForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(2)]],
        guestId: ['', Validators.required],
      },
      { validator: [this.userExistValidator, this.unknownGuestIdValidator] }
    );
  }

  userExistValidator(form: FormGroup) {
    if (form.get('username')?.value !== 'moi') {
      return null;
    } else {
      return { userExist: true };
    }
  }

  unknownGuestIdValidator(form: FormGroup) {
    if (form.get('guestId')?.value === '12345') {
      return null;
    } else {
      return { unknownGuestId: true };
    }
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.joinEventForm.invalid) {
      return this.notify.showError(
        'Des erreurs ont été détectées, merci de les corriger'
      );
    }
    this.router.navigate(['events/1']);
  }
}
