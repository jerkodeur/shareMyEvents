import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMobileMenuComponent } from './event-mobile-menu.component';

describe('EventMobileMenuComponent', () => {
  let component: EventMobileMenuComponent;
  let fixture: ComponentFixture<EventMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMobileMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
