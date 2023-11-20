import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContainerBoxComponent } from './article-container-box.component';

describe('ArticleContainerBoxComponent', () => {
  let component: ArticleContainerBoxComponent;
  let fixture: ComponentFixture<ArticleContainerBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleContainerBoxComponent]
    });
    fixture = TestBed.createComponent(ArticleContainerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
