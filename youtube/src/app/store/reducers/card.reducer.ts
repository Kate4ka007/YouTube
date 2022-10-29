import { createReducer, on } from '@ngrx/store';
import { Add } from '../actions/card.actions';

export const customCardKey = 'customCardState';

export interface CustomCard {
  title: string;
  description: string;
  img: string;
  link: string;
  date: string;
}

export interface CustomCardState {
  [customCardKey]: CustomCard[];
}

const initialState: Array<CustomCard> = [];

export const todoReducer = createReducer(
  initialState,
  on(Add, (state, action): any => ([...state, {
    title: action.title,
    description: action.description,
    img: action.img,
    link: action.link,
    date: action.date,
  }])),

);
