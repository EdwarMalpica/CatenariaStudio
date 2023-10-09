import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/home/title/title.component';
import { HomeComponent } from './components/home/home.component';
import { MisionComponent } from './components/home/mision/mision.component';
import { EngineService } from './services/engine.service';
import { ProyectsTitleComponent } from './components/home/proyects-title/proyects-title.component';
import { SectionContentRightComponent } from './components/section-content-right/section-content-right.component';
import { SectionContentLeftComponent } from './components/section-content-left/section-content-left.component';
import { ServicesTitleComponent } from './components/home/services-title/services-title.component';
import { MoreServicesComponent } from './components/home/more-services/more-services.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { CalendarComponent } from './components/calendar/calendar.component';
defineLocale('es', esLocale);
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'; //
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { TerminosComponent } from './terminos/terminos.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { UserModule } from './components/user/user.module';
import { authReducer } from './store/reducers/auth.reducer';
import { HorarioComponent } from './horario/horario.component';


import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    HomeComponent,
    MisionComponent,
    ProyectsTitleComponent,
    SectionContentRightComponent,
    SectionContentLeftComponent,
    ServicesTitleComponent,
    MoreServicesComponent,
    ContactoComponent,
    EditProfileComponent,
    FooterComponent,
    CalendarComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    TerminosComponent,
    HorarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ auth: authReducer }),
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    UserModule,
    // EffectsModule.forRoot([AuthEffects]), // Configura los efectos

    MatIconModule,
    MatChipsModule
  ],
  providers: [EngineService],
  bootstrap: [AppComponent],
})
export class AppModule {}
