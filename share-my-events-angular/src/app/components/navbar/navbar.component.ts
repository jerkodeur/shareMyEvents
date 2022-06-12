import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  authenticated = false;

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.auth.authenticated.subscribe((bool) => (this.authenticated = bool));
    this.auth.setIfAuthenticated();
  }
}
