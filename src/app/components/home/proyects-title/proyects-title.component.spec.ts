import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsTitleComponent } from './proyects-title.component';

describe('ProyectsTitleComponent', () => {
  let component: ProyectsTitleComponent;
  let fixture: ComponentFixture<ProyectsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
