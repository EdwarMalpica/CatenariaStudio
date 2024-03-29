import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../data/app.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isLoadingLogin, loginStart } from 'src/app/data/auth/auth.action';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { Observable } from 'rxjs';
import { getIsLoadingLogin, isAuthenticated } from 'src/app/data/auth/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isLoading:Observable<boolean>;
  isAuth:Observable<boolean>;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private alerts: AlertsService) {

  }
  ngOnInit(): void {
    this.isAuth = this.store.select(isAuthenticated);
    this.isLoading = this.store.select(getIsLoadingLogin);
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.isAuth.subscribe((isAuth) => {
      if (isAuth) {
        this.router.navigate(['/']);
      }
    });

  }

  onSubmit() {
    console.log('fui llamado boton de submit');
    if (this.loginForm.valid) {
      this.store.dispatch(isLoadingLogin({ isLoading: true }));
      this.store.dispatch(
        loginStart({
          data: {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
          },
        })
      );
      this.loginForm.reset();
    }
  }


}
