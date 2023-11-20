import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/data/app.state';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import {  loginSuccess } from 'src/app/data/auth/auth.action';
import { Observable } from 'rxjs';
import { getIsLoadingButton } from 'src/app/data/shared/shared.selector';
import { isLoadingButton } from 'src/app/data/shared/shared.action';

// import { AuthActions } from '@angular./auth.actions'

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
})
export class RegistroUsuarioComponent implements OnInit {
  registerForm: FormGroup;
  isLoading: Observable<boolean>;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private alerts: AlertsService
  ) {}

  ngOnInit(): void {
    this.isLoading = this.store.select(getIsLoadingButton);
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      numero_telefonico: ['', Validators.required],
    });
  }

  onSubmit() {
    const fecha = this.registerForm.get('fecha_nacimiento')?.value;
    const año = fecha.getFullYear();
    const mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
    const dia = ('0' + fecha.getDate()).slice(-2);
    const fechaString = `${año}-${mes}-${dia}`;
    this.registerForm.get('fecha_nacimiento')?.setValue(fechaString);
    this.registerForm.get('name')?.setValue(this.registerForm.get('nombres')?.value+this.registerForm.get('apellidos')?.value);
    if (this.registerForm.valid) {
      this.store.dispatch(isLoadingButton({ isLoadingButton: true }));
      this.apiService.post('auth/register', this.registerForm.value).subscribe({
        next: (data: any) => {
          this.alerts.showSuccess('Usuario registrado correctamente');
          const user = {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            nombres: data.user.detalle.nombres,
            apellidos: data.user.detalle.apellidos,
            fecha_nacimiento: data.user.detalle.fecha_nacimiento,
            numero_telefonico: data.user.detalle.numero_telefonico,
          };
          this.store.dispatch(loginSuccess({ token: data.token, user: user }));
          this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.alerts.showError(error.message);
          this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
        },
      });
    } else {
      console.log(this.registerForm.value);

      this.alerts.showError('Complete los campos');
      this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
    }
  }
}
