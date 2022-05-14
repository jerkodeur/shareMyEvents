import { Component, Input, OnInit } from '@angular/core';
import { DateHandler } from 'src/app/handlers/date-handler';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-event-aside-info',
  templateUrl: './event-aside-info.component.html',
  styleUrls: ['./event-aside-info.component.scss'],
})
export class EventAsideInfoComponent implements OnInit {
  @Input() eventId!: number;
  @Input() organizerMail!: string;
  @Input() organizerFirstname!: string;
  @Input() organizerLastname!: string;
  @Input() title!: string;
  @Input() eventDate!: Date;

  date!: string;
  time!: string;
  edited = false;

  isOrganizer!: boolean;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    const splitDate = DateHandler.splitDateObject(this.eventDate);
    this.date = splitDate[0];
    this.time = splitDate[1];
    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));
  }

  toggleEdition() {
    this.edited = !this.edited;
  }
}
