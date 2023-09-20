import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  fechaNacimiento: Date | null = null;
  imagen: File | null = null;
  imagenSeleccionada: string | ArrayBuffer | null = null;
  aceptarTerminos: boolean = false;
  username: string = '';
  password: string = '';


  constructor(private http: HttpClient) {}


  registrarUsuario() {
    // Acceder a los valores de los campos del formulario
    const nuevoUsuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono,
      email: this.email,
      fechaNacimiento: this.fechaNacimiento,
      imagen: this.imagen, // URL de la imagen o un objeto de archivo revisar backend

    };
    console.log('Usuario registrado');

    // Lógica para enviar los datos del nuevoUsuario al servidor
    // solicitud HTTP POST para registrar al usuario en tu backend
    // Realizar una solicitud HTTP POST al servidor
  this.http.post('URL_DEL_BACKEND/registrarUsuario', nuevoUsuario).subscribe(
    (response) => {
      // Manejar la respuesta del servidor "mostrar un mensaje de éxito"
      console.log('Usuario registrado con éxito', response);
    },
    (error) => {
      // Manejar errores "mostrar un mensaje de error"
      console.error('Error al registrar usuario', error);
    }
  );
  }

  cancelarRegistro() {
    // Limpiar los valores de los campos y la imagen seleccionada
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.email = '';
    this.fechaNacimiento = null; // Si es una fecha, puedes establecerla como null o un valor predeterminado
    this.imagen = null; // También puedes establecerla como null
    this.imagenSeleccionada = null; // Limpiar la imagen seleccionada si la estás mostrando en el componente
    console.log('Registro cancelado');

  }



  onFileSelected(event: any) {
    // Manejar la selección de archivo (imagen)
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
    if (this.aceptarTerminos && this.username && this.username) {
      // Realiza una solicitud de inicio de sesión al servidor aquí.
      // Puedes usar servicios de Angular para hacer la solicitud HTTP.
      // this.authService.iniciarSesion(this.username, this.username).subscribe(
        // (response) => {
          // Manejar la respuesta del servidor, como guardar el token de autenticación.
        // },
        // (error) => {
          // Manejar errores, como mostrar un mensaje de error al usuario.
        // }
      // );
    } else {
      // Muestra un mensaje de error o toma alguna acción si los datos no son válidos o los términos no se aceptan.
    }
     //this.store.dispatch(AuthActions.login({ username: this.username, password: this.password }));
  }




}






