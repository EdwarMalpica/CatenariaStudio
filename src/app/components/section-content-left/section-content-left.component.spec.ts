import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContentLeftComponent } from './section-content-left.component';

describe('SectionContentLeftComponent', () => {
  let component: SectionContentLeftComponent;
  let fixture: ComponentFixture<SectionContentLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionContentLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionContentLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
