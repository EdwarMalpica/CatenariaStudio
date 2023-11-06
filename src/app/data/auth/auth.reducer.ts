import {  createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { isLoadingLogin, loginSuccess } from './auth.action';



export const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      token: action.token,
      error: '',
      isLoading: false,
    };
  }),
  on(isLoadingLogin, (state, action) => {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  })
);

