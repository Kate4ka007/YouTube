import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { SortTypeService } from 'src/app/core/services/sort-type.service';
import { YoutubeItemService } from 'src/app/core/services/youtube-item.service';
import { CustomCard, AppState } from 'src/app/store/reducers/card.reducer';
import { selectFeatureCards } from 'src/app/store/selectors/card.selectors';
import { Item } from '../../../core/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  cardData: Item[] | undefined;

  typeSort!: string;

  searchData = '';

  customCards$!: Observable<CustomCard[]>;

  constructor(
    private sortTypeService: SortTypeService,
    private httpService: HttpService,
    private youtubeItemService: YoutubeItemService,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.customCards$ = this.store.select(selectFeatureCards);
    this.youtubeItemService.search.pipe(

      switchMap((searchData) => this.httpService.getData(searchData)),
    )
      .subscribe((el) => {
        this.cardData = el.items;
        this.httpService.updateShowResults(this.cardData);
      });
    this.sortTypeService.results.subscribe((data) => { this.typeSort = data; });
  }
}
