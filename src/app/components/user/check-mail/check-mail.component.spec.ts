import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMailComponent } from './check-mail.component';

describe('CheckMailComponent', () => {
  let component: CheckMailComponent;
  let fixture: ComponentFixture<CheckMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckMailComponent]
    });
    fixture = TestBed.createComponent(CheckMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
