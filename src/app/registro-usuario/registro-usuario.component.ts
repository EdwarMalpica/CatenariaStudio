import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/auth/user';
import { Credential } from '../models/auth/credential';
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
    const nuevoUsuario = new User(this.username, this.email, this.password, this.nombre,
      this.apellido, '', this.telefono);
    console.log('Usuario registrado');
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

  iniciarSesion() {
    if (this.aceptarTerminos && this.username && this.password) {
      this.authService.login(new Credential(this.username, this.password)).subscribe(
        (response: any) => {
          // Manejo la respuesta del servidor, como guardar el token de autenticación
          const token = response.token; // si el servidor devuelve un token
          //redirigir al usuario o almacenar el token en el almacenamiento local
        },
        (error) => {

          console.error('Error al iniciar sesión', error);

        }
      );
    } else {
      console.error('Datos de inicio de sesión no válidos');
    }
  }

}






