import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { CitasComponent } from './citas.component';
import { HorarioComponent } from './horario/horario.component';
import { ViewDatesComponent } from './view-dates/view-dates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [CitasComponent, HorarioComponent, ViewDatesComponent],
  imports: [
    CommonModule,
    CitasRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    CalendarModule,
    DialogModule,
  ],
})
export class CitasModule {}
