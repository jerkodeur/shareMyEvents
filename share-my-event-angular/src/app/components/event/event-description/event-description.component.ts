import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss'],
})
export class EventDescriptionComponent implements OnInit {
  @Input() description!: string;
  safeDescription!: SafeHtml;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeDescription = this.domSanitizer.bypassSecurityTrustHtml(
      this.description
    );
  }
}
