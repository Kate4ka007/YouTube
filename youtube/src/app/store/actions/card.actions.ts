import { createAction, props } from '@ngrx/store';
// eslint-disable-next-line import/no-cycle
import { CustomCard } from '../reducers/card.reducer';

export enum CardAction {
  cardAction = '[Custom card] Add',
}

export const AddCardAction = createAction(
  CardAction.cardAction,
  props<{ payload: CustomCard; }>(),
);
