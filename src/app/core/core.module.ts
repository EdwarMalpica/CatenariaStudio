import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from '../shared/shared.module';
import { TerminosComponent } from './components/terminos/terminos.component';


@NgModule({
    declarations:
    [LoginComponent,
      HeaderComponent,
    TerminosComponent],
    providers: [CookieService],

    exports: [LoginComponent, HeaderComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        MenubarModule,
        SharedModule,
    ]
})
export class CoreModule {}
