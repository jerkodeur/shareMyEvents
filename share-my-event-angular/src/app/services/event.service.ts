import { Injectable } from '@angular/core';
import { Event } from '../core/models/Event.model';
import { event1 } from '../data/Event1.data';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  event!: Event;

  constructor() {
    this.event = event1;
  }

  getEvent(): Event {
    return this.event;
  }
}
