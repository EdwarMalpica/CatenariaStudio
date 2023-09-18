import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router){

  }

  login() {
    // Lógica de autenticación
    // se verifican las credenciales de la API
    if (this.username === 'usuario' && this.password === 'contraseña') {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Credenciales incorrectas');
    }
  }

}
