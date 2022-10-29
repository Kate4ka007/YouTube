import { createAction, props } from '@ngrx/store';

export const Add = createAction('[Custom card] Add', props<{
  title: string;
  description: string;
  img: string;
  link: string;
  date: string;
}>());
