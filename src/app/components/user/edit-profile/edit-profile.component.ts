import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  fechaSeleccionada: Date; // Variable para almacenar la fecha seleccionada
  bsConfig: Partial<BsDatepickerConfig>; // Configuración adicional para el calendario

  constructor() {
    this.bsConfig = {
      containerClass: 'theme-default',
      dateInputFormat: 'DD/MM/YYYY' // Formato de fecha que se muestra en el campo
    };
  }
}
