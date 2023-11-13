import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroUsuarioComponent } from './core/components/registro-usuario/registro-usuario.component';
import { TerminosComponent } from './core/components/terminos/terminos.component';
import { HorarioComponent } from './modules/citas/horario/horario.component';
import { ViewDatesComponent } from './modules/citas/view-dates/view-dates.component';
import { CheckMailComponent } from './components/user/check-mail/check-mail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'view-dates', component: ViewDatesComponent },
  { path: 'edit', component: EditProfileComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),

  },
  {path: 'citas',loadChildren:()=>import('./modules/citas/citas.module').then((m)=>m.CitasModule)},
  {path:'projects',loadChildren:()=>import('./modules/proyects/proyects.module').then((m)=>m.ProyectsModule)},
  { path: 'verify_email', component: CheckMailComponent },
  { path: 'horarios', component: HorarioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}

