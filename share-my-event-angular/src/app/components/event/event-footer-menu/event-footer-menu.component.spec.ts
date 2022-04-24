import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFooterMenuComponent } from './event-footer-menu.component';

describe('EventFooterMenuComponent', () => {
  let component: EventFooterMenuComponent;
  let fixture: ComponentFixture<EventFooterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFooterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFooterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
