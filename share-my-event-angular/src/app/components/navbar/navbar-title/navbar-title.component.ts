import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-title',
  templateUrl: './navbar-title.component.html',
  styleUrls: ['./navbar-title.component.scss']
})
export class NavbarTitleComponent {

  constructor() { }

  @Input() scale: String = "desktop";

}
