import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AssignDateComponent } from './assign-date/assign-date.component';
import { FormsModule } from '@angular/forms';
import { ViewDatesComponent } from './view-dates/view-dates.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChangePassComponent } from './change-pass/change-pass.component';


@NgModule({
  declarations: [
    UserComponent,
    AssignDateComponent,
    ViewDatesComponent,
    ChangePassComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    BrowserModule
  ]
})
export class UserModule { }
