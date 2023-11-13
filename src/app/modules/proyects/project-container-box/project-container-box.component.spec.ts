import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContainerBoxComponent } from './project-container-box.component';

describe('ProjectContainerBoxComponent', () => {
  let component: ProjectContainerBoxComponent;
  let fixture: ComponentFixture<ProjectContainerBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectContainerBoxComponent]
    });
    fixture = TestBed.createComponent(ProjectContainerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
