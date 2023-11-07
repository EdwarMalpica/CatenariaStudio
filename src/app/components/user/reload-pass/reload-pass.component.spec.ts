import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadPassComponent } from './reload-pass.component';

describe('ChangePassComponent', () => {
  let component: ReloadPassComponent;
  let fixture: ComponentFixture<ReloadPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReloadPassComponent]
    });
    fixture = TestBed.createComponent(ReloadPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
