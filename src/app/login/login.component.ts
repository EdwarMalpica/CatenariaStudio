import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import { AppState } from '../app.state'; // Define AppState según la aplicación
// import * as AuthActions from '../auth/auth.actions';

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
      //, private store: Store<AppState>

  }

  login() {

    // se verifican las credenciales de la API
    if (this.username === 'usuario' && this.password === 'contraseña') {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Credenciales incorrectas');
    }


  }

}
