import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "../actions/auth.actions";
import { AuthState } from "./auth.state";

export const initialState:AuthState = {
  user: null,
  token: null
}
export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state,{ token }) => (
    {
      ...state, token
    })),
  on(AuthActions.loadUser, (state,{ user }) => (
    {
      ...state, user
    })),
  on(AuthActions.logout, (state) => (
    {
      ...state, token: null, user: null
    })),
);
