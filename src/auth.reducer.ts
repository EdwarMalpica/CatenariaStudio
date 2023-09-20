import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { createAction, props } from '@ngrx/store';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string }>()
);

export const logout = createAction('[Auth] Logout');
const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token }) => ({
    ...state,
    token,
    isAuthenticated: true,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    token: null,
    isAuthenticated: false,
  }))
);
