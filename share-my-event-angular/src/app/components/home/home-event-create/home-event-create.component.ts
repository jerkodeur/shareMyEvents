import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home-event-create',
  templateUrl: './home-event-create.component.html',
  styleUrls: ['./home-event-create.component.scss'],
})
export class HomeEventCreateComponent implements OnInit {
  authenticated = false;

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.auth.authenticated.subscribe((bool) => (this.authenticated = bool));

    this.auth.setIfAuthenticated();
  }

  createNewEvent(): void {
    this.router.navigate(['/new-event']);
  }
}
