import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/auth/user';
import { Route, Router } from '@angular/router';
// import { AuthActions } from '@angular./auth.actions'

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {

  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  email: string = '';
  fechaNacimiento: string ='' ;
  imagen: File | null = null;
  imagenSeleccionada: string | ArrayBuffer | null = null;
  aceptarTerminos: boolean = false;
  username: string = '';
  password: string = '';


  constructor(private auth:AuthService, private route:Router) {}


  registrarUsuario() {
    // Acceder a los valores de los campos del formulario
    const user = new User(this.nombre+this.apellido,this.email, this.password, this.nombre, this.apellido,this.fechaNacimiento, this.telefono);
    console.log(user);

    // Lógica para enviar los datos del nuevoUsuario al servidor
    // solicitud HTTP POST para registrar al usuario en tu backend
    // Realizar una solicitud HTTP POST al servidor
  this.auth.register(user).subscribe(
    (response) => {
      alert('Usuario registrado con éxito: \n'+response);
      this.route.navigate(['/home']);
    },
    (error) => {
      // Manejar errores "mostrar un mensaje de error"
      alert('Error al registrar usuario'+ error);
    }
  );
  }

  cancelarRegistro() {
    // Limpiar los valores de los campos y la imagen seleccionada
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.email = '';
    this.fechaNacimiento = ""; //
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






}






