import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path : 'edit', component : EditProfileComponent},
  { path : 'home', component : HomeComponent},

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
}

