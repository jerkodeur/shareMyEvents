import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FlashService } from 'src/app/services/flash.service';

@Component({
  selector: 'app-reset-password-init',
  templateUrl: './reset-password-init.component.html',
  styleUrls: ['./reset-password-init.component.scss'],
})
export class ResetPasswordInitComponent implements OnInit {
  testEmail = 'jerome.potie@gmail.com';
  noMatch = false;

  constructor(
    private flashService: FlashService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (param) =>
        param['exception'] == 'codeExpired' &&
        this.flashService.flash$.next({
          errors: true,
          message:
            'La validité du code a expiré, merci de renseigner votre e-mail pour relancer la procédure.',
        })
    );
    sessionStorage.clear();
  }

  onSubmit(form: any) {
    if (form.value.email !== this.testEmail) {
      this.noMatch = true;
      return this.flashService.flash$.next({
        errors: true,
        message: "L'adresse e-mail est inconnue de nos services.",
      });
    }
    sessionStorage.setItem('email', form.value.email);
    this.router.navigate(['password-reset/instructions']);
  }
}
