import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminosComponent } from './terminos/terminos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'terminos', component: TerminosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
