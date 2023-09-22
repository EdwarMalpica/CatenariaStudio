import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from 'src/app/store/auth.state';
   import * as AuthActions from './auth.actions';

   export const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.setToken, (state, { token }) => ({ ...state, token }))
  );
