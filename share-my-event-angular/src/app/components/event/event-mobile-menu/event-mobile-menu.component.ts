import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-event-mobile-menu',
  templateUrl: './event-mobile-menu.component.html',
  styleUrls: ['./event-mobile-menu.component.scss'],
})
export class EventMobileMenuComponent implements OnInit {
  currentSection!: string;
  isOrganizer!: boolean;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));
  }

  scrollTo(section: any) {
    document
      .querySelector('#' + section)
      ?.scrollIntoView({ behavior: 'smooth' });
    this.currentSection = section;
  }
}
