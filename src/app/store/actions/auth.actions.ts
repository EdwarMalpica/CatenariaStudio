import { createAction, props } from "@ngrx/store";
import { User } from "../models/User.model";

export const login = createAction('[Auth] Login', props<{ token: string, user:User }>());
export const logout = createAction('[Auth] Logout');
