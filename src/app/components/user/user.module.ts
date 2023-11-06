import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AssignDateComponent } from './assign-date/assign-date.component';
import { FormsModule } from '@angular/forms';
import { ViewDatesComponent } from './view-dates/view-dates.component';
import { BrowserModule } from '@angular/platform-browser';
import { HorarioComponent } from './horario/horario.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ProjectCatalogComponent } from './project-catalog/project-catalog.component';
import { ProjectContainerBoxComponent } from './project-container-box/project-container-box.component';



@NgModule({
  declarations: [
    UserComponent,
    AssignDateComponent,
    ViewDatesComponent,
    HorarioComponent,
    ProjectCatalogComponent,
    ProjectContainerBoxComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatChipsModule,
  ],
})
export class UserModule {}
