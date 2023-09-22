import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent },
{ path: 'check-mail', loadChildren: () => import('./check-mail/check-mail.module').then(m => m.CheckMailModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
