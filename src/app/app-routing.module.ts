import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { TerminosComponent } from './terminos/terminos.component';
import { HorarioComponent } from './horario/horario.component';
import { AssignDateComponent } from './components/user/assign-date/assign-date.component';
import { CheckMailComponent } from './components/user/check-mail/check-mail.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: 'terminos', component: TerminosComponent },
  { path : 'edit', component : EditProfileComponent},
  { path : 'assign-date', component : AssignDateComponent},
  { path: 'user', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },
  //Lo deja por defecto
  {path:'verify_email', component:CheckMailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'horarios', component: HorarioComponent },
  { path: 'change_password', component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}

