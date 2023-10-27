import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";

export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store
  ) {

  }

  login$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType('[Auth] Login'),
      exhaustMap((action)=>{
        return this.authService.login(action).pipe(
          map((data)=>{
            return {type:'[Auth] Login Success', payload:data}
          })
        )
      })
    )
  });

}
