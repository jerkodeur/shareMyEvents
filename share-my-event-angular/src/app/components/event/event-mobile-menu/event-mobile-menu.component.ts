import { Component } from '@angular/core';

@Component({
  selector: 'app-event-mobile-menu',
  templateUrl: './event-mobile-menu.component.html',
  styleUrls: ['./event-mobile-menu.component.scss'],
})
export class EventMobileMenuComponent {
  currentSection!: string;

  constructor() {}

  scrollTo(section: any) {
    document
      .querySelector('#' + section)
      ?.scrollIntoView({ behavior: 'smooth' });
    this.currentSection = section;
  }
}
