import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss'],
})
export class EventDescriptionComponent implements OnInit {
  @Input() description!: string;
  constructor() {}

  ngOnInit(): void {
    // this.description = new DomSanitizerI().sanitize(this.description);
  }
}
