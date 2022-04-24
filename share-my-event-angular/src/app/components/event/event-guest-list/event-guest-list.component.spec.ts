import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGuestListComponent } from './event-guest-list.component';

describe('EventGuestListComponent', () => {
  let component: EventGuestListComponent;
  let fixture: ComponentFixture<EventGuestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventGuestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGuestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
