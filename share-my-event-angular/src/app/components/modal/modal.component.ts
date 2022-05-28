import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() btnName!: string;
  @Input() action!: Function;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
