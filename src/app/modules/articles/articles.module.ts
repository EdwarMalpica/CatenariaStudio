import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DISQUS_SHORTNAME, DisqusModule } from 'ngx-disqus';
import { MyDisqusService } from 'src/app/modules/services/my-disqus.service';
import { ArticlesComponent } from './articles.component';
import { ArticleContainerBoxComponent } from './article-container-box/article-container-box.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleContainerBoxComponent,
    ViewArticleComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    RouterModule,
    DisqusModule],
  providers: [
    MyDisqusService,
    { provide: DISQUS_SHORTNAME, useValue: 'catenariastudio-1' },
  ],
})
export class ArticlesModule { }
