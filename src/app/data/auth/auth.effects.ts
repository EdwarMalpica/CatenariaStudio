import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { autoLogin, isLoadingLogin, loginStart, loginSuccess } from './auth.action';
import { of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { URL_API_LOGIN } from 'src/app/core/constants/constants';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { User } from './auth.state';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.apiService.post(URL_API_LOGIN, action.data).pipe(
          map((data: any) => {
            alert('Login Success');
            const user ={
              id: data.user.id,
              name: data.user.name,
              email: data.user.email,
              nombres: data.user.detalle.nombres,
              apellidos: data.user.detalle.apellidos,
              fecha_nacimiento: data.user.detalle.fecha_nacimiento,
              numero_telefonico: data.user.detalle.numero_telefonico,
            }
            return loginSuccess({ token: data.token, user: user });
          }),
          catchError((error) => {
            alert('Login Fail'+ error);
            return of(isLoadingLogin({ isLoading: false }));
          })
        );
      })
    )
  );

  $saveToken = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        map((action) => {
          this.authService.saveUser(action.user);
          this.authService.saveToken(action.token);
          return action;
        })
      ),
    { dispatch: false }
  );



  $autoLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(autoLogin),
      map((action) => {
        const token = this.authService.getToken();
        const user = this.authService.getUser();
        if (token) {
          return loginSuccess({ token: token , user: user});
        }
        return isLoadingLogin({ isLoading: false });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private authService:AuthService,
    private store: Store<AppState>
  ) {}
}
