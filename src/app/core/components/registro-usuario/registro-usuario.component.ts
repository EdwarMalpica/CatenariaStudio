import { Component } from '@angular/core';
import { User } from '../../../models/auth/user';
import { Credential } from '../../../models/auth/credential';
import { Route, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { URL_API_REGISTRY } from 'src/app/data/constants/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  formulario: FormGroup;

  constructor( private route: Router,private fb: FormBuilder,private api: ApiService,private router:Router) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required],
      password: ['', Validators.required],
      aceptarTerminos: [false, Validators.requiredTrue],
    });
  }



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

  iniciarSesión() {}


  registrarUsuario() {
    const data = {
      nombre: this.formulario.get('nombre')!.value || '',
      apellido: this.formulario.get('apellido')!.value || '',
      telefono: this.formulario.get('telefono')!.value || '',
      email: this.formulario.get('email')!.value || '',
      password: this.formulario.get('password')!.value || '',
    };
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    console.log('DATA', JSON.stringify(data));
    this.api.post(URL_API_REGISTRY, formData).subscribe(
      (response) => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/home']);
        // Handle any additional logic based on the response if needed
      },
      (error) => {
        alert('Error al registrar el usuario');
      },
      () => {
        console.log('Peticion finalizada');
      }
    );
  }


}
