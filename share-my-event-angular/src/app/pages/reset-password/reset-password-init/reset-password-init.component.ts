import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-reset-password-init',
  templateUrl: './reset-password-init.component.html',
  styleUrls: ['./reset-password-init.component.scss'],
})
export class ResetPasswordInitComponent implements OnInit {
  testEmail = 'jerome.potie@gmail.com';
  noMatch = false;

  constructor(
    private route: ActivatedRoute,
    private notify: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (param) =>
        param['exception'] == 'codeExpired' &&
        this.notify.showError(
          'La validité du code a expiré, merci de renseigner votre e-mail pour relancer la procédure'
        )
    );
    localStorage.clear();
  }

  onSubmit(form: any) {
    if (form.value.email !== this.testEmail) {
      this.noMatch = true;
      return this.notify.showError(
        "L'adresse e-mail est inconnue de nos services"
      );
    }
    localStorage.setItem('email', form.value.email);
    this.router.navigate(['password-reset/instructions']);
  }
}
