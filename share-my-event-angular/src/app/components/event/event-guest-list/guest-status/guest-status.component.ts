import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-status',
  templateUrl: './guest-status.component.html',
  styleUrls: ['./guest-status.component.scss'],
})
export class GuestStatusComponent implements OnInit {
  @Input() status!: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.status);
  }
}
