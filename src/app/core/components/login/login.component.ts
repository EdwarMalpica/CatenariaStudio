import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../data/app.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginStart } from 'src/app/data/auth/auth.action';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private alerts: AlertsService) {

  }
  ngOnInit(): void {
    this.alerts.showInfo('Error');
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(
        loginStart({
          data: {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
          },
        })
      );
      this.loginForm.reset();
    } else {
    }

  }


}
