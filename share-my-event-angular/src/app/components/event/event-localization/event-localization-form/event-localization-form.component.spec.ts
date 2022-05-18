import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLocalizationFormComponent } from './event-localization-form.component';

describe('EventLocalizationFormComponent', () => {
  let component: EventLocalizationFormComponent;
  let fixture: ComponentFixture<EventLocalizationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventLocalizationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLocalizationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
