import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  map, mergeMap, Observable, Subject,
} from 'rxjs';
import {
  MAX_RESULTS,
} from '../models/data';
import { Item, ItemSearch } from '../models/search-item.model';
import { YoutubeResponse } from '../models/search-response.model';

@Injectable({ providedIn: 'root' })
export class HttpService {
  dataForCard!: any;

  private dataCard = new Subject<Item[]>();

  arrayItems = this.dataCard.asObservable();

  updateShowResults(showResults: any): void {
    this.dataCard.next(showResults);
  }

  constructor(private http: HttpClient) { }

  getData(value: string): Observable<any> {
    return this.http.get(`search?key=&type=video&maxResults=${MAX_RESULTS}&q=${value}`).pipe(mergeMap((res: any) => {
      const stringWithId: string = res.items.map((item: ItemSearch) => item.id.videoId).join(',');
      return this.http.get(`videos?key=&id=${stringWithId}&part=snippet,statistics`);
    }));
  }

  getVideo(value: string): Observable<Item> {
    return this.http.get<YoutubeResponse>(`videos?key=&id=${value}&part=snippet,statistics`).pipe(map((video) => video.items[0]));
  }
}
