import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordInstructionsComponent } from './reset-password-instructions.component';

describe('ResetPasswordInstructionsComponent', () => {
  let component: ResetPasswordInstructionsComponent;
  let fixture: ComponentFixture<ResetPasswordInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
