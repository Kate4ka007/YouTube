import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { SortTypeService } from 'src/app/core/services/sort-type.service';
import { YoutubeItemService } from 'src/app/core/services/youtube-item.service';
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

  constructor(
    private sortTypeService: SortTypeService,
    private httpService: HttpService,
    private youtubeItemService:YoutubeItemService,
  ) {}

  ngOnInit(): void {
    this.youtubeItemService.search.pipe(

      switchMap((searchData) => this.httpService.getData(searchData)),
    )
      .subscribe((el) => {
        this.cardData = el.items;
        this.httpService.updateShowResults(this.cardData);
        console.log(this.cardData);
      });
    this.sortTypeService.results.subscribe((data) => { this.typeSort = data; });

    // this.httpService.getFullData(this.searchData);
    /*     this.httpService.arrayItems.subscribe((el: Item[]) => { this.cardData = el; });
    this.httpService.updateShowResults(this.cardData); */
  }
}
