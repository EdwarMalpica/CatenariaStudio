import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { TerminosComponent } from './terminos/terminos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: 'terminos', component: TerminosComponent },
  { path : 'edit', component : EditProfileComponent},
  //Lo deja por defecto
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}

