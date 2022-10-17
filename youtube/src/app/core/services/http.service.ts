import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {
  KEY_YOUTUBE, BASE, MAX_RESULTS, SEARCH_DATA,
} from '../models/data';
import { Item, ItemSearch } from '../models/search-item.model';

@Injectable({ providedIn: 'root' })
export class HttpService {
  stringWithId = '';

  dataForCard!: any;

  private dataCard = new Subject<Item[]>();

  arrayItems = this.dataCard.asObservable();

  updateShowResults(showResults: any): void {
    this.dataCard.next(showResults);
  }

  constructor(private http: HttpClient) { }

  doSearch(searchData: string):Observable<any> {
    return this.http.get(`${BASE}search?key=${KEY_YOUTUBE}&type=video&maxResults=${MAX_RESULTS}&q=${searchData}`);
  }

  getVideoById(stringWithId: string):Observable<any> {
    return this.http.get(`${BASE}videos?key=${KEY_YOUTUBE}&id=${stringWithId}&part=snippet,statistics`);
  }

  getFullData(): void {
    this.doSearch(SEARCH_DATA).subscribe({
      next: (data: any) => {
        const cards = data.items;
        const stringId:Array<string> = [];
        cards.forEach((el: ItemSearch) => {
          stringId.push(el.id.videoId);
        });
        this.stringWithId = stringId.join(',');
        this.getVideoById(this.stringWithId).subscribe({
          next: (elem: any) => {
            this.dataForCard = elem.items;
            this.updateShowResults(this.dataForCard);
          },
        });
      },
    });
  }
}
