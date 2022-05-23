import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLocalizationComponent } from './event-localization.component';

describe('EventLocalizationComponent', () => {
  let component: EventLocalizationComponent;
  let fixture: ComponentFixture<EventLocalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventLocalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
