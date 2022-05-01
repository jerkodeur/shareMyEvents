import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-event-create',
  templateUrl: './home-event-create.component.html',
  styleUrls: ['./home-event-create.component.scss'],
})
export class HomeEventCreateComponent {
  connected = true;

  constructor(private router: Router) {}

  createNewEvent(): void {
    this.router.navigate(['/new-event']);
  }
}
