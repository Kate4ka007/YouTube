import { Action, createReducer, on } from '@ngrx/store';
// eslint-disable-next-line import/no-cycle
import { AddCardAction } from '../actions/card.actions';

export const customCardKey = 'customCard';
export const customCardKey2 = 'customCard2';

export interface CustomCard {
  title: string;
  description: string;
  img: string;
  link: string;
  date: string;
}

export interface AppState {
  [customCardKey]: CustomCardState,
}
export interface CustomCardState {
  [customCardKey]: CustomCard[];
  [customCardKey2]: [];
}

const initialState: CustomCardState = {
  [customCardKey]: [],
  [customCardKey2]: [],
};

export const cardReducer = createReducer(
  initialState,
  // eslint-disable-next-line @ngrx/on-function-explicit-return-type
  on(AddCardAction, (state: CustomCardState, action) => ({
    ...state,
    [customCardKey]: [...state[customCardKey], action.payload],
  })),

);

export function customCardReducer(state: CustomCardState | undefined, action: Action) {
  return cardReducer(state, action);
}
