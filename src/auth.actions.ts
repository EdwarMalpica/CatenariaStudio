import { createAction, props } from '@ngrx/store';


export const setToken = createAction('[Auth] Set Token', props<{ token: string | null }>());
