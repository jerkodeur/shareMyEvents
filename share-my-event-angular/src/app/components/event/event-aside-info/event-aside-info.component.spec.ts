import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAsideInfoComponent } from './event-aside-info.component';

describe('EventAsideInfComponent', () => {
  let component: EventAsideInfoComponent;
  let fixture: ComponentFixture<EventAsideInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventAsideInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAsideInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
