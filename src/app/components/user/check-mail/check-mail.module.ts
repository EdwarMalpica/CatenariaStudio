import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckMailRoutingModule } from './check-mail-routing.module';
import { CheckMailComponent } from './check-mail.component';


@NgModule({
  declarations: [
    CheckMailComponent
  ],
  imports: [
    CommonModule,
    CheckMailRoutingModule
  ]
})
export class CheckMailModule { }
