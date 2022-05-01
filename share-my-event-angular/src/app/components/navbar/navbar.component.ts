import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  connected = false;

  constructor() {}

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.connected = true;
    }
  }
}
