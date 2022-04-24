import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMainInfoComponent } from './event-main-info.component';

describe('EventMainInfoComponent', () => {
  let component: EventMainInfoComponent;
  let fixture: ComponentFixture<EventMainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMainInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
