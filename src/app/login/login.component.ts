import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth/auth.service';
import { AuthState } from '../store/reducers/auth.state';
import { AppState } from '../data/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>) {

  }

  onSubmit() {
    
  }

  login() {
    if (this.email && this.password) {
      this.authService.login( {
        email:this.email,
        password: this.password
      }).subscribe((dataResponse: any) => {
        // this.store.dispatch({ type: '[Auth] Login', payload: { token: dataResponse.token, user: dataResponse.user }});
        localStorage.setItem('token', dataResponse.token);
        localStorage.setItem('user', JSON.stringify(dataResponse.user));
        localStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/edit']);
        this.authService.setAuthenticated(true);
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
