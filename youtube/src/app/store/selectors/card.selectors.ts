import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customCardKey, customCardKey2, CustomCardState } from '../reducers/card.reducer';

const selectCardFeatureSelector = createFeatureSelector<CustomCardState>(customCardKey);

export const selectFeatureCards = createSelector(
  selectCardFeatureSelector,
  (state) => state[customCardKey],
);

export const selectFeatureCards2 = createSelector(
  selectCardFeatureSelector,
  (state) => state[customCardKey2],
);
