import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventJoinFormComponent } from './home-event-join-form.component';

describe('HomeEventJoinFormComponent', () => {
  let component: HomeEventJoinFormComponent;
  let fixture: ComponentFixture<HomeEventJoinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEventJoinFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEventJoinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
