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


  profile_data_example: ProfileData = {
    nombre: "Edwar",
    apellido: "Malpica",
    telefono: 3114322323,
    email: "edwar123@uptc.edu.co"
  };

nombre: string;

  constructor() {
    this.bsConfig = {
      containerClass: 'theme-default',
      dateInputFormat: 'DD/MM/YYYY' // Formato de fecha que se muestra en el campo
    };
  }
}

interface ProfileData {
  nombre: string;
  apellido: string;
  telefono: number;
  email: string;
}


