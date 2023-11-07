import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { TerminosComponent } from './terminos/terminos.component';
import { ViewProjectComponent } from './components/projects/view-project/view-project.component';
import { HorarioComponent } from './components/user/horario/horario.component';
import { AssignDateComponent } from './components/user/assign-date/assign-date.component';
import { ViewDatesComponent } from './components/user/view-dates/view-dates.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckMailComponent } from './components/user/check-mail/check-mail.component';
import { ProjectCatalogComponent } from './components/user/project-catalog/project-catalog.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'view-project/:id', component: ViewProjectComponent },
  { path: 'view-dates', component: ViewDatesComponent },
  { path: 'edit', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'project-catalog', component: ProjectCatalogComponent },
  {
    path: 'assign-date',
    component: AssignDateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  //Lo deja por defecto
  { path: 'verify_email', component: CheckMailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'horarios', component: HorarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}

