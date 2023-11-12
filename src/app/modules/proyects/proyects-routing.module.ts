import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectsComponent } from './proyects.component';
import { ViewProjectComponent } from './view-project/view-project.component';

const routes: Routes = [
  {path:'', component: ProyectsComponent},
  {path:':id',component:ViewProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectsRoutingModule { }
