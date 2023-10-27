import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "../actions/auth.actions";
import { AuthState } from "./auth.state";

export const initialState:AuthState = {
  user: null,
  token: null,
  isAuthenticated: false
}
export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state,{ token, user }) => (
    {
      ...state, token, user, isAuthenticated: true
    })),

  on(AuthActions.logout, (state) => (
    {
      ...state, token: null, user: null
    })),
);
