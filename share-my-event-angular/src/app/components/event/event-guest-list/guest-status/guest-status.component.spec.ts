import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestStatusComponent } from './guest-status.component';

describe('GuestStatusComponent', () => {
  let component: GuestStatusComponent;
  let fixture: ComponentFixture<GuestStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
