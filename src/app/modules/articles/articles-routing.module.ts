import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [
  {path:'', component: ArticlesComponent},
  {path:':id',component:ViewArticleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
