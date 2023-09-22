import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  fechaNacimiento: Date | null = null;
  imagen: File | null = null;
  imagenSeleccionada: string | ArrayBuffer | null = null;
  aceptarTerminos: boolean = false;
  username: string = '';
  password: string = '';
  authService: any;


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
    this.fechaNacimiento = null; //
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
      // Realizar una solicitud de inicio de sesión al servidor aquí
      // Puedes utilizar el servicio HttpClient de Angular para hacer la solicitud HTTP
      const datosInicioSesion = {
        username: this.username,
        password: this.password
      };

      this.http.post('URL_DEL_BACKEND/iniciarSesion', datosInicioSesion).subscribe(
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






