import { createAction, props } from "@ngrx/store";

export const IS_LOADING = '[Shared] Is Loading';

export const isLoading = createAction(
  IS_LOADING,
  props<{ isLoading: boolean }>()
);
