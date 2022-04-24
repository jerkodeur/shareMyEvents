import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-main-info',
  templateUrl: './event-main-info.component.html',
  styleUrls: ['./event-main-info.component.scss'],
})
export class EventMainInfoComponent implements OnInit {
  @Input() description!: string;
  @Input() title!: string;

  constructor() {}

  ngOnInit(): void {}
}
