import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-logo',
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.scss']
})
export class NavbarLogoComponent {

  constructor() { }

  @Input() scale: String = "desktop";

}
