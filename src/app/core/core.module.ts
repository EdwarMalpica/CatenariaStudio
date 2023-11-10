import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [LoginComponent, HeaderComponent],
    providers: [CookieService],
    exports: [LoginComponent, HeaderComponent],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        MenubarModule,
        SharedModule,
    ]
})
export class CoreModule {}
