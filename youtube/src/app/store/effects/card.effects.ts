import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, mergeMap, of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { YoutubeItemService } from 'src/app/core/services/youtube-item.service';
import { CardAction } from '../actions/card.actions';
import { SearchCardAction } from '../actions/search.action';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private youtubeItemService: YoutubeItemService,
  ) { }

  search$$ = createEffect(
    () => this.actions$.pipe(
      ofType(CardAction.cardAction),
      debounceTime(800),
      mergeMap(() => of({ type: SearchCardAction.searchSuccess })),
    ),
  );
}
