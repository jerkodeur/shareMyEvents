import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-status',
  templateUrl: './participant-status.component.html',
  styleUrls: ['./participant-status.component.scss'],
})
export class ParticipantStatusComponent implements OnInit {
  @Input() status!: string;

  constructor() {}
  ngOnInit(): void {}
}
