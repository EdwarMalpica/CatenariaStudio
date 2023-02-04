import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContentRightComponent } from './section-content-right.component';

describe('SectionContentRightComponent', () => {
  let component: SectionContentRightComponent;
  let fixture: ComponentFixture<SectionContentRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionContentRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionContentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
