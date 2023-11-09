import { Component } from '@angular/core';
import { User } from '../../../models/auth/user';
import { Credential } from '../../../models/auth/credential';
import { Route, Router } from '@angular/router';

// import { AuthActions } from '@angular./auth.actions'

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
})
export class RegistroUsuarioComponent {
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  email: string = '';
  fechaNacimiento: string = '';
  imagen: File | null = null;
  imagenSeleccionada: string | ArrayBuffer | null = null;
  aceptarTerminos: boolean = false;
  username: string = '';
  password: string = '';

  constructor( private route: Router) {}



  cancelarRegistro() {
    // Limpiar los valores de los campos y la imagen seleccionada
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.email = '';
    this.fechaNacimiento = ''; //
    this.imagen = null; //
    this.imagenSeleccionada = null; //
    console.log('Registro cancelado');
  }

  onFileSelected(event: any) {
    this.imagen = event.target.files[0];
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imagenSeleccionada = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  iniciarSesión() {

  }

  registrarUsuario() {
  }
}
