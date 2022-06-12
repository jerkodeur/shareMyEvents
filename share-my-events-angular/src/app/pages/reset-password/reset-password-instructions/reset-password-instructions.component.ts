import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-instructions',
  templateUrl: './reset-password-instructions.component.html',
  styleUrls: ['./reset-password-instructions.component.scss'],
})
export class ResetPasswordInstructionsComponent implements OnInit {
  email!: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => (this.email = params.email));
  }
}
