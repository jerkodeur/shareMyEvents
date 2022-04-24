import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-localization',
  templateUrl: './event-localization.component.html',
  styleUrls: ['./event-localization.component.scss'],
})
export class EventLocalizationComponent implements OnInit {
  @Input() address!: string;
  @Input() zipCode!: number;
  @Input() locality!: string;
  @Input() additional!: string;

  constructor() {}

  ngOnInit(): void {}
}
