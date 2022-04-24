import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-modifier',
  templateUrl: './status-modifier.component.html',
  styleUrls: ['./status-modifier.component.scss'],
})
export class StatusModifierComponent implements OnInit {
  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();
  status = 'Unknown';

  constructor() {}

  ngOnInit(): void {}

  updateStatus(status: string) {
    this.status = status;
    this.itemSelected.emit(status);
  }
}
