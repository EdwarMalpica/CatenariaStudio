import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms'; //
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RegistroUsuarioComponent } from './core/components/registro-usuario/registro-usuario.component';
import { UserModule } from './components/user/user.module';


import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './data/app.state';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { AuthEffects } from './data/auth/auth.effects';
import { SharedModule } from './shared/shared.module';
import { AlertsService } from './shared/services/alerts.service';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ProyectsModule } from './modules/proyects/proyects.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
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
    RegistroUsuarioComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ProyectsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    UserModule,
    MatIconModule,
    MatChipsModule,
    StoreDevtoolsModule.instrument({ maxAge: 1000, logOnly: !isDevMode() }),
    ToastModule,
    MessageModule,
    MessagesModule,
  ],
  providers: [
    EngineService,
    AlertsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
