import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAsideInfoFormComponent } from './event-aside-info-form.component';

describe('EventAsideInfoFormComponent', () => {
  let component: EventAsideInfoFormComponent;
  let fixture: ComponentFixture<EventAsideInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAsideInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAsideInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
