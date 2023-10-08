import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Credential } from '../models/auth/credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {

  }

  login() {
    if (this.username && this.password) {
      this.authService.login(new Credential(this.username, this.password)).subscribe((dataResponse: any) => {
        console.log(dataResponse);
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/edit']);
      },
        (error: any) => {
          console.log(error);
          alert('Credenciales incorrectas');
        }
      );
    } else {
      alert('Complete los campos');
    }
  }
}
