import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from '../shared/shared.module';
import { TerminosComponent } from './components/terminos/terminos.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
    declarations:
    [LoginComponent,
      HeaderComponent,
    TerminosComponent,
  RegistroUsuarioComponent],
    providers: [CookieService,ApiService,AuthService],

    exports: [LoginComponent, HeaderComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        MenubarModule,
        SharedModule,
        FormsModule,
        CalendarModule
    ]
})
export class CoreModule {}
