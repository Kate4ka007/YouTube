import { createAction, props } from '@ngrx/store';

export enum SearchCardAction {
  searchAction = '[Search card] Search',
  searchSuccess = '[Search card] Success',
  searchError = '[Search card] Error',
}

export const SearchAction = createAction(
  SearchCardAction.searchAction,
  props<{ title: string; }>(),
);

export const SuccessAction = createAction(SearchCardAction.searchSuccess);

export const ErrorAction = createAction(SearchCardAction.searchError);
