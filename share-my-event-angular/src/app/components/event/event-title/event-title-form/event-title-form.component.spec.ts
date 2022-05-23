import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTitleFormComponent } from './event-title-form.component';

describe('EventTitleFormComponent', () => {
  let component: EventTitleFormComponent;
  let fixture: ComponentFixture<EventTitleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTitleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTitleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
