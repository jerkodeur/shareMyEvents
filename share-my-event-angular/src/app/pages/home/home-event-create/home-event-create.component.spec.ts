import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventCreateComponent } from './home-event-create.component';

describe('HomeEventCreateComponent', () => {
  let component: HomeEventCreateComponent;
  let fixture: ComponentFixture<HomeEventCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEventCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEventCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
