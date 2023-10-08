import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDateComponent } from './assign-date.component';

describe('AssignDateComponent', () => {
  let component: AssignDateComponent;
  let fixture: ComponentFixture<AssignDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignDateComponent]
    });
    fixture = TestBed.createComponent(AssignDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
