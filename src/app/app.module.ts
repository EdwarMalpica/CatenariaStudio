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
import { EffectsModule } from '@ngrx/effects';

// import { authReducer } from './auth/auth.reducer';
// import { AuthEffects } from './auth/auth.effects';




import { authReducer } from '../auth.reducer';
import { AuthComponent } from './components/auth/auth.component';

import { TerminosComponent } from './terminos/terminos.component';

import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { UserModule } from './components/user/user.module';

// import { authReducer } from './auth/auth.reducer';
// import { AuthEffects } from './auth/auth.effects';




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
    AuthComponent,
    EditProfileComponent,
    FooterComponent,
    CalendarComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    TerminosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ auth: authReducer }),
    StoreModule.forRoot({}, {}),
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    UserModule,
    // StoreModule.forRoot({ auth: authReducer }), // Configura el Store con tu reducer
    // EffectsModule.forRoot([AuthEffects]), // Configura los efectos


  ],
  providers: [EngineService],
  bootstrap: [AppComponent],
})
export class AppModule {}
