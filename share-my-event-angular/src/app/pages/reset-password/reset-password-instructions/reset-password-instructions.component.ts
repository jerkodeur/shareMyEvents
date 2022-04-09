import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-instructions',
  templateUrl: './reset-password-instructions.component.html',
  styleUrls: ['./reset-password-instructions.component.scss'],
})
export class ResetPasswordInstructionsComponent implements OnInit {
  private _email!: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('email')) {
      this._email = sessionStorage.getItem('email');
    } else {
      this.router.navigate(['']);
    }
  }

  public get email(): any {
    return this._email;
  }
}
