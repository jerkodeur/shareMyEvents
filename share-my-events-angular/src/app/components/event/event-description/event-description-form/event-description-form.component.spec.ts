import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDescriptionFormComponent } from './event-description-form.component';

describe('EventDescriptionFormComponent', () => {
  let component: EventDescriptionFormComponent;
  let fixture: ComponentFixture<EventDescriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDescriptionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
