/* import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Item } from 'src/app/core/models/search-item.model';
import { AppState, cardNode } from '../reducers/card.reducer';

export const selectCountFeature = createFeatureSelector<AppState>(cardNode);

export const selectCards = createSelector(
  selectCountFeature,
  (state: AppState): Item[] => state.cards,
);

export const selectUpdatedAt = createSelector(
  selectCountFeature,
  (state: AppState): number => state.updatedAt,
); */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customCardKey, CustomCardState } from '../reducers/card.reducer';

const selectCardFeatureSelector = createFeatureSelector<CustomCardState>(customCardKey);

export const selectFeatureCards = createSelector(
  selectCardFeatureSelector,
  (state: CustomCardState) => state.customCardState,
);
