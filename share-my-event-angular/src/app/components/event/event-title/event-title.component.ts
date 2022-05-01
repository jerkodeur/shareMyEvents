import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-title',
  templateUrl: './event-title.component.html',
  styleUrls: ['./event-title.component.scss'],
})
export class EventTitleComponent implements OnInit {
  @Input() title!: string;
  @Input() eventId!: number;

  edited = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.title);
  }

  toggleEdition() {
    this.edited = !this.edited;
  }
}
