import { createAction, props } from "@ngrx/store";
import { User } from "../models/User.model";

export const login = createAction('[Auth] Login', props<{ token: string }>());
export const logout = createAction('[Auth] Logout');
export const loadUser = createAction('[Auth] Load User', props<{ user: User }>());
