import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-event-localization',
  templateUrl: './event-localization.component.html',
  styleUrls: ['./event-localization.component.scss'],
})
export class EventLocalizationComponent implements OnInit {
  @Input() eventId!: number;
  @Input() address!: string;
  @Input() zipCode!: string;
  @Input() locality!: string;
  @Input() additional!: string;

  isOrganizer!: boolean;
  edited = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.isOrganizer.subscribe((bool) => (this.isOrganizer = bool));
  }

  toggleEdition() {
    this.edited = !this.edited;
  }
}
